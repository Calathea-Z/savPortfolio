import Image from 'next/image';
import Footer from '../components/footer';

export default function CaseStudyPorchLight() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center">
            {/* Left Column - Content */}
            <div className="p-16 flex flex-col items-center justify-center text-center space-y-6 w-full h-full">
              <Image 
                src="/porchlight/PorchLight_Logo.png" 
                alt="PorchLight Logo" 
                width={200} 
                height={200}
                className="w-48 h-auto"
              />
              <h1 className="font-fraunces text-6xl text-black">PorchLight</h1>
              <p className="font-fraunces text-2xl text-black">Finding a home, not just housing</p>
              <a
                href="https://figma.com/design/YUt9s34r8IC1zfakii8N7H/THIS-prototype?node-id=0-1&t=hdkfBOJlBI0T1VXU-1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E9907D] hover:bg-[#d67f6b] text-white px-10 py-4 rounded-xl text-lg transition-colors inline-block"
              >
                See Prototype
              </a>
            </div>

            {/* Right Column - Phone Mockup */}
            <div className="flex justify-center">
              <Image 
                src="/porchlight/Iphone_Mockup.png" 
                alt="PorchLight App Mockup" 
                width={600} 
                height={1200}
                className="h-[480px] w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Role & Team Section */}
      <section className="bg-[#E8D4AC] py-8 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div>
            <h3 className="text-caption text-[#6C552D] font-semibold mb-2">ROLE</h3>
            <p className="text-body text-[#6C552D]">UX/UI Designer</p>
            <p className="text-body text-[#6C552D]">Project Lead</p>
          </div>
          <div>
            <h3 className="text-caption text-[#6C552D] font-semibold mb-2">TEAM</h3>
            <p className="text-body text-[#6C552D]">Savannah Phipps</p>
            <p className="text-body text-[#6C552D]">(Solo)</p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white py-12 px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-h2 text-[#4C5C54] mb-4">Overview</h2>
          <p className="text-body text-[#4C5C54]">
            PorchLight is a home-finding app designed to make moving feel more personal. Instead of just showing addresses and stats, it helps people get a sense of what life in a neighborhood feels like. A built-in lifestyle quiz and roommate compatibility tool connect users with communities — and housemates — that actually fit who they are.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white py-12 px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-h2 text-[#4C5C54] mb-4">Problem</h2>
          <p className="text-body text-[#4C5C54]">
            Finding a new place should feel exciting — but most people end up overwhelmed. Traditional housing apps focus on listings, prices, and stats, leaving out what really matters: the feeling of belonging. Users often move into the wrong neighborhoods or struggle to find compatible roommates because they're forced to make choices based on data, not lifestyle fit.
          </p>
        </div>
      </section>

      {/* Insight and How Might We Section */}
      <section className="bg-white py-12 px-8">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Insight */}
            <div>
              <h2 className="text-h2 text-[#4C5C54] mb-4">Insight</h2>
              <p className="text-body text-[#4C5C54]">
                People don't just look for housing, they look for a home. They want tools that help them imagine their daily life in a new place, not just compare square footage.
              </p>
            </div>

            {/* How Might We */}
            <div>
              <h2 className="text-h2 text-[#4C5C54] mb-4">How Might We</h2>
              <p className="text-body text-[#4C5C54]">
                Help moved discover neighborhoods and roommate that match their personality, so settling in feels natural from day one?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="bg-white py-12 px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-h2 text-[#4C5C54] mb-4">Design Process</h2>
          <p className="text-body text-[#4C5C54]">
            PorchLight was built through an iterative, human-centered process. Moving from understanding real pain points to shaping a product that feels both practical and personal.
          </p>
        </div>
      </section>

      {/* Research Section */}
      <section className="bg-white py-12 px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-h2 text-[#4C5C54] mb-6 text-right">01. Research</h2>
          
          <p className="text-body text-[#4C5C54] text-left mb-12">
            I interviewed four people who had moved to Denver within the last five to ten years to understand how they found their homes — and what they might do differently next time. Across every conversation, one theme stood out: finding a sense of fit mattered more than square footage, price, or commute.
          </p>

          <h3 className="text-h3 text-[#4C5C54] mb-8 text-center">User Interview Findings</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Finding 1 */}
            <div className="bg-[#F5E6D5] p-8 rounded-xl">
              <p className="text-body text-[#4C5C54] mb-3 font-bold text-center"><strong>Overwhelmed by research</strong></p>
              <p className="text-body text-[#4C5C54] text-center">
                Users found it difficult to gather reliable information about neighborhoods, commute times and safety.
              </p>
            </div>

            {/* Finding 2 */}
            <div className="bg-[#F5E6D3] p-8 rounded-xl">
              <h3 className="text-body text-[#4C5C54] mb-3 font-bold text-center"><strong>Uncertainty about compatibility</strong></h3>
              <p className="text-body text-[#4C5C54] text-center">
                Many struggled to find roommates with similar habits, interests, or lifestyles.
              </p>
            </div>

            {/* Finding 3 */}
            <div className="bg-[#F5E6D3] p-8 rounded-xl">
              <h3 className="text-body text-[#4C5C54] mb-3 font-bold text-center"><strong>Decision Fatigue</strong></h3>
              <p className="text-body text-[#4C5C54] text-center">
                Endless scrolling through listings made it hard to feel confident in their choices.
              </p>
            </div>

            {/* Finding 4 */}
            <div className="bg-[#F5E6D3] p-8 rounded-xl">
              <h3 className="text-body text-[#4C5C54] mb-3 font-bold text-center"><strong>Desire for connection</strong></h3>
              <p className="text-body text-[#4C5C54] text-center">
                Users wanted a way to get a feel for the community before committing to a lease.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8">
          <p className="text-body text-[#4C5C54] text-center italic">
            These findings highlighted a deeper need: tools that help people understand neighborhoods on a personal level. This became the foundation for my primary user persona.
          </p>
        </div>
      </section>

      {/* Persona Section */}
      <section className="bg-white py-12 px-8">
        <div className="max-w-5xl mx-auto">
          <Image 
            src="/porchlight/zach_persona.png" 
            alt="Zach User Persona" 
            width={1200} 
            height={600}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Define Section */}
      <section className="bg-white py-12 px-8">
        <div className="max-w-3xl mx-auto mb-8">
          <h2 className="text-h2 text-[#4C5C54] mb-6 text-right">02. Define</h2>
          
          <p className="text-body text-[#4C5C54] text-left">
            Building on those insights, I mapped the journey from searching to settling in, tracing where excitement turned into stress or uncertainty. Seeing the full picture clarified where PorchLight could make the biggest impact — helping users feel confident and connected throughout the move.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Image 
            src="/porchlight/affinity_map.png" 
            alt="Affinity Map" 
            width={1400} 
            height={700}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Design Section */}
      <section className="bg-white py-12 px-8">
        <div className="max-w-3xl mx-auto mb-8">
          <h2 className="text-h2 text-[#4C5C54] mb-6 text-right">03. Design</h2>
          
          <p className="text-body text-[#4C5C54] text-left">
            Guided by my research findings, I began turning insights into tangible ideas. My focus was on creating a calm, intuitive experience that reflected PorchLight's welcoming tone — helping users discover neighborhoods and roommates that felt like a natural fit.
          </p>
        </div>

        <div className="max-w-7xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <Image 
                src="/porchlight/LoFi1.png" 
                alt="Low Fidelity Wireframe 1" 
                width={300} 
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div>
              <Image 
                src="/porchlight/LoFi2.png" 
                alt="Low Fidelity Wireframe 2" 
                width={300} 
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div>
              <Image 
                src="/porchlight/LoFi3.png" 
                alt="Low Fidelity Wireframe 3" 
                width={300} 
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div>
              <Image 
                src="/porchlight/LoFi4.png" 
                alt="Low Fidelity Wireframe 4" 
                width={300} 
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <p className="text-body text-[#4C5C54] text-center italic">
            Early wireframes explored how users could take a quick personality quiz to find compatible neighborhoods and/or roommates. These low-fidelity screens helped define the app's core flow — from onboarding to quiz results — before diving deeper into structure and navigation.
          </p>
        </div>
      </section>

      {/* User Flow Section */}
      <section className="bg-white py-12 px-8">
        <div className="max-w-6xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Image 
                src="/porchlight/flow_chart_1.png" 
                alt="Sign In / Create Account User Flow" 
                width={800} 
                height={900}
                className="w-full h-auto max-h-[65vh] object-contain"
              />
            </div>
            <div>
              <Image 
                src="/porchlight/flow_chart_1.png" 
                alt="Apply for Listing User Flow" 
                width={800} 
                height={900}
                className="w-full h-auto max-h-[65vh] object-contain"
              />
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <p className="text-body text-[#4C5C54] text-center italic">
            I also mapped the main user paths, including sign-up and listing application flows, to visualize how users would move through key interactions and identify friction points early.
          </p>
        </div>
      </section>

      {/* Solution and Results Section */}
      <section className="bg-white py-12 px-8">
        <div className="max-w-3xl mx-auto mb-8">
          <h2 className="text-h2 text-[#4C5C54] mb-6 text-right">04. Solution and Results</h2>
          
          <p className="text-body text-[#4C5C54] text-left mb-6">
            The final PorchLight prototype brings personality into the home-finding process. Users can take a short lifestyle quiz, explore neighborhood matches, and connect with potential roommates who share similar values. The goal was to make moving feel less transactional — and more like finding your place in a community.
          </p>

          <p className="text-body text-[#4C5C54] text-left">
            Feedback from testers showed that the experience felt friendly, intuitive, and surprisingly personal. They appreciated how the quiz revealed new options they wouldn't have considered otherwise.
          </p>
        </div>

        <div className="max-w-7xl mx-auto overflow-x-auto">
          <div className="flex gap-4 pb-4 min-w-max">
            <div className="shrink-0">
              <Image 
                src="/porchlight/phoneImages/One.png" 
                alt="PorchLight Screen 1" 
                width={250} 
                height={540}
                className="h-[500px] w-auto"
              />
            </div>
            <div className="shrink-0">
              <Image 
                src="/porchlight/phoneImages/Two.png" 
                alt="PorchLight Screen 2" 
                width={250} 
                height={540}
                className="h-[500px] w-auto"
              />
            </div>
            <div className="shrink-0">
              <Image 
                src="/porchlight/phoneImages/Three.png" 
                alt="PorchLight Screen 3" 
                width={250} 
                height={540}
                className="h-[500px] w-auto"
              />
            </div>
            <div className="shrink-0">
              <Image 
                src="/porchlight/phoneImages/Four.png" 
                alt="PorchLight Screen 4" 
                width={250} 
                height={540}
                className="h-[500px] w-auto"
              />
            </div>
            <div className="shrink-0">
              <Image 
                src="/porchlight/phoneImages/Five.png" 
                alt="PorchLight Screen 5" 
                width={250} 
                height={540}
                className="h-[500px] w-auto"
              />
            </div>
            <div className="shrink-0">
              <Image 
                src="/porchlight/phoneImages/Six.png" 
                alt="PorchLight Screen 6" 
                width={250} 
                height={540}
                className="h-[500px] w-auto"
              />
            </div>
            <div className="shrink-0">
              <Image 
                src="/porchlight/phoneImages/Seven.png" 
                alt="PorchLight Screen 7" 
                width={250} 
                height={540}
                className="h-[500px] w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reflection Section */}
      <section className="bg-white py-12 px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-h2 text-[#4C5C54] mb-6 text-right">05. Reflection</h2>
          
          <p className="text-body text-[#4C5C54] text-left mb-4">
            Building PorchLight taught me how deeply emotion shapes practical decisions. Designing for moving wasn't just about usability — it was about empathy, trust, and tone.
          </p>

          <p className="text-body text-[#4C5C54] text-left">
            If I continued this project, I'd focus on expanding the quiz logic and adding localized data to make neighborhood recommendations more dynamic. The process reinforced a lesson I'll take into future work: even the most functional tools should feel human.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
