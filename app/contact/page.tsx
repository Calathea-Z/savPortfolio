'use client';

import { Envelope, LinkedinLogo } from '@phosphor-icons/react';

export default function ContactPage() {
  return (
    <main>
      <section className="relative bg-[#FAF8F5] min-h-screen py-24 px-8">
        {/* Background Blob - Top Left */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FCD28F]/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Heading and Social Links */}
            <div className="space-y-8">
              <h1 className="text-h1 text-[#4C5C54]">
                Looking forward to talking with you!
              </h1>
              
              {/* Social Icons */}
              <div className="flex gap-4">
                <a 
                  href="mailto:Phipps.sav@gmail.com" 
                  className="w-12 h-12 rounded-full border-2 border-[#4C5C54] flex items-center justify-center hover:bg-[#E9907D] hover:border-[#E9907D] transition-colors group"
                >
                  <Envelope size={20} className="text-[#4C5C54] group-hover:text-white" />
                </a>
                <a 
                  href="https://www.linkedin.com" 
                  target="_blank"
                  className="w-12 h-12 rounded-full border-2 border-[#4C5C54] flex items-center justify-center hover:bg-[#E9907D] hover:border-[#E9907D] transition-colors group"
                >
                  <LinkedinLogo size={20} className="text-[#4C5C54] group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="space-y-6">
              <form className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-caption text-[#4C5C54] mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-[#4C5C54]/30 rounded-lg bg-white text-[#4C5C54] focus:outline-none focus:border-[#E9907D] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-caption text-[#4C5C54] mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-[#4C5C54]/30 rounded-lg bg-white text-[#4C5C54] focus:outline-none focus:border-[#E9907D] transition-colors"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-caption text-[#4C5C54] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-[#4C5C54]/30 rounded-lg bg-white text-[#4C5C54] focus:outline-none focus:border-[#E9907D] transition-colors"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-caption text-[#4C5C54] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-[#4C5C54]/30 rounded-lg bg-white text-[#4C5C54] focus:outline-none focus:border-[#E9907D] transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-[#E9907D] hover:bg-[#DB7C67] text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all font-inter font-medium text-sm uppercase tracking-wide cursor-pointer"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
