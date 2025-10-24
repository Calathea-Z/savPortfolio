import Image from 'next/image';

export default function CTA() {
  return (
    <section className="relative bg-[#FAF8F5] py-24 px-8">
      {/* Plant Image - Bottom Right Corner */}
      <div className="absolute bottom-0 right-0 w-[50rem] h-[25rem] opacity-[15%] overflow-hidden">
        <Image 
          src="/images/plantImage.jpg" 
          alt="Plant" 
          width={500} 
          height={500}
          className="w-full h-full object-cover mix-blend-multiply"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          <h2 className="text-h2 text-[#4C5C54]">
            Let's make something great!!
          </h2>
          <div>
            <button className="bg-[#E9907D] hover:bg-[#DB7C67] text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all font-inter font-medium text-sm uppercase tracking-wide cursor-pointer">
              CONTACT ME
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
