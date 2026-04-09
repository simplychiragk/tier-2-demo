"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Stethoscope,
  Baby,
  Syringe,
  FlaskConical,
  HeartPulse,
  Activity,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "General Checkup",
    desc: "Comprehensive health evaluations to catch issues early and keep you at your best.",
    iconColor: "text-amber-500",
    featured: true,
  },
  {
    icon: Baby,
    title: "Pediatrics",
    desc: "Specialized care for infants, children, and adolescents.",
    iconColor: "text-teal-500",
    featured: false,
  },
  {
    icon: Syringe,
    title: "Vaccination",
    desc: "Complete immunization programs following national guidelines.",
    iconColor: "text-amber-500",
    featured: false,
  },
  {
    icon: FlaskConical,
    title: "Lab Tests",
    desc: "On-site diagnostic testing with quick, accurate results.",
    iconColor: "text-teal-400",
    featured: false,
  },
  {
    icon: HeartPulse,
    title: "Women's Health",
    desc: "Dedicated reproductive health and wellness services.",
    iconColor: "text-amber-400",
    featured: false,
  },
  {
    icon: Activity,
    title: "Chronic Care",
    desc: "Ongoing support for long-term health conditions.",
    iconColor: "text-teal-500",
    featured: false,
  },
];

const fadeUpParams = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
           {...fadeUpParams}
           transition={{ duration: 0.6, ease: "easeOut" }}
           className="mb-12 md:mb-16 max-w-3xl"
        >
          <span className="inline-block text-[10px] tracking-widest font-medium text-amber-500 uppercase mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4 tracking-tight leading-tight">
            Comprehensive Care for All Ages
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-white/70 leading-relaxed max-w-xl mt-4">
            From routine checkups to specialized treatment, we&apos;re equipped to support
            your health at every stage of life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            
            return (
              <motion.article
                key={service.title}
                 {...fadeUpParams}
                 transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: "easeOut" 
                 }}
                className={cn(
                  "group relative p-8 rounded-3xl",
                  "bg-card border border-slate-100 dark:border-white/[0.05] shadow-sm dark:shadow-none",
                  "hover:-translate-y-1 transition-all duration-400 cursor-default glow-gold-hover",
                  service.featured ? "md:col-span-2 lg:col-span-2 flex flex-col md:flex-row md:items-center gap-6 md:gap-10" : "flex flex-col gap-5"
                )}
              >
                <div
                  className={cn(
                    "w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center",
                    "bg-surface-alt transition-colors duration-300 group-hover:bg-amber-500/10",
                    service.iconColor
                  )}
                >
                  <Icon size={20} strokeWidth={1.5} className={cn(!service.featured && "opacity-70")} />
                </div>
                
                <div>
                  <h3 className={cn("font-semibold mb-3", service.featured ? "text-xl md:text-2xl text-slate-900 dark:text-white" : "text-lg text-foreground")}>
                    {service.title}
                  </h3>
                  <p className={cn("leading-relaxed text-sm md:text-base mt-3", service.featured ? "text-slate-600 dark:text-white/70" : "text-slate-500 dark:text-white/40")}>
                    {service.desc}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
