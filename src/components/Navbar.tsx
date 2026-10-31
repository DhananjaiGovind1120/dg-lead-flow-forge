import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#what-we-set-up", label: "What we take off your plate" },
  { href: "#how-it-works", label: "How it works" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  // Close on Escape and stop the page behind the panel from scrolling
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="py-4 md:py-6 fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md">
        <div className="container px-4 mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-xl sm:text-2xl font-display font-bold whitespace-nowrap"><span className="text-dgblue-400">G.R.A.C.E</span><span className="text-brand-400"> automations</span></a>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="font-medium hover:text-brand-400 transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
            <Button variant="default" className="bg-gradient hover:opacity-90" asChild>
              <a href="#schedule-demo">Book a call</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(true)} aria-label="Open menu" aria-expanded={isMenuOpen}>
              <Menu size={24} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile side panel, kept outside the navbar so it covers the whole screen */}
      <div className={`md:hidden fixed inset-0 z-[60] ${isMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div
          onClick={closeMenu}
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-[80%] max-w-xs flex-col border-l border-border bg-card p-6 shadow-2xl transition-transform duration-300 ease-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          aria-label="Site menu"
        >
          <div className="mb-8 flex items-center justify-between">
            <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Menu</span>
            <Button variant="ghost" size="icon" onClick={closeMenu} aria-label="Close menu">
              <X size={24} />
            </Button>
          </div>

          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-4 text-xl font-medium transition-colors hover:bg-accent hover:text-brand-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-8">
            <Button size="lg" className="w-full bg-gradient hover:opacity-90" asChild>
              <a href="#schedule-demo" onClick={closeMenu}>Book a free 30-minute call</a>
            </Button>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Navbar;
