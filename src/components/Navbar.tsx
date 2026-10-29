import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#what-we-set-up", label: "What we set up" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 md:py-6 fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container px-4 mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-xl sm:text-2xl font-display font-bold whitespace-nowrap"><span className="text-dgblue-600">Grace</span><span className="text-brand-600"> automations</span></a>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="font-medium hover:text-brand-600 transition-colors">
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
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background p-4 md:hidden">
          <div className="flex flex-col gap-4 pt-8 text-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg py-3 font-medium hover:text-brand-600 transition-colors"
                onClick={toggleMenu}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <Button variant="default" className="w-full bg-gradient hover:opacity-90" asChild>
                <a href="#schedule-demo" onClick={toggleMenu}>Book a call</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
