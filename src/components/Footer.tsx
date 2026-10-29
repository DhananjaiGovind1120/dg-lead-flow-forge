
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  MapPin, 
  Phone 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container px-4 mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="text-2xl font-display font-bold mb-5">
              <span className="text-dgblue-500">Grace</span>
              <span className="text-brand-400"> automations</span>
            </div>
            <p className="text-slate-400 mb-6">
              Automation for the modern age – powered by Grace automations.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-5">Solutions</h3>
            <ul className="space-y-3">
              <li><a href="#what-we-set-up" className="text-slate-400 hover:text-white transition-colors">Enquiries</a></li>
              <li><a href="#what-we-set-up" className="text-slate-400 hover:text-white transition-colors">Bookings</a></li>
              <li><a href="#what-we-set-up" className="text-slate-400 hover:text-white transition-colors">Invoices and payments</a></li>
              <li><a href="#what-we-set-up" className="text-slate-400 hover:text-white transition-colors">WhatsApp follow-up</a></li>
              <li><a href="#what-we-set-up" className="text-slate-400 hover:text-white transition-colors">Admin and compliance</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-5">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-brand-400 mr-3 mt-0.5" />
                <span className="text-slate-400">
                  123 Innovation Drive<br />
                  Suite 200<br />
                  San Francisco, CA 94103
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-brand-400 mr-3" />
                <span className="text-slate-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-brand-400 mr-3" />
                <span className="text-slate-400">info@dgsolutions.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              &copy; {currentYear} Grace automations. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
