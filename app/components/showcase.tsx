import Image from 'next/image';

export default function Showcase() {
  return (
    <section id="showcase" className="relative bg-[#FAF8F5] py-24 px-8">
      {/* Background Blob */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#B8CBC8]/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-caption text-[#4C5C54]/60 uppercase tracking-wide mb-2">UX/UI DESIGN</p>
          <h2 className="text-h2 text-[#4C5C54]">Showcase</h2>
          <div className="w-90% h-0.5 bg-[#4C5C54] mt-2"></div>
        </div>

        {/* Project Case Studies */}
        <div className="space-y-24">
          {/* Project 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <p className="text-caption text-[#4C5C54]/60">Case Study Type</p>
              <h3 className="text-h3 text-[#4C5C54] relative inline-block">
                <span className="relative z-10">PROJECT NAME</span>
                <span className="absolute inset-0 bg-[#FCD28F]/30 m-1 rounded-sm"></span>
              </h3>
              <p className="text-body text-[#4C5C54]">
                This is a brief description of the case study.
              </p>
              <a href="/casestudy-porchlight" className="inline-block text-caption text-[#000000] underline hover:text-[#E9907D] transition-colors">
                read case study
              </a>
            </div>
            <div className="relative">
              <div className="aspect-4/3 rounded-lg overflow-hidden">
                <Image 
                  src="/images/stockCaseStudy1.jpg" 
                  alt="Wireframe Sketches" 
                  width={600} 
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <p className="text-caption text-[#4C5C54]/60">Case Study Type</p>
              <h3 className="text-h3 text-[#4C5C54] relative inline-block">
                <span className="relative z-10">PROJECT NAME</span>
                <span className="absolute inset-0 bg-[#FCD28F]/30 m-1 rounded-sm"></span>
              </h3>
              <p className="text-body text-[#4C5C54]">
                This is a brief description of the case study.
              </p>
              <a href="/casestudy-porchlight" className="inline-block text-caption text-[#000000] underline hover:text-[#E9907D] transition-colors">
                read case study
              </a>
            </div>
            <div className="relative">
              <div className="aspect-4/3 rounded-lg overflow-hidden">
                <Image 
                  src="/images/stockCaseStudy1.jpg" 
                  alt="Tablet Interaction" 
                  width={600} 
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <p className="text-caption text-[#4C5C54]/60">Case Study Type</p>
              <h3 className="text-h3 text-[#4C5C54] relative inline-block">
                <span className="relative z-10">PROJECT NAME</span>
                <span className="absolute inset-0 bg-[#FCD28F]/30 m-1 rounded-sm"></span>
              </h3>
              <p className="text-body text-[#4C5C54]">
                This is a brief description of the case study.
              </p>
              <a href="/casestudy-porchlight" className="inline-block text-caption text-[#000000] underline hover:text-[#E9907D] transition-colors">
                read case study
              </a>
            </div>
            <div className="relative">
              <div className="aspect-4/3 rounded-lg overflow-hidden">
                <Image 
                  src="/images/stockCaseStudy1.jpg" 
                  alt="Brainstorming Session" 
                  width={600} 
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
