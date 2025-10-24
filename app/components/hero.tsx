export default function Hero() {
  return (
    <section className="relative h-[60vh] bg-linear-to-b from-white to-[#FAF8F5] flex items-center justify-center overflow-hidden p-24 -mt-0">
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-left peachy blob - moved down to not interfere with header */}
        <div className="absolute top-16 -left-32 w-96 h-96 bg-[#FCD28F]/20 rounded-full blur-3xl"></div>
        {/* Bottom-right aqua blob */}
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#B8CBC8]/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
        <h1 className="text-h1 text-[#E9907D] mb-6">
          Savannah Phipps
        </h1>
        <p className="text-body text-[#4C5C54] mb-8 max-w-2xl mx-auto">
          A designer in training, inspired by how thoughtful design can make everyday moments feel more human and connected.
        </p>
        <button className="bg-[#E9907D] hover:bg-[#DB7C67] text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all font-inter font-medium text-sm uppercase tracking-wide cursor-pointer">
          MORE ABOUT ME!
        </button>
      </div>
    </section>
  );
}
