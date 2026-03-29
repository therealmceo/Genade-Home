import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageSquare, ChevronDown } from "lucide-react";
import { cn } from "@/src/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Webinar", path: "/webinar" },
];

const propertyLinks = [
  { name: "Primesgate Estate", path: "/primesgate" },
  { name: "Vine City", path: "/vine-city" },
  { name: "Peace Ville", path: "/peace-ville" },
  { name: "White Plains", path: "/white-plains" },
  { name: "Addis City", path: "/addis-city" },
  { name: "The Verdant", path: "/the-verdant" },
  { name: "Fairview Estate", path: "/fairview-estate" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isPropertiesOpen, setIsPropertiesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const WHATSAPP_LINK = "https://wa.link/0d983p";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/logo.png" 
              alt="Genade Homes" 
              width="160" 
              height="40" 
              className="h-10 w-auto object-contain" 
              referrerPolicy="no-referrer" 
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary",
                scrolled ? "text-gray-700" : "text-white",
                location.pathname === "/" && "text-secondary"
              )}
            >
              Home
            </Link>
            
            <Link
              to="/about"
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary",
                scrolled ? "text-gray-700" : "text-white",
                location.pathname === "/about" && "text-secondary"
              )}
            >
              About
            </Link>

            {/* Properties Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsPropertiesOpen(true)}
              onMouseLeave={() => setIsPropertiesOpen(false)}
            >
              <button
                className={cn(
                  "text-sm font-medium transition-colors hover:text-secondary flex items-center space-x-1",
                  scrolled ? "text-gray-700" : "text-white",
                  propertyLinks.some(link => location.pathname === link.path) && "text-secondary"
                )}
              >
                <span>Properties</span>
                <ChevronDown size={14} className={cn("transition-transform duration-200", isPropertiesOpen && "rotate-180")} />
              </button>
              
              <div className={cn(
                "absolute top-full left-0 w-56 bg-white shadow-xl rounded-lg py-2 mt-2 border border-gray-100 transition-all duration-200 origin-top-left",
                isPropertiesOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
              )}>
                {propertyLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors",
                      location.pathname === link.path && "text-primary font-bold bg-gray-50"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/webinar"
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary",
                scrolled ? "text-gray-700" : "text-white",
                location.pathname === "/webinar" && "text-secondary"
              )}
            >
              Webinar
            </Link>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-primary px-5 py-2 rounded-full font-semibold flex items-center space-x-2 hover:bg-opacity-90 transition-all"
            >
              <MessageSquare size={18} />
              <span>Contact Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-md",
                scrolled ? "text-primary" : "text-white"
              )}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-xl border-t border-gray-100 animate-in slide-in-from-top duration-300 max-h-[80vh] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-3 py-4 text-base font-medium rounded-md",
                location.pathname === "/" ? "text-primary bg-gray-50" : "text-gray-700 hover:text-primary hover:bg-gray-50"
              )}
            >
              Home
            </Link>
            
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-3 py-4 text-base font-medium rounded-md",
                location.pathname === "/about" ? "text-primary bg-gray-50" : "text-gray-700 hover:text-primary hover:bg-gray-50"
              )}
            >
              About
            </Link>

            {/* Mobile Properties Accordion */}
            <div className="space-y-1">
              <button
                onClick={() => setIsPropertiesOpen(!isPropertiesOpen)}
                className={cn(
                  "w-full flex justify-between items-center px-3 py-4 text-base font-medium rounded-md text-gray-700 hover:text-primary hover:bg-gray-50",
                  propertyLinks.some(link => location.pathname === link.path) && "text-primary"
                )}
              >
                <span>Properties</span>
                <ChevronDown size={20} className={cn("transition-transform duration-200", isPropertiesOpen && "rotate-180")} />
              </button>
              
              {isPropertiesOpen && (
                <div className="pl-6 space-y-1 bg-gray-50/50 rounded-md py-2">
                  {propertyLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block px-3 py-3 text-sm font-medium rounded-md",
                        location.pathname === link.path ? "text-primary font-bold" : "text-gray-600 hover:text-primary"
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/webinar"
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-3 py-4 text-base font-medium rounded-md",
                location.pathname === "/webinar" ? "text-primary bg-gray-50" : "text-gray-700 hover:text-primary hover:bg-gray-50"
              )}
            >
              Webinar
            </Link>
            <div className="pt-4 px-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary text-secondary py-3 rounded-lg flex items-center justify-center space-x-2 font-bold"
              >
                <MessageSquare size={20} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
