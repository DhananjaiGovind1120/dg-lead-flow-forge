
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 md:py-6 fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container px-4 mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-display font-bold"><span className="text-dgblue-600">DMS</span><span className="text-brand-600"> Solutions</span></a>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            <a href="#features" className="font-medium hover:text-brand-600 transition-colors">
              Solutions
            </a>
            <a href="#how-it-works" className="font-medium hover:text-brand-600 transition-colors">
              How It Works
            </a>
            <a href="#testimonials" className="font-medium hover:text-brand-600 transition-colors">
              Testimonials
            </a>
          </div>
          <Button variant="default" className="bg-gradient hover:opacity-90">
            Get Started
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
            <a 
              href="#features" 
              className="text-lg py-3 font-medium hover:text-brand-600 transition-colors"
              onClick={toggleMenu}
            >
              Solutions
            </a>
            <a 
              href="#how-it-works" 
              className="text-lg py-3 font-medium hover:text-brand-600 transition-colors"
              onClick={toggleMenu}
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="text-lg py-3 font-medium hover:text-brand-600 transition-colors"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <div className="pt-4">
              <Button variant="default" className="w-full bg-gradient hover:opacity-90">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
