import { escolaContent } from '@/content/escola';

export function WhyExists() {
  return (
    <section className="bg-white py-24 md:py-32 px-6 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        <div className="lg:col-span-7 flex flex-col gap-12">
          <h2 className="font-display font-bold text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-[1.05] tracking-[-0.02em] text-navy">
            Você já atendeu esse paciente. E ele já passou por outros consultórios.
          </h2>
          
          <div className="max-w-[60ch] flex flex-col gap-8">
            <p className="font-sans text-lg md:text-xl leading-[1.6] text-navy opacity-90">
              {escolaContent.contexto}
            </p>
            
            <div className="mt-8 pt-8 border-t border-line">
              <span className="block text-[12px] font-sans uppercase tracking-[0.2em] text-ciano flex items-center gap-4 before:content-[''] before:block before:w-6 before:h-[1px] before:bg-ciano mb-6">
                Para quem é
              </span>
              <p className="font-sans text-base md:text-lg text-ink-2 leading-relaxed">
                {escolaContent.publico}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
          <div className="w-full max-w-[300px] lg:max-w-none relative aspect-[3/4]">
            {/* Ilustração mínima abstrata vetorial usando SVG nativo para performance */}
            <svg viewBox="0 0 100 200" className="w-full h-full stroke-[0.3] stroke-navy/20 fill-none overflow-visible" aria-hidden="true">
              {/* Corpo sutil */}
              <path d="M50 15 C30 15, 30 45, 50 45 C70 45, 70 15, 50 15" />
              <path d="M50 45 C20 45, 10 80, 10 120 L90 120 C90 80, 80 45, 50 45" />
              
              {/* Conexões retas para dar ar clínico/editorial */}
              <path 
                d="M50 30 L40 65 L60 100 L30 135 L50 160"
                className="stroke-ciano stroke-[0.4] opacity-40 transition-all"
              />
              
              {/* Pontos pulsantes representando sistemas/órgãos */}
              <circle cx="50" cy="30" r="2.5" className="fill-ceu stroke-none animate-pulse origin-center" />
              <circle cx="40" cy="65" r="2.5" className="fill-agua stroke-none animate-pulse origin-center" style={{animationDelay: "0.2s"}} />
              <circle cx="60" cy="100" r="2.5" className="fill-azul stroke-none animate-pulse origin-center" style={{animationDelay: "0.4s"}} />
              <circle cx="30" cy="135" r="2.5" className="fill-ciano stroke-none animate-pulse origin-center" style={{animationDelay: "0.6s"}} />
              <circle cx="50" cy="160" r="2.5" className="fill-ceu stroke-none animate-pulse origin-center" style={{animationDelay: "0.8s"}} />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
