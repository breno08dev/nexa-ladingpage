import { Code2, Palette, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Quem está por trás da{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                NEXA
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou <span className="font-semibold text-foreground">Breno</span>, desenvolvedor front-end e fundador da NEXA. 
              Minha missão é ajudar empresas e empreendedores a transformarem suas ideias em presença digital real, 
              com sites rápidos, modernos e que vendem.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cada projeto é tratado com dedicação e atenção aos detalhes, garantindo que sua marca se destaque no ambiente digital.
            </p>
          </div>

          <div className="grid gap-6 animate-scale-in">
            <div className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-card)]">
              <Code2 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Código Limpo</h3>
              <p className="text-muted-foreground">
                Desenvolvimento com as melhores práticas e tecnologias modernas para garantir performance e qualidade.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-card)]">
              <Palette className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Design Único</h3>
              <p className="text-muted-foreground">
                Cada projeto é personalizado para refletir a identidade da sua marca e se conectar com seu público.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-card)]">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Entrega Rápida</h3>
              <p className="text-muted-foreground">
                Processos ágeis que garantem seu site no ar rapidamente, sem comprometer a qualidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
