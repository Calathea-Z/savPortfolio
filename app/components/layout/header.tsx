import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-transparent py-6 px-8 sticky top-0 z-50 shadow-none backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-honey/30 border-[.05rem] border-earth"></div>
            <Image 
              src="/images/savLogo.png" 
              alt="Savannah Phipps Logo" 
              width={300} 
              height={300}
              className="h-16 w-auto relative z-10"
            />
          </div>
        </Link>
        <ul className="flex gap-8 items-center">
          <li>
            <Link href="/about" className="text-caption text-[#000000] hover:text-[#E9907D] transition-colors">
              ABOUT ME
            </Link>
          </li>
          <li>
            <a href="/#showcase" className="text-caption text-[#000000] hover:text-[#E9907D] transition-colors">
              MY WORK
            </a>
          </li>
          <li>
            <Link href="/contact" className="text-caption text-[#000000] hover:text-[#E9907D] transition-colors">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

