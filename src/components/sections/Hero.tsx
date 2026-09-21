import { siteConfig } from '@/config/site';

export function Hero() {
  const ctaHref = siteConfig.ctaUrl || (siteConfig.whatsappNumber ? `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Olá, quero me inscrever na Escola Continuada de Doenças Imunomediadas 2027.')}` : '#');

  return (
    <section className="relative bg-navy text-white min-h-screen flex flex-col">
      {/* Background Half */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 overflow-hidden pointer-events-none opacity-40 lg:opacity-70">
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-navy via-navy/80 lg:via-navy/50 to-transparent z-10" />
        <img 
          src="/uploads/hero-bg.webp" 
          alt="Células em duotone"
          className="w-full h-full object-cover mix-blend-screen"
        />
      </div>

      <div className="flex-1 w-full max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col justify-center relative z-20">
        <div className="lg:max-w-[70%]">
          <span className="text-[12px] font-sans uppercase tracking-[0.2em] text-ciano flex items-center gap-4 animate-fade-up before:content-[''] before:block before:w-6 before:h-[1px] before:bg-ciano">
            CAMPINAS · MARÇO A NOVEMBRO DE 2027
          </span>
          
          <h1 
            className="font-display font-bold leading-[1.05] tracking-[-0.02em] mt-8 animate-fade-up"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', animationDelay: '0.1s' }}
          >
            Oito eventos para mudar a forma como você discute o paciente imunomediado.
          </h1>
          
          <p className="font-sans text-lg md:text-xl text-white/85 max-w-[55ch] mt-8 leading-[1.6] animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Um caso clínico real por encontro. Debate aberto entre especialidades. A ciência que muda a conduta na segunda-feira.
          </p>

          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mt-12 text-sm text-white/80 font-sans animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <span className="flex items-center gap-6">
              8 encontros presenciais 
              <span className="hidden md:block w-[1px] h-4 bg-white/12"></span>
            </span>
            <span className="flex items-center gap-6">
              100 vagas na turma 
              <span className="hidden md:block w-[1px] h-4 bg-white/12"></span>
            </span>
            <span>12+ especialidades na mesma sala</span>
          </div>

          <div className="mt-12 flex flex-col md:flex-row md:items-center gap-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <a 
              href={ctaHref} 
              className="inline-flex items-center justify-center px-8 py-4 bg-agua text-navy font-sans font-medium text-base rounded-[4px] hover:bg-agua/90 transition-colors w-full md:w-auto text-center"
            >
              Garantir minha vaga
            </a>
            <span className="text-sm font-sans tracking-wide text-white/70">
              Sempre às quintas, 19h · SMCC, Campinas
            </span>
          </div>
        </div>
      </div>

      {/* Bottom strip logos */}
      <div className="w-full max-w-7xl mx-auto px-6 pb-8 relative z-20 animate-fade-up" style={{ animationDelay: '0.5s' }}>
         <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-start md:items-center gap-8">
            <p className="text-[12px] font-sans uppercase tracking-[0.2em] text-white/50">
              Uma realização
            </p>
            <div className="flex items-center gap-10 opacity-80">
              <img src="/uploads/logo-on.svg" alt="ON Educação" className="h-8 w-auto mix-blend-screen" />
              <img src="/uploads/logo-immunogenic.svg" alt="Immunogenic" className="h-8 w-auto mix-blend-screen" />
              <img src="/uploads/logo-alergologica.svg" alt="Clínica Alergológica" className="h-8 w-auto mix-blend-screen" />
            </div>
         </div>
      </div>
    </section>
  );
}
