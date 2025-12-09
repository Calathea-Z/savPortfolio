export default function Hero() {
  return (
    <section className="relative min-h-[85vh] bg-linear-to-b from-white via-white to-[#FAF8F5] flex items-center justify-center overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-40 w-[500px] h-[500px] bg-[#FCD28F]/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-[#B8CBC8]/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E9907D]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 md:px-12 py-24">
        <p className="text-sm uppercase tracking-[0.25em] text-[#4C5C54]/50 mb-6">
          UX Designer
        </p>
        
        <h1 className="text-h1 mb-8">
          <span className="text-[#E9907D]">Savannah Phipps</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-[#4C5C54]/70 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
          Creating clear, intuitive, and human-centered experiences that help people navigate with confidence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#showcase"
            className="group bg-[#E9907D] hover:bg-[#d67f6b] text-white px-10 py-4 rounded-full text-base font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#E9907D]/25 hover:-translate-y-0.5"
          >
            View My Work →
          </a>
          <a
            href="/about"
            className="text-[#4C5C54] hover:text-[#E9907D] px-8 py-4 text-base font-medium transition-colors duration-300 border-b-2 border-transparent hover:border-[#E9907D]"
          >
            About Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-[#4C5C54]/20 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-[#4C5C54]/30 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
