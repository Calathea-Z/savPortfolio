'use client';

import { MapPin } from '@phosphor-icons/react';

export default function Footer() {
  return (
    <footer className="bg-[#4A5C54] py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-6">
          {/* Main Heading */}
          <h2 className="text-h1 text-[#E0E0E0]">
            Want to say Hi!
          </h2>
          
          {/* Contact Information */}
          <div className="space-y-4">
            <p className="text-body text-[#E0E0E0]">
              Send me an email to{' '}
              <a href="mailto:Phipps.sav@gmail.com" className="text-[#E08060] hover:text-[#E9907D] transition-colors">
                Phipps.sav@gmail.com
              </a>
            </p>
            
            <p className="text-body text-[#E0E0E0]">
              Looking forward to talking with you!
            </p>
            
            {/* Location */}
            <div className="flex items-center space-x-2">
              <MapPin size={16} className="text-[#E08060]" />
              <p className="text-caption text-[#E0E0E0]">
                Currently based in Denver, CO
              </p>
            </div>
          </div>
          
          {/* Footer Bottom */}
          <div className="pt-8 border-t border-[#E0E0E0]/20">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
              <p className="text-caption text-[#E0E0E0]">
                Site developed by{' '}
                <a href="https://calathea.design" target="_blank" className="text-[#E08060] hover:text-[#E9907D] transition-colors">
                  Calathea Web Designs
                </a>
              </p>
              
              <p className="text-caption text-[#E0E0E0]">
                © 2025 All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
