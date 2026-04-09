"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

const doctors = [
  {
    name: "Dr. Anika Patel",
    specialty: "Pediatrics",
    bio: "With a gentle approach and 12 years of experience, Dr. Patel makes every young patient feel at ease.",
    image: "/images/doctor-1.png",
    featured: true,
  },
  {
    name: "Dr. Rahul Mehta",
    specialty: "General Medicine",
    bio: "A diagnostic expert with 18 years in practice, known for thoroughness and empathy.",
    image: "/images/doctor-2.png",
    featured: false,
  },
  {
    name: "Dr. Neha Sharma",
    specialty: "Women's Health",
    bio: "Specializing in maternal care and wellness, bringing 10 years of compassionate expertise.",
    image: "/images/doctor-3.png",
    featured: false,
  },
];

const fadeUpParams = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

export function DoctorsSection() {
  return (
    <section id="doctors" className="section-padding bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          {...fadeUpParams}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 md:mb-16 max-w-3xl"
        >
          <span className="inline-block text-[10px] tracking-widest font-medium text-amber-500 uppercase mb-4">
            Our Doctors
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4 tracking-tight leading-tight">
            Meet the Team Behind Your Care
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-white/70 leading-relaxed max-w-xl mt-4">
            Experienced, compassionate physicians committed to your well-being.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {doctors.map((doctor, i) => (
            <motion.article
              key={doctor.name}
              {...fadeUpParams}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: "easeOut"
              }}
              className={cn(
                "group rounded-3xl overflow-hidden",
                "bg-card border border-border/50",
                "hover:-translate-y-1 hover:border-amber-400/50 glow-gold-hover",
                "transition-all duration-400 flex",
                // Featured layout strategy
                doctor.featured 
                  ? "md:col-span-2 flex-col md:flex-row" 
                  : "flex-col"
              )}
            >
              {/* Image Container */}
              <div className={cn(
                "relative overflow-hidden shrink-0",
                doctor.featured ? "w-full md:w-2/5 aspect-[4/3] md:aspect-auto" : "w-full aspect-[4/3]"
              )}>
                <Image
                  src={doctor.image}
                  alt={`${doctor.name}, ${doctor.specialty} specialist`}
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Info */}
              <div className={cn(
                "flex flex-col justify-center",
                doctor.featured ? "p-8 md:p-12" : "p-8"
              )}>
                <h3 className={cn(
                  "font-medium text-foreground mb-1 tracking-tight",
                  doctor.featured ? "text-2xl md:text-3xl" : "text-xl"
                )}>
                  {doctor.name}
                </h3>
                <p className="text-sm font-semibold text-teal-500/80 uppercase tracking-wider mb-4">
                  {doctor.specialty}
                </p>
                <p className="text-slate-600 dark:text-white/70 leading-relaxed text-sm md:text-base">
                  {doctor.bio}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
