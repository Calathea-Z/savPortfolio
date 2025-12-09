import Image from 'next/image';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="relative bg-white py-32 px-6 md:px-12 overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] opacity-[0.08] pointer-events-none">
        <Image 
          src="/images/plantImage.jpg" 
          alt="" 
          width={600} 
          height={400}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-[#FCD28F]/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-40 w-48 h-48 bg-[#E9907D]/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          {/* Decorative line */}
          <div className="w-24 h-px bg-linear-to-r from-transparent via-[#E9907D]/40 to-transparent mx-auto mb-12"></div>
          
          <p className="text-sm uppercase tracking-[0.2em] text-[#4C5C54]/50">Get in Touch</p>
          
          <h2 className="text-h1 text-[#4C5C54] leading-tight">
            Let's create something<br />
            <span className="text-[#E9907D]">meaningful</span> together
          </h2>
          
          <p className="text-xl text-[#4C5C54]/60 font-light max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="pt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E9907D] hover:bg-[#d67f6b] text-white px-10 py-5 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-xl hover:shadow-[#E9907D]/25 hover:-translate-y-0.5"
            >
              Say Hello
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
