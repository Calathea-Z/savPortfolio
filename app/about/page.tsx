import Image from 'next/image';

export default function AboutPage() {
  return (
    <main>
      <section className="relative bg-[#FAF8F5] min-h-screen py-24 px-8">
        {/* Plant Image - Background */}
        <div className="absolute bottom-0 right-0 w-300 h-300 opacity-15 overflow-hidden">
          <Image 
            src="/images/plantImage.jpg" 
            alt="Plant" 
            width={300} 
            height={300}
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Portrait Photo */}
            <div className="relative">
              <div className="aspect-3/4 rounded-full overflow-hidden">
                <Image 
                  src="/images/savPortrait.jpg" 
                  alt="Savannah Phipps" 
                  width={400} 
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - About Content */}
            <div className="space-y-6">
              <div>
                <p className="text-caption text-[#4C5C54]/60 uppercase tracking-wide mb-2">ABOUT ME</p>
                <h1 className="text-h1 text-[#E9907D] mb-4">
                  Hi, I'm Savannah!
                </h1>
              </div>

              <div className="space-y-4 text-body text-[#4C5C54]">
                <p>
                  Before studying UX design, I spent years in the restaurant industry, where I learned to connect with people quickly and make each interaction feel intentional.
                </p>
                
                <p>
                  Crafting jewlery on the side taught me to balance form, texture, and detail --- a mindset that now shapes how I approach digital design.
                </p>
                
                <p>
                  Today, I'm building on those experiences to create thoughtful, human-centered experiences that make people feel understood and at ease.
                </p>
              </div>

              <div className="pt-6">
                <h3 className="text-h3 text-[#4C5C54] mb-4">Skills & Tools</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-[#FCD28F]/20 text-[#4C5C54] text-caption rounded-full">UI/UX Design</span>
                  <span className="px-4 py-2 bg-[#FCD28F]/20 text-[#4C5C54] text-caption rounded-full">Wireframing</span>
                  <span className="px-4 py-2 bg-[#FCD28F]/20 text-[#4C5C54] text-caption rounded-full">Prototyping</span>
                  <span className="px-4 py-2 bg-[#FCD28F]/20 text-[#4C5C54] text-caption rounded-full">User Research</span>
                  <span className="px-4 py-2 bg-[#FCD28F]/20 text-[#4C5C54] text-caption rounded-full">Figma</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
