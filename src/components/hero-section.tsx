"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const FRAME_COUNT = 42;
const FIRST_BATCH = 10;

function preloadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
}

function getFrameUrl(index: number) {
  const padded = String(index).padStart(3, "0");
  return `/frames/frame_${padded}.webp`;
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [images, setImages] = useState<(HTMLImageElement | undefined)[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [fallbackImage, setFallbackImage] = useState<HTMLImageElement | null>(null);
  const [windowSize, setWindowSize] = useState({ w: 0, h: 0 });

  // Handle Resize & Device Type
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setWindowSize({ w: window.innerWidth, h: window.innerHeight });
    };
    checkMobile(); // initial check
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Progressive Lazy Loading
  useEffect(() => {
    // If it's strictly mobile, we only download the final frame (or frame 15) to save memory/data
    if (isMobile) {
      preloadImage(getFrameUrl(FRAME_COUNT)).then(setFallbackImage);
      return;
    }

    let isMounted = true;
    const loadedImages: (HTMLImageElement | undefined)[] = new Array(FRAME_COUNT).fill(undefined);

    const loadSequence = async () => {
      try {
        // Core frames loaded immediately and synchronously for initial view
        const firstBatchPromises = [];
        for (let i = 1; i <= Math.min(FIRST_BATCH, FRAME_COUNT); i++) {
          firstBatchPromises.push(
            preloadImage(getFrameUrl(i)).then(img => {
              loadedImages[i - 1] = img;
              return img;
            })
          );
        }
        await Promise.all(firstBatchPromises);
        
        if (isMounted) {
          setImages([...loadedImages]);
        }

        // Lazy load the rest in the background
        for (let i = FIRST_BATCH + 1; i <= FRAME_COUNT; i++) {
          preloadImage(getFrameUrl(i)).then(img => {
            if (!isMounted) return;
            loadedImages[i - 1] = img;
            // Update state periodically or when the last frame loads
            if (i % 5 === 0 || i === FRAME_COUNT) {
              setImages([...loadedImages]); 
            }
          });
        }
      } catch (e) {
        console.error("Error preloading sequence", e);
      }
    };
    
    loadSequence();

    return () => {
      isMounted = false;
    };
  }, [isMobile]);

  // Scroll Handling
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Start tracking when top of container hits top of viewport, end when bottom of container hits bottom of viewport
    offset: ["start start", "end end"]
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const displayIndexRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      const target = Math.min(FRAME_COUNT - 1, Math.floor(latest * FRAME_COUNT));
      
      const animate = (time: number) => {
        displayIndexRef.current += (target - displayIndexRef.current) * 0.18;
        const snapped = Math.round(displayIndexRef.current);
        setCurrentIndex(snapped);
        
        if (Math.abs(target - displayIndexRef.current) > 0.5) {
          rafRef.current = requestAnimationFrame(animate);
        }
      };
      
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(animate);
    });
    
    return () => {
      unsubscribe();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [scrollYProgress]);

  // Canvas Drawing Routine
  useEffect(() => {
    if (isMobile || !canvasRef.current || images.length === 0) return;

    // Smart fallback if the exact frame isn't loaded yet
    const targetImage = images[currentIndex];
    
    // Fall back to most recent loaded frame if possible, or any loaded frame otherwise
    const img = targetImage 
      || images.slice(0, currentIndex).reverse().find(Boolean) 
      || images.find(Boolean);

    if (!img) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false }); // Optimize for no transparency
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    // Scale for high dpi
    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    }

    // Precise Object-Fit Cover Calculation
    const canvasRatio = rect.width / rect.height;
    const imgRatio = img.width / img.height;
    
    let renderWidth = rect.width;
    let renderHeight = rect.height;
    let renderX = 0;
    let renderY = 0;

    if (canvasRatio > imgRatio) {
      // Canvas is wider: match width, overflow height
      renderWidth = rect.width;
      renderHeight = rect.width / imgRatio;
      renderY = (rect.height - renderHeight) / 2;
    } else {
      // Canvas is taller: match height, overflow width
      renderHeight = rect.height;
      renderWidth = rect.height * imgRatio;
      renderX = (rect.width - renderWidth) / 2;
    }

    // Draw
    ctx.fillStyle = "#030303";
    ctx.fillRect(0, 0, rect.width, rect.height);
    // ctx.imageSmoothingEnabled = true; (default is true)
    ctx.drawImage(img, renderX, renderY, renderWidth, renderHeight);

  }, [currentIndex, images, isMobile, windowSize]);

  // Subtle opacity ease (0.9 to 1.0)
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <section ref={containerRef} id="hero" className="relative h-[200vh] bg-[#030303]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Dynamic Canvas / Static Fallback */}
        {!isMobile ? (
          <canvas 
            ref={canvasRef} 
            className="w-full h-full object-cover" 
            style={{ display: "block" }} // remove inline gap
          />
        ) : (
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: fallbackImage ? `url(${fallbackImage.src})` : 'linear-gradient(135deg, #030303 0%, #0a1a18 50%, #030303 100%)',
              backgroundColor: '#030303'
            }}
          />
        )}
        
        {/* Premium Darkening Gradient Overlay for Unwavering Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-black/40 to-black/20 pointer-events-none z-10" />

        {/* Stable Text Overlay - Strict Rule: No Jumpy Fades or Movements */}
        <motion.div 
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 flex flex-col justify-center items-center z-20 px-4 md:px-8 pointer-events-none"
        >
          <div className="text-center max-w-4xl pt-16">
            <span className="inline-block text-[10px] uppercase tracking-widest font-medium px-4 py-1.5 rounded-full mb-8 border border-white/10 bg-black/30 backdrop-blur-md text-white/90">
              MedCare Priority
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight text-white mb-6 drop-shadow-lg">
              Your Family's Health
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-teal-50 via-teal-100 to-teal-400">
                Our Mission
              </span>
            </h1>
            <p className="text-base md:text-xl font-light tracking-wide text-white/80 max-w-2xl mx-auto mb-10 drop-shadow-md leading-relaxed mt-4">
              Experience concierge-level precision, luxury facilities, and personalized care seamlessly woven into your lifestyle.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pointer-events-auto">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600/90 hover:bg-teal-500 backdrop-blur-md text-white font-medium tracking-wide rounded-xl transition-all duration-300 shadow-[0_0_40px_rgba(45,212,191,0.2)] hover:shadow-[0_0_50px_rgba(45,212,191,0.3)] hover:-translate-y-0.5 border border-teal-500/50"
              >
                Book Appointment
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium tracking-wide rounded-xl transition-all duration-300 backdrop-blur-md hover:-translate-y-0.5"
              >
                Discover Our Services
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
