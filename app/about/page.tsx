import Image from "next/image";

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

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Header with small portrait */}
          <div className="flex items-center gap-6 mb-12">
            <div className="shrink-0">
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <Image
                  src="/images/sav_prof_photo_crop.jpg"
                  alt="Savannah Phipps"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '25%' }}
                />
              </div>
            </div>
            <div>
              <p className="text-caption text-[#4C5C54]/60 uppercase tracking-wide mb-1">
                ABOUT ME
              </p>
              <h1 className="text-h1 text-[#E9907D]">
                Hi, I'm Savannah!
              </h1>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 mb-12">
            <div className="space-y-4 text-body text-[#4C5C54]">
              <p>
                Before studying UX design, I spent years in the restaurant
                industry, where I learned to connect with people quickly, stay
                calm under pressure, and make each interaction feel
                intentional. Working in hospitality also showed me how much
                clear systems, tools, and training shape the day-to-day
                experience for both guests and teams.
              </p>

              <p>
                Crafting jewelry on the side taught me to balance form,
                texture, and detail—a mindset that now shapes how I approach
                digital design. I love noticing the small moments that make
                something feel considered, cohesive, and easy to use.
              </p>

              <p>
                Today, I'm building on that foundation to create thoughtful,
                human-centered work that helps people feel understood and at
                ease. I'm especially interested in designing clear flows,
                communication, and content that help people learn, navigate
                multi-step processes, and feel supported—whether they're using
                a product for the first time or stepping into a new role.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-h3 text-[#4C5C54] mb-4">
              Skills &amp; Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-[#FCD28F]/20 text-[#4C5C54] text-caption rounded-full">
                UI/UX Design
              </span>
              <span className="px-4 py-2 bg-[#FCD28F]/20 text-[#4C5C54] text-caption rounded-full">
                Wireframing
              </span>
              <span className="px-4 py-2 bg-[#FCD28F]/20 text-[#4C5C54] text-caption rounded-full">
                Prototyping
              </span>
              <span className="px-4 py-2 bg-[#FCD28F]/20 text-[#4C5C54] text-caption rounded-full">
                User Research
              </span>
              <span className="px-4 py-2 bg-[#FCD28F]/20 text-[#4C5C54] text-caption rounded-full">
                User Flows &amp; Journeys
              </span>
              <span className="px-4 py-2 bg-[#FCD28F]/20 text-[#4C5C54] text-caption rounded-full">
                Information Architecture
              </span>
              <span className="px-4 py-2 bg-[#FCD28F]/20 text-[#4C5C54] text-caption rounded-full">
                Figma
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
