"use client";

import { MenuItem, MenuContainer } from "@/components/ui/fluid-menu";
import { Menu as MenuIcon, X, Home, Stethoscope, Users, MessageSquare } from "lucide-react";

export function MobileFab() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200] md:hidden">
      <MenuContainer>
        <MenuItem
          icon={
            <div className="relative w-6 h-6">
              <div className="absolute inset-0 transition-all duration-300 ease-in-out origin-center opacity-100 scale-100 rotate-0 [div[data-expanded=true]_&]:opacity-0 [div[data-expanded=true]_&]:scale-0 [div[data-expanded=true]_&]:rotate-180">
                <MenuIcon size={24} strokeWidth={1.5} />
              </div>
              <div className="absolute inset-0 transition-all duration-300 ease-in-out origin-center opacity-0 scale-0 -rotate-180 [div[data-expanded=true]_&]:opacity-100 [div[data-expanded=true]_&]:scale-100 [div[data-expanded=true]_&]:rotate-0">
                <X size={24} strokeWidth={1.5} />
              </div>
            </div>
          }
        />
        <MenuItem
          icon={<Home size={22} strokeWidth={1.5} />}
          onClick={() => scrollTo("hero")}
        />
        <MenuItem
          icon={<Stethoscope size={22} strokeWidth={1.5} />}
          onClick={() => scrollTo("services")}
        />
        <MenuItem
          icon={<Users size={22} strokeWidth={1.5} />}
          onClick={() => scrollTo("doctors")}
        />
        <MenuItem
          icon={<MessageSquare size={22} strokeWidth={1.5} />}
          onClick={() => scrollTo("contact")}
        />

      </MenuContainer>
    </div>
  );
}
