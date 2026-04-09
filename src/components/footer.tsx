import { MapPin, Phone, Mail, ExternalLink, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Brand */}
          <div>
            <a
              href="#hero"
              className="inline-flex items-center gap-2 text-xl font-bold group mb-4"
              aria-label="MedCare Clinic home"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 28 28"
                fill="none"
                className="text-primary"
                aria-hidden="true"
              >
                <rect
                  x="2"
                  y="2"
                  width="24"
                  height="24"
                  rx="6"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="14"
                  y1="8"
                  x2="14"
                  y2="20"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <line
                  x1="8"
                  y1="14"
                  x2="20"
                  y2="14"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-foreground">
                Med<span className="text-primary">Care</span>
              </span>
            </a>
            <p className="text-sm text-slate-600 dark:text-white/70 max-w-xs leading-relaxed mt-4">
              Compassionate healthcare for your entire family. Trusted by thousands
              across New Delhi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2.5" role="list">
              {["About Us", "Services", "Our Doctors", "Testimonials", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, "").replace("our", "")}`}
                      className="text-sm text-muted hover:text-primary transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="flex flex-col gap-3" role="list">
              <li className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-white/70">
                <MapPin size={14} className="text-primary shrink-0" />
                42 Health Avenue, New Delhi
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-white/70">
                <Phone size={14} className="text-primary shrink-0" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-white/70">
                <Mail size={14} className="text-primary shrink-0" />
                care@medcareclinic.in
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} MedCare Clinic. All rights reserved.
          </p>
          <div className="flex gap-3">
            {[
              { icon: ExternalLink, label: "Facebook" },
              { icon: Heart, label: "Instagram" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 rounded-full flex items-center justify-center text-muted hover:text-primary hover:bg-primary/5 transition-all duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
