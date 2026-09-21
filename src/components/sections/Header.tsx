import { useEffect, useState } from 'react';
import { siteConfig } from '@/config/site';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-white border-b border-line text-navy' : 'bg-transparent text-white'}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Substituir a rota ou src pela logo real enviada futuramente */}
        <div className="font-display font-bold text-lg">
          ESCOLA CONTINUADA
        </div>
        
        <a 
          href={siteConfig.ctaUrl || (siteConfig.whatsappNumber ? `https://wa.me/${siteConfig.whatsappNumber}` : '#')}
          className="font-sans text-sm font-medium relative group overflow-hidden"
        >
          Inscreva-se
          <span className="absolute bottom-0 left-0 w-full h-[1px] bg-current origin-left scale-x-100 transition-transform duration-300 group-hover:scale-x-0"></span>
        </a>
      </div>
    </header>
  );
}
