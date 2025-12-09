import Image from 'next/image';
import Link from 'next/link';

export default function Showcase() {
  return (
    <section id="showcase" className="relative bg-[#FAF8F5] py-32 px-6 md:px-12">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#B8CBC8]/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-[#4C5C54]/50 mb-4">Selected Work</p>
          <h2 className="text-4xl md:text-5xl font-light text-[#4C5C54]">Case Studies</h2>
          <div className="w-24 h-px bg-linear-to-r from-transparent via-[#E9907D]/40 to-transparent mx-auto mt-8"></div>
        </div>

        {/* Project Cards */}
        <div className="space-y-16">
          {/* Project 1 - PorchLight */}
          <Link href="/casestudy-porchlight" className="group block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center bg-white rounded-3xl p-8 md:p-12 border border-[#4C5C54]/5 transition-all duration-500 hover:shadow-2xl hover:shadow-[#4C5C54]/5 hover:-translate-y-1">
              {/* Content */}
              <div className="space-y-6 order-2 lg:order-1">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E9907D]/10 text-[#E9907D] text-sm font-medium">01</span>
                  <p className="text-sm uppercase tracking-[0.15em] text-[#4C5C54]/50">UX/UI Mobile App</p>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-light text-[#4C5C54] group-hover:text-[#E9907D] transition-colors duration-300">
                  PorchLight
                </h3>
                
                <p className="text-lg text-[#4C5C54]/70 leading-relaxed">
                  A home-finding app designed to make moving feel more personal and less overwhelming—helping people discover neighborhoods and roommates that match their lifestyle.
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 bg-[#FAF8F5] text-[#4C5C54]/60 text-xs rounded-full">User Research</span>
                  <span className="px-3 py-1 bg-[#FAF8F5] text-[#4C5C54]/60 text-xs rounded-full">Wireframing</span>
                  <span className="px-3 py-1 bg-[#FAF8F5] text-[#4C5C54]/60 text-xs rounded-full">Prototyping</span>
                  <span className="px-3 py-1 bg-[#FAF8F5] text-[#4C5C54]/60 text-xs rounded-full">Figma</span>
                </div>

                <div className="pt-4">
                  <span className="inline-flex items-center gap-2 text-[#E9907D] font-medium group-hover:gap-3 transition-all duration-300">
                    Read Case Study 
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Image */}
              <div className="relative order-1 lg:order-2">
                <div className="aspect-square rounded-2xl overflow-hidden bg-[#FAF8F5] flex items-center justify-center p-8 group-hover:bg-[#E9907D]/5 transition-colors duration-500">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-[#E9907D]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Image 
                      src="/porchlight/PorchLight_Logo.png" 
                      alt="PorchLight Logo" 
                      width={280} 
                      height={280}
                      className="relative w-full max-w-[280px] h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Placeholder for future projects */}
          {/* 
          <Link href="/casestudy-2" className="group block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center bg-white rounded-3xl p-8 md:p-12 border border-[#4C5C54]/5 transition-all duration-500 hover:shadow-2xl hover:shadow-[#4C5C54]/5 hover:-translate-y-1">
              ...
            </div>
          </Link>
          */}
        </div>
      </div>
    </section>
  );
}
