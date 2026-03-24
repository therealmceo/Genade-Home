import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Youtube, Instagram, Facebook, Twitter, Send, MessageCircle } from "lucide-react";

export default function Footer() {
  const WHATSAPP_LINK = "https://wa.me/+2348143999430";

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="Genade Homes" className="h-12 w-auto object-contain brightness-0 invert" onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                (e.target as HTMLImageElement).nextElementSibling?.classList.add('flex');
              }} />
              <div className="hidden items-center space-x-2">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary font-bold text-xl">
                  G
                </div>
                <span className="font-serif text-2xl font-bold tracking-tight">
                  GENADE <span className="text-secondary">HOMES</span>
                </span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Sustainable Communities. Strategic Locations. Homes That Last.
              We create residential communities across Abuja’s growth corridors.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-primary transition-all">
                <Youtube size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-primary transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-primary transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-primary transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-primary transition-all">
                <Send size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-secondary">Quick Links</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/primesgate" className="hover:text-secondary transition-colors">Primesgate Estate</Link></li>
              <li><Link to="/webinar" className="hover:text-secondary transition-colors">Webinar Training</Link></li>
              <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Book Inspection</a></li>
              <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Speak With Advisor</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-secondary">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start space-x-3">
                <MapPin className="text-secondary shrink-0" size={18} />
                <span>Plot 971 Gospel Light Avenue, Durumi, Area 1, Abuja</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-secondary shrink-0" size={18} />
                <a href="mailto:genadehomes@gmail.com" className="hover:text-secondary transition-colors">genadehomes@gmail.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-secondary shrink-0" size={18} />
                <a href="tel:+2348143999430" className="hover:text-secondary transition-colors">08143999430</a>
              </li>
              <li className="flex items-center space-x-3">
                <MessageCircle className="text-secondary shrink-0" size={18} />
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">WhatsApp Support</a>
              </li>
            </ul>
          </div>

          {/* Newsletter/CTA */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-secondary">Join Our Community</h3>
            <p className="text-gray-300 text-sm mb-6">
              Stay updated with our latest estate launches and investment opportunities.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-secondary text-primary py-3 rounded-lg text-center font-bold hover:bg-opacity-90 transition-all"
            >
              Join WhatsApp Group
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Genade Homes. All rights reserved. Built for real living.</p>
        </div>
      </div>
    </footer>
  );
}
