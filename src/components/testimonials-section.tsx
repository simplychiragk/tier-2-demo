"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "My kids actually look forward to their checkups here. The staff is wonderful.",
    author: "Priya Kapoor",
    rating: 5,
  },
  {
    quote:
      "Professional, punctual, and genuinely caring. The best clinic experience I've had.",
    author: "Arjun Nair",
    rating: 5,
  },
  {
    quote:
      "Dr. Mehta diagnosed what three other doctors couldn't. Forever grateful.",
    author: "Sunita Reddy",
    rating: 5,
  },
];

const fadeUpParams = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          {...fadeUpParams}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 md:mb-16 max-w-3xl"
        >
          <span className="inline-block text-[10px] tracking-widest font-medium text-primary uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4 tracking-tight leading-tight">
            What Our Patients Say
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-white/70 leading-relaxed max-w-xl mt-4">
            Real stories from the families we serve.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.author}
              {...fadeUpParams}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: "easeOut"
              }}
              className={cn(
                "relative flex flex-col gap-6 p-8 rounded-2xl",
                "bg-card border border-slate-100 dark:border-white/[0.05] shadow-sm dark:shadow-none",
                "hover:-translate-y-1 transition-all duration-400 cursor-default",
                // Subtle offset for middle card (Tier 2 polish)
                i === 1 ? "md:-translate-y-3" : ""
              )}
            >
              {/* Quote icon */}
              <Quote
                size={28}
                className="text-primary/20 transition-colors duration-400"
              />

              {/* Stars */}
              <div className="flex items-center gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star
                    key={si}
                    size={16}
                    className="fill-amber-400/70 text-amber-400/70"
                  />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-slate-700 dark:text-white/75 leading-relaxed flex-grow text-[15px]">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <cite className="not-italic text-sm font-medium text-slate-500 dark:text-white/40 uppercase tracking-wide">
                — {t.author}
              </cite>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
