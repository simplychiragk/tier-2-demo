"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  ChevronDown,
} from "lucide-react";

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const textEncoded = encodeURIComponent(
      `*Private Inquiry - MedCare Clinic*\n\n*Name:* ${data.name}\n*Email:* ${data.email}\n*Phone:* ${data.phone}\n*Service:* ${data.service}\n*Message:* ${data.message}`
    );

    window.open(`https://wa.me/6239364781?text=${textEncoded}`, "_blank");
  };

  const inputClasses = cn(
    "w-full px-5 py-4 rounded-xl text-sm transition-all duration-300",
    // Light Mode styling
    "bg-slate-50 border text-slate-900 placeholder:text-slate-400 border-slate-300",
    "focus:outline-none focus:border-[#2B7A9E] focus:ring-2 focus:ring-[#2B7A9E]/15",
    "hover:border-slate-400",
    // Dark Mode styling
    "dark:bg-[#080808] dark:border-white/[0.08] dark:text-white/90 dark:placeholder:text-white/30",
    "dark:focus:border-teal-500/50 dark:focus:ring-0 dark:focus:shadow-[0_0_20px_rgba(45,212,191,0.15)] dark:focus:bg-[#0a0a0a]",
    "dark:hover:border-white/[0.15]"
  );

  const labelClasses = "text-[11px] uppercase tracking-wider mb-2 block font-medium ml-1 text-slate-700 dark:text-white/50";

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden bg-slate-50 dark:bg-[#030303] transition-colors duration-700">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] bg-transparent dark:bg-[radial-gradient(circle,rgba(45,212,191,0.06)_0%,transparent_60%)] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block text-[10px] uppercase tracking-widest font-medium px-4 py-1.5 rounded-full mb-8 border transition-colors duration-700 text-slate-500 border-slate-200 bg-white dark:text-teal-400 dark:border-teal-400/20 dark:bg-teal-400/5">
            Concierge Support
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium mb-6 tracking-tight text-slate-900 dark:text-white transition-colors duration-700">
            Elevate Your Wellness
          </h2>
          <p className="text-slate-600 dark:text-white/70 text-base md:text-lg leading-relaxed max-w-xl mx-auto transition-colors duration-700 mt-4">
            Inquire to begin your bespoke healthcare journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* Main Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-7 rounded-3xl p-8 md:p-12 relative overflow-hidden transition-all duration-400 bg-white border border-slate-200 shadow-sm dark:bg-card dark:border-border/50 dark:shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
          >
            <div className="absolute inset-0 bg-transparent dark:bg-[radial-gradient(ellipse_at_top_right,rgba(45,212,191,0.06),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-8" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className={labelClasses}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="e.g. Eleanor Vance"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClasses}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="e.g. e.vance@bespoke.med"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="phone" className={labelClasses}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="e.g. +91 98765 43210"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="service" className={labelClasses}>
                    Desired Service
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className={cn(
                        inputClasses,
                        "appearance-none pr-10"
                      )}
                    >
                      <option value="" disabled className="bg-white dark:bg-[#050505] text-slate-400 dark:text-white/50">
                        Select a specialty...
                      </option>
                      <option value="Executive Health Assessment" className="bg-white dark:bg-[#050505] text-slate-900 dark:text-white/90">
                        Executive Health Assessment
                      </option>
                      <option value="Regenerative Medicine" className="bg-white dark:bg-[#050505] text-slate-900 dark:text-white/90">
                        Regenerative Medicine
                      </option>
                      <option value="Aesthetic Dermatology" className="bg-white dark:bg-[#050505] text-slate-900 dark:text-white/90">
                        Aesthetic Dermatology
                      </option>
                      <option value="Personalized Longevity Program" className="bg-white dark:bg-[#050505] text-slate-900 dark:text-white/90">
                        Personalized Longevity Program
                      </option>
                      <option value="Concierge Pediatrics" className="bg-white dark:bg-[#050505] text-slate-900 dark:text-white/90">
                        Concierge Pediatrics
                      </option>
                      <option value="Private Consultation" className="bg-white dark:bg-[#050505] text-slate-900 dark:text-white/90">
                        Private Consultation
                      </option>
                    </select>
                    <ChevronDown
                      size={16}
                      className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 dark:text-white/30"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelClasses}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Share your requirements with our dedicated care team..."
                  className={cn(inputClasses, "resize-y min-h-[140px] pt-4")}
                />
              </div>

              <button
                type="submit"
                className="mt-6 flex items-center justify-center gap-4 w-full sm:w-auto px-12 py-5 rounded-xl font-medium tracking-wide text-sm transition-all duration-300
                bg-[#2B7A9E] text-white shadow-md hover:shadow-lg hover:bg-[#205d78]
                dark:bg-[#0a0a0a]/80 dark:backdrop-blur-md dark:border dark:border-teal-500/30 dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] dark:hover:bg-[#0f0f0f] dark:hover:border-teal-400/50 dark:hover:shadow-[0_15px_40px_rgba(45,212,191,0.2)]"
              >
                <span className="relative z-10 block pt-[1px]">
                  Submit Inquiry
                </span>
                <Send size={16} className="text-white/90 dark:text-teal-400 transition-transform duration-300 relative z-10" />
              </button>
            </form>
          </motion.div>

          {/* Luxury Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="group relative lg:col-span-5 rounded-3xl p-8 md:p-12 flex flex-col justify-between transition-all duration-400 bg-white border border-slate-200 shadow-sm dark:bg-card dark:border-border/50 dark:shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
          >
             <div className="absolute inset-0 bg-transparent dark:bg-[radial-gradient(ellipse_at_bottom_left,rgba(45,212,191,0.04),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

            <div className="flex flex-col gap-14 h-full relative z-10">
              {/* Box 1 */}
              <div>
                <h3 className="text-2xl font-serif mb-8 tracking-wide text-slate-900 dark:text-white/90 transition-colors duration-700">Private Suite Access</h3>
                
                {/* Architectural Blueprint Map styling */}
                <div className="relative w-full h-48 rounded-2xl overflow-hidden border mb-8 bg-slate-100 border-slate-300 dark:bg-[#030303] dark:border-white/[0.06] transition-colors duration-700">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#F1F5F9_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,#030303_100%)] transition-colors duration-700" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="relative">
                       <MapPin className="text-slate-600 dark:text-teal-400/80 h-10 w-10 relative z-10 dark:drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]" strokeWidth={1} />
                       {/* Pulse ring dark mode only */}
                       <div className="hidden dark:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full dark:border dark:border-teal-500/40 animate-ping" />
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-5 items-start">
                  <div className="pt-1.5">
                    <div className="w-10 h-10 rounded-full border flex flex-col justify-center items-center transition-colors duration-700 text-slate-600 border-slate-200 bg-white shadow-sm dark:text-teal-400 dark:border-teal-500/20 dark:bg-teal-950/30">
                      <MapPin size={16} strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <p className="text-[15px] leading-loose font-light tracking-wide text-slate-600 dark:text-white/70 transition-colors duration-700">
                      SCO 14, Barwala Road, Ground Floor<br />
                      Dera Bassi, Punjab - 140507, INDIA
                    </p>
                  </div>
                </div>
              </div>

              {/* Box 2 */}
              <div className="flex-1 flex justify-center flex-col">
                <h3 className="text-2xl font-serif mb-8 tracking-wide text-slate-900 dark:text-white/90 transition-colors duration-700">Contact Details</h3>
                <div className="flex flex-col gap-8">
                  <div className="flex gap-5 items-center">
                    <div className="w-10 h-10 rounded-full border flex flex-col justify-center items-center transition-colors duration-700 text-slate-600 border-slate-200 bg-white shadow-sm dark:text-teal-400 dark:border-teal-500/20 dark:bg-teal-950/30">
                      <Phone size={16} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider mb-1.5 font-medium text-slate-500 dark:text-white/30 transition-colors duration-700">Direct Concierge</p>
                      <p className="text-[15px] font-light tracking-wide text-slate-700 dark:text-white/80 transition-colors duration-700">+91 6239364781</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-5 items-center">
                    <div className="w-10 h-10 rounded-full border flex flex-col justify-center items-center transition-colors duration-700 text-slate-600 border-slate-200 bg-white shadow-sm dark:text-teal-400 dark:border-teal-500/20 dark:bg-teal-950/30">
                      <Mail size={16} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider mb-1.5 font-medium text-slate-500 dark:text-white/30 transition-colors duration-700">Priority Email</p>
                      <p className="text-[15px] font-light tracking-wide text-slate-700 dark:text-white/80 transition-colors duration-700">chiragkumar.work@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
