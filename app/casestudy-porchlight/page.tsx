import Image from 'next/image';
import Footer from '../components/footer';

export default function CaseStudyPorchLight() {
  return (
    <main className="bg-[#FAF8F5]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-white via-white to-[#FAF8F5]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="inline-block">
                <Image 
                  src="/porchlight/PorchLight_Logo.png" 
                  alt="PorchLight Logo" 
                  width={120} 
                  height={120}
                  className="w-24 h-auto"
                />
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#4C5C54] tracking-tight">
                  PorchLight
                </h1>
                <p className="text-xl md:text-2xl text-[#4C5C54]/70 font-light leading-relaxed">
                  Finding a home, not just housing
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://figma.com/design/YUt9s34r8IC1zfakii8N7H/THIS-prototype?node-id=0-1&t=hdkfBOJlBI0T1VXU-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[#E9907D] hover:bg-[#d67f6b] text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#E9907D]/25 hover:-translate-y-0.5"
                >
                  View Prototype →
                </a>
              </div>
            </div>

            {/* Right Column - Phone Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-8 bg-[#E9907D]/5 rounded-full blur-3xl" />
                <Image 
                  src="/porchlight/Iphone_Mockup.png" 
                  alt="PorchLight App Mockup" 
                  width={600} 
                  height={1200}
                  className="relative h-[520px] w-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role & Details Bar */}
      <section className="bg-[#E8D4AC]/60 border-y border-[#6C552D]/10">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#6C552D]/60 mb-2">Role</p>
              <p className="text-[#6C552D] font-medium">UX/UI Designer</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#6C552D]/60 mb-2">Team</p>
              <p className="text-[#6C552D] font-medium">Solo Project</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#6C552D]/60 mb-2">Timeline</p>
              <p className="text-[#6C552D] font-medium">8 Weeks</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#6C552D]/60 mb-2">Tools</p>
              <p className="text-[#6C552D] font-medium">Figma</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-[#4C5C54]/50 mb-6">Overview</p>
          <p className="text-2xl md:text-3xl text-[#4C5C54] font-light leading-relaxed">
            PorchLight is a home-finding app designed to make moving feel more personal and less overwhelming. Instead of only listing addresses and stats, it helps people build a clearer picture of what daily life in a neighborhood might feel like.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center">
        <div className="w-32 h-px bg-linear-to-r from-transparent via-[#4C5C54]/20 to-transparent" />
      </div>

      {/* Problem & Insight Section */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Problem */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E9907D]/10 text-[#E9907D] text-sm font-medium">01</span>
                <h2 className="text-sm uppercase tracking-[0.2em] text-[#4C5C54]/50">The Problem</h2>
              </div>
              <p className="text-lg text-[#4C5C54]/80 leading-relaxed">
                Finding a new place should feel exciting — but most people end up overwhelmed. Traditional housing apps focus on listings, prices, and filters, leaving out what really matters: the feeling of belonging.
              </p>
              <p className="text-lg text-[#4C5C54]/80 leading-relaxed">
                Users often move into the wrong neighborhoods or struggle to find compatible roommates because they&apos;re forced to make decisions based on scattered information instead of guided support around lifestyle fit.
              </p>
            </div>

            {/* Insight */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E9907D]/10 text-[#E9907D] text-sm font-medium">02</span>
                <h2 className="text-sm uppercase tracking-[0.2em] text-[#4C5C54]/50">The Insight</h2>
              </div>
              <p className="text-lg text-[#4C5C54]/80 leading-relaxed">
                People don&apos;t just look for housing — they look for a home. They want tools that help them imagine their daily life in a new place and make sense of tradeoffs, not just compare square footage and rent.
              </p>
              <blockquote className="border-l-2 border-[#E9907D]/40 pl-6 py-2">
                <p className="text-xl text-[#4C5C54] italic font-light">
                  "How might we help movers discover neighborhoods and roommates that match their personality?"
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Process Header */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#4C5C54]/50 mb-6">Design Process</p>
          <p className="text-xl text-[#4C5C54]/70 leading-relaxed">
            PorchLight was built through an iterative, human-centered process — moving from understanding real pain points to shaping a product that feels both practical and personal.
          </p>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="flex items-start gap-6 mb-16">
            <span className="text-6xl md:text-8xl font-extralight text-[#E9907D]/30">01</span>
            <div className="pt-2 md:pt-4">
              <h2 className="text-3xl md:text-4xl font-light text-[#4C5C54] mb-4">Research</h2>
              <p className="text-lg text-[#4C5C54]/70 leading-relaxed max-w-2xl">
                I interviewed four people who had moved to Denver within the last five to ten years to understand how they found their homes — and what they might do differently next time.
              </p>
            </div>
          </div>

          {/* Key Findings */}
          <div className="mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-[#4C5C54]/50 mb-8 text-center">Key Findings</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group p-8 bg-[#FAF8F5] rounded-2xl border border-[#4C5C54]/5 transition-all duration-300 hover:shadow-lg hover:shadow-[#E9907D]/5">
                <div className="w-10 h-10 rounded-full bg-[#E9907D]/10 flex items-center justify-center mb-5">
                  <span className="text-[#E9907D] text-lg">1</span>
                </div>
                <h3 className="text-lg font-medium text-[#4C5C54] mb-3">Overwhelmed by research</h3>
                <p className="text-[#4C5C54]/70 leading-relaxed">
                  Users found it difficult to gather reliable information about neighborhoods, commute times, and safety in one place.
                </p>
              </div>

              <div className="group p-8 bg-[#FAF8F5] rounded-2xl border border-[#4C5C54]/5 transition-all duration-300 hover:shadow-lg hover:shadow-[#E9907D]/5">
                <div className="w-10 h-10 rounded-full bg-[#E9907D]/10 flex items-center justify-center mb-5">
                  <span className="text-[#E9907D] text-lg">2</span>
                </div>
                <h3 className="text-lg font-medium text-[#4C5C54] mb-3">Uncertainty about compatibility</h3>
                <p className="text-[#4C5C54]/70 leading-relaxed">
                  Many struggled to feel confident that roommates would have similar habits, interests, or lifestyles.
                </p>
              </div>

              <div className="group p-8 bg-[#FAF8F5] rounded-2xl border border-[#4C5C54]/5 transition-all duration-300 hover:shadow-lg hover:shadow-[#E9907D]/5">
                <div className="w-10 h-10 rounded-full bg-[#E9907D]/10 flex items-center justify-center mb-5">
                  <span className="text-[#E9907D] text-lg">3</span>
                </div>
                <h3 className="text-lg font-medium text-[#4C5C54] mb-3">Decision fatigue</h3>
                <p className="text-[#4C5C54]/70 leading-relaxed">
                  Endless scrolling through listings made it hard to compare options or feel sure they were making the right choice.
                </p>
              </div>

              <div className="group p-8 bg-[#FAF8F5] rounded-2xl border border-[#4C5C54]/5 transition-all duration-300 hover:shadow-lg hover:shadow-[#E9907D]/5">
                <div className="w-10 h-10 rounded-full bg-[#E9907D]/10 flex items-center justify-center mb-5">
                  <span className="text-[#E9907D] text-lg">4</span>
                </div>
                <h3 className="text-lg font-medium text-[#4C5C54] mb-3">Desire for connection</h3>
                <p className="text-[#4C5C54]/70 leading-relaxed">
                  Users wanted a way to get a feel for the community and lifestyle before committing to a lease.
                </p>
              </div>
            </div>
          </div>

          {/* Insight callout */}
          <div className="bg-[#E9907D]/5 rounded-2xl p-8 md:p-12 text-center">
            <p className="text-lg md:text-xl text-[#4C5C54]/80 italic leading-relaxed max-w-3xl mx-auto">
              These findings highlighted a deeper need: tools that help people understand neighborhoods on a personal level and guide them through decisions step by step.
            </p>
          </div>
        </div>
      </section>

      {/* Persona Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-[#4C5C54]/50 mb-8 text-center">User Persona</p>
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-[#4C5C54]/10">
            <Image 
              src="/porchlight/zach_persona.png" 
              alt="Zach User Persona" 
              width={1200} 
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Define Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="flex items-start gap-6 mb-16">
            <span className="text-6xl md:text-8xl font-extralight text-[#E9907D]/30">02</span>
            <div className="pt-2 md:pt-4">
              <h2 className="text-3xl md:text-4xl font-light text-[#4C5C54] mb-4">Define</h2>
              <p className="text-lg text-[#4C5C54]/70 leading-relaxed max-w-2xl">
                Building on those insights, I mapped the journey from searching to settling in, tracing where excitement turned into stress or uncertainty.
              </p>
            </div>
          </div>

          {/* Affinity Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl shadow-[#4C5C54]/5">
            <Image 
              src="/porchlight/affinityMapNew.png" 
              alt="Affinity Map" 
              width={1400} 
              height={700}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Design Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#FAF8F5]">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="flex items-start gap-6 mb-16">
            <span className="text-6xl md:text-8xl font-extralight text-[#E9907D]/30">03</span>
            <div className="pt-2 md:pt-4">
              <h2 className="text-3xl md:text-4xl font-light text-[#4C5C54] mb-4">Design</h2>
              <p className="text-lg text-[#4C5C54]/70 leading-relaxed max-w-2xl">
                My focus was on creating a calm, intuitive experience that reflected PorchLight&apos;s welcoming tone — and on designing flows that would break a big decision into smaller, guided steps.
              </p>
            </div>
          </div>

          {/* Lo-Fi Wireframes */}
          <div className="mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-[#4C5C54]/50 mb-8 text-center">Low-Fidelity Wireframes</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="group">
                  <div className="rounded-xs overflow-hidden bg-white shadow-lg shadow-[#4C5C54]/5 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                    <Image 
                      src={`/porchlight/lowFi_New${num}.png`}
                      alt={`Low Fidelity Wireframe ${num}`}
                      width={300} 
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Caption */}
          <p className="text-center text-[#4C5C54]/60 italic max-w-2xl mx-auto">
            Early wireframes explored how users could take a quick personality quiz to find compatible neighborhoods and/or roommates.
          </p>
        </div>
      </section>

      {/* User Flow Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-[#4C5C54]/50 mb-8 text-center">User Flows</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-xl overflow-hidden bg-[#FAF8F5] p-6">
              <Image 
                src="/porchlight/flow_chart_1.png" 
                alt="Sign In / Create Account User Flow" 
                width={800} 
                height={900}
                className="w-full h-auto max-h-[60vh] object-contain"
              />
            </div>
            <div className="rounded-xl overflow-hidden bg-[#FAF8F5] p-6">
              <Image 
                src="/porchlight/flow_chart_1.png" 
                alt="Apply for Listing User Flow" 
                width={800} 
                height={900}
                className="w-full h-auto max-h-[60vh] object-contain"
              />
            </div>
          </div>

          <p className="text-center text-[#4C5C54]/60 italic max-w-2xl mx-auto">
            I mapped the main user paths, including sign-up and listing application flows, to visualize how users would move through key interactions.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#FAF8F5]">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="flex items-start gap-6 mb-16">
            <span className="text-6xl md:text-8xl font-extralight text-[#E9907D]/30">04</span>
            <div className="pt-2 md:pt-4">
              <h2 className="text-3xl md:text-4xl font-light text-[#4C5C54] mb-4">Solution</h2>
              <p className="text-lg text-[#4C5C54]/70 leading-relaxed max-w-2xl">
                The final PorchLight prototype brings personality into the home-finding process. Users can take a short lifestyle quiz, explore neighborhood matches, and connect with potential roommates who share similar values.
              </p>
            </div>
          </div>

          {/* Results callout */}
          <div className="bg-white rounded-2xl p-8 md:p-12 mb-16 border border-[#4C5C54]/5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-light text-[#E9907D] mb-2">100%</p>
                <p className="text-sm text-[#4C5C54]/60">Found it intuitive</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-light text-[#E9907D] mb-2">Friendly</p>
                <p className="text-sm text-[#4C5C54]/60">User feedback tone</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-light text-[#E9907D] mb-2">Personal</p>
                <p className="text-sm text-[#4C5C54]/60">Experience feeling</p>
              </div>
            </div>
          </div>
        </div>

        {/* Phone screens gallery */}
        <div className="w-full">
          <p className="text-sm uppercase tracking-[0.2em] text-[#4C5C54]/50 mb-8 text-center">Final Screens</p>
          <div className="flex justify-center gap-6 flex-wrap px-6 md:px-12 pb-8">
            {['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'].map((name, i) => (
              <div key={name} className="shrink-0">
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-[#4C5C54]/10 transition-transform duration-300 hover:scale-[1.02]">
                  <Image 
                    src={`/porchlight/phoneImages/${name}.png`}
                    alt={`PorchLight Screen ${i + 1}`}
                    width={250} 
                    height={540}
                    className="h-[420px] w-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reflection Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="flex items-start gap-6 mb-12">
            <span className="text-6xl md:text-8xl font-extralight text-[#E9907D]/30">05</span>
            <div className="pt-2 md:pt-4">
              <h2 className="text-3xl md:text-4xl font-light text-[#4C5C54]">Reflection</h2>
            </div>
          </div>

          <div className="space-y-6 text-lg text-[#4C5C54]/80 leading-relaxed">
            <p>
              Building PorchLight taught me how deeply emotion shapes practical decisions. Designing for moving wasn&apos;t just about usability — it was about empathy, trust, and tone, and about helping people feel guided rather than left on their own to sort through endless choices.
            </p>
            <p>
              If I continued this project, I&apos;d focus on expanding the quiz logic and adding localized data to make neighborhood recommendations more dynamic and educational.
            </p>
          </div>

          {/* Key takeaway */}
          <blockquote className="mt-12 py-8 border-l-2 border-[#E9907D]/40 pl-8">
            <p className="text-2xl md:text-3xl font-light text-[#4C5C54] leading-relaxed italic">
              "Even the most functional tools should feel human — and the way information is structured can make a big decision feel either stressful or surprisingly manageable."
            </p>
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-[#FAF8F5]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#4C5C54]/60 mb-6">Interested in this project?</p>
          <a
            href="https://figma.com/design/YUt9s34r8IC1zfakii8N7H/THIS-prototype?node-id=0-1&t=hdkfBOJlBI0T1VXU-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#E9907D] hover:bg-[#d67f6b] text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#E9907D]/25"
          >
            View Full Prototype →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
