import { GraduationCap, Briefcase } from "lucide-react"; // Exemplo de ícones, importe os que desejar
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <section id="sobre" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-start"> {/* Use items-start para alinhar ao topo */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Quem está por trás da{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                NEXA
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou <span className="font-semibold text-foreground">Breno</span>, desenvolvedor front-end e fundador da NEXA. Minha missão é ajudar empresas e empreendedores a transformarem suas ideias em presença digital real, com sites rápidos, modernos e que vendem.
            </p>
            {/* Seção Atualizada: Skills */}
            <div>
              <h4 className="text-xl font-semibold mb-2 text-foreground">Habilidades Técnicas e Pessoais:</h4>
              <p className="text-muted-foreground leading-relaxed">
                Domino tecnologias como React, TypeScript, Tailwind CSS e [Outras Skills Técnicas]. Além disso, valorizo a comunicação clara, a colaboração e a busca contínua por aprendizado ([Outras Soft Skills]), garantindo que cada projeto seja tratado com profissionalismo e atenção aos detalhes para que sua marca se destaque.
              </p>
            </div>
          </div>

          {/* Seção Nova: Caixas de Formação e Jornada */}
          <div className="space-y-6 animate-scale-in">
            <Card className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center gap-2">
                   <GraduationCap className="h-6 w-6 text-primary" /> {/* Ícone adicionado */}
                  Formação Acadêmica
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Formado em [Seu Curso] pela [Sua Instituição]. Aqui você pode detalhar um pouco mais sobre sua formação, cursos relevantes ou especializações.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center gap-2">
                   <Briefcase className="h-6 w-6 text-primary" /> {/* Ícone adicionado */}
                  Jornada Profissional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Com [Tempo] de experiência, já atuei em [Tipos de Projetos/Empresas], desenvolvendo soluções como [Exemplos de Soluções]. Busco sempre aplicar as melhores práticas para entregar resultados de alto impacto.
                </p>
              </CardContent>
            </Card>

            {/* Você pode adicionar mais cards aqui se necessário, por exemplo, um para Soft Skills */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;