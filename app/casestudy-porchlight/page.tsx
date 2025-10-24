import Image from 'next/image';
import Footer from '../components/footer';

export default function CaseStudyPorchLight() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[#FFF5E8] py-24 px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex justify-center mb-8">
            <Image 
              src="/images/porchlightScreenCap.png" 
              alt="PorchLight Screen Cap" 
              width={1000} 
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Overview & Constraints */}
      <section className="bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Project Overview */}
            <div>
              <h2 className="text-h2 text-[#4C5C54] mb-6">Project Overview</h2>
              <p className="text-body text-[#4C5C54]">
                PorchLight helps people navigate the process of finding a new home, whether they're relocating to a new neighborhood or an entirely new city. The app focuses on connecting users with communities that reflect their lifestyle and needs.
              </p>
            </div>

            {/* Constraints */}
            <div>
              <h2 className="text-h2 text-[#4C5C54] mb-6">Constraints</h2>
              <div className="space-y-3">
                <div>
                  <h4 className="text-caption text-[#4C5C54] font-semibold mb-1">Timeline:</h4>
                  <p className="text-body text-[#4C5C54]">3 weeks</p>
                </div>
                <div>
                  <h4 className="text-caption text-[#4C5C54] font-semibold mb-1">Tools:</h4>
                  <p className="text-body text-[#4C5C54]">Figma, FigJam</p>
                </div>
                <div>
                  <h4 className="text-caption text-[#4C5C54] font-semibold mb-1">Teams:</h4>
                  <p className="text-body text-[#4C5C54]">Individual Project</p>
                </div>
                <div>
                  <h4 className="text-caption text-[#4C5C54] font-semibold mb-1">Deliverables:</h4>
                  <p className="text-body text-[#4C5C54]">High-Fidelity Prototype</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Space */}
      <section className="bg-[#FFF5E8] py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-h2 text-[#4C5C54] mb-6">Problem Space</h2>
          <p className="text-body text-[#4C5C54] max-w-4xl">
            Finding a place to live should be an exciting step forward, but for many people, it's one filled with uncertainty and stress. Whether moving across town or to a brand-new city, people often struggle to identify neighborhoods that fit their lifestyle or to find compatible roommates. I believe that with the right tools, the process of finding a home can be more personal, informed, and enjoyable -- not a guessing game.
          </p>
        </div>
      </section>

      {/* User Interview Findings */}
      <section className="bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-h2 text-[#4C5C54] mb-8 text-center">User Interview Findings</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Finding 1 */}
            <div className="bg-[#E0E0E0] p-8 rounded-lg">
              <h3 className="text-h3 text-[#4C5C54] mb-4">Overwhelmed by research</h3>
              <p className="text-body text-[#4C5C54]">
                Users found it difficult to gather detailed information about neighborhoods, commute times and safety.
              </p>
            </div>

            {/* Finding 2 */}
            <div className="bg-[#E0E0E0] p-8 rounded-lg">
              <h3 className="text-h3 text-[#4C5C54] mb-4">Uncertainty about compatibility</h3>
              <p className="text-body text-[#4C5C54]">
                Many struggled to find roommates with similar habits, interests, or lifestyles.
              </p>
            </div>

            {/* Finding 3 */}
            <div className="bg-[#E0E0E0] p-8 rounded-lg">
              <h3 className="text-h3 text-[#4C5C54] mb-4">Decision fatigue</h3>
              <p className="text-body text-[#4C5C54]">
                Endless scrolling through listings made it hard to feel confident in their choices.
              </p>
            </div>

            {/* Finding 4 */}
            <div className="bg-[#E0E0E0] p-8 rounded-lg">
              <h3 className="text-h3 text-[#4C5C54] mb-4">Desire for connection</h3>
              <p className="text-body text-[#4C5C54]">
                Users wanted a way to get a feel for the community before signing a year's lease.
              </p>
            </div>
          </div>

          <p className="text-body text-[#4C5C54] text-center max-w-4xl mx-auto">
            Users shared that finding a new living space feels less often feels overwhelming and personal. They struggle to research neighborhoods, feel compatible roommates, and feel confident about how to narrow — highlighting a need for guidance and tools that make the process more personal.
          </p>
        </div>
      </section>

      {/* Market Research */}
      <section className="bg-[#FFF5E8] py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-h2 text-[#4C5C54] mb-6">Market Research</h2>
          <p className="text-body text-[#4C5C54] max-w-4xl">
            These observations helped me uncover the human side of relocation — what people worry about, what excites them, and what support they need. Instead of treating housing as purely transactional, I saw an opportunity to design a tool that makes people feel informed, confident, and connected throughout the process.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
