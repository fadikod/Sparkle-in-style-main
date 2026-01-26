import React from 'react';
import { Facebook, Instagram, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF7F5] text-neutral-800 pt-16 pb-10 border-t border-neutral-200">
      <div className="container mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-gold-500" />
              <h3 className="font-display text-2xl tracking-tight text-neutral-900">
                Sparkle
                <span className="italic text-gold-600 font-light mx-1">in</span>
                Style
              </h3>
            </div>

            <p className="text-neutral-600 text-sm leading-relaxed mb-6 max-w-sm">
              Professional beauty education and luxury salon services — built on passion, skill and creativity.
            </p>

            <div className="flex gap-4 mt-4">
              <a href="#" className="text-neutral-500 hover:text-gold-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-500 hover:text-gold-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* ACADEMY LINKS */}
          <div>
            <h4 className="font-display text-lg mb-5 text-neutral-900">Academy</h4>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li><a href="#" className="hover:text-gold-600 transition-colors">Make-up & Visagie</a></li>
              <li><a href="#" className="hover:text-gold-600 transition-colors">Hair & Styling</a></li>
              <li><a href="#" className="hover:text-gold-600 transition-colors">Nail Styling</a></li>
              <li><a href="#" className="hover:text-gold-600 transition-colors">Admissions</a></li>
            </ul>
          </div>

          {/* SALON LINKS */}
          <div>
            <h4 className="font-display text-lg mb-5 text-neutral-900">Salon</h4>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li><a href="#" className="hover:text-gold-600 transition-colors">Book Appointment</a></li>
              <li><a href="#" className="hover:text-gold-600 transition-colors">Service Menu</a></li>
              <li><a href="#" className="hover:text-gold-600 transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-display text-lg mb-5 text-neutral-900">Contact</h4>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li>Zuidlarenstraat 57</li>
              <li>2545 VP Den Haag</li>
              <li>+31 6 00 00 00 00</li>
              <li>info@sparkleinstyle.nl</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM ROW */}
        <div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
          <p>&copy; 2024 Sparkle In Style. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-neutral-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
