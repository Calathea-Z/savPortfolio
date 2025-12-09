'use client';

import { MapPin } from '@phosphor-icons/react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#4A5C54] py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* Left Column - Contact */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-light text-white/90">
              Want to say Hi?
            </h2>
            
            <p className="text-lg text-white/60 leading-relaxed">
              I'd love to hear from you. Whether you have a project in mind or just want to connect.
            </p>
            
            <a 
              href="mailto:Phipps.sav@gmail.com" 
              className="inline-block text-xl text-[#E9907D] hover:text-[#FCD28F] transition-colors duration-300"
            >
              Phipps.sav@gmail.com
            </a>
            
            <div className="flex items-center gap-2 text-white/50">
              <MapPin size={18} weight="fill" className="text-[#E9907D]" />
              <span className="text-sm">Denver, CO</span>
            </div>
          </div>

          {/* Right Column - Links */}
          <div className="flex flex-col md:items-end justify-center space-y-4">
            <nav className="flex flex-col md:items-end gap-3">
              <Link 
                href="/" 
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                About
              </Link>
              <Link 
                href="/casestudy-porchlight" 
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                Work
              </Link>
              <Link 
                href="/contact" 
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <p>
              Designed by Savannah · Developed by{' '}
              <a 
                href="https://calathea.design" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#E9907D]/80 hover:text-[#E9907D] transition-colors"
              >
                Calathea Web Designs
              </a>
            </p>
            
            <p>© 2025 All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
