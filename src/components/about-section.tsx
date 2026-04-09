"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const stats = [
  { number: "15+", label: "Years of Excellence" },
  { number: "20,000+", label: "Patients Served" },
  { number: "10+", label: "Specialist Doctors" },
];

const fadeUpParams = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <motion.div
            {...fadeUpParams}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="max-w-2xl"
          >
            <span className="inline-block text-[10px] tracking-widest font-medium text-primary uppercase mb-4">
              Our Legacy
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 tracking-tight leading-tight">
              Caring for Your Community Since 2009
            </h2>
            <div className="mt-4">
              <p className="text-base md:text-lg text-slate-600 dark:text-white/70 leading-relaxed mb-6">
                MedCare Clinic was founded with a simple belief: quality healthcare should be
                accessible, compassionate, and thorough. 
              </p>
              <p className="text-base md:text-lg text-slate-600 dark:text-white/70 leading-relaxed">
                Our team of dedicated physicians
                brings over 15 years of combined experience in general medicine, pediatrics,
                and preventive care. We treat every patient like family.
              </p>
            </div>
          </motion.div>

          {/* Right Stats: Clean staggered grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            <div className="flex flex-col gap-6 pt-0 sm:pt-12">
               {[stats[0], stats[2]].map((stat, i) => (
                 <motion.article
                   key={stat.label}
                   {...fadeUpParams}
                   transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                   className={cn(
                     "p-8 rounded-2xl bg-card border border-border/50",
                     "hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 transition-all duration-400 cursor-default"
                   )}
                 >
                   <span className="block text-4xl md:text-5xl font-medium text-foreground mb-3 tracking-tight">
                     {stat.number}
                   </span>
                   <span className="text-sm text-muted font-medium uppercase tracking-wider">{stat.label}</span>
                 </motion.article>
               ))}
            </div>
            <div className="flex flex-col gap-6">
               <motion.article
                 {...fadeUpParams}
                 transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                 className={cn(
                   "p-8 rounded-2xl bg-card border border-border/50",
                   "hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 transition-all duration-400 cursor-default"
                 )}
               >
                 <span className="block text-4xl md:text-5xl font-medium text-foreground mb-3 tracking-tight">
                   {stats[1].number}
                 </span>
                 <span className="text-sm text-muted font-medium uppercase tracking-wider">{stats[1].label}</span>
               </motion.article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
