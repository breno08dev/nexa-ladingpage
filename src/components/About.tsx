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
                CONECT NEW
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou <span className="font-semibold text-foreground">Breno</span>, desenvolvedor front-end e fundador da CONECT NEXA. Minha missão é ajudar empresas e empreendedores a transformarem suas ideias em presença digital real, com sites rápidos, modernos e que vendem.
            </p>
            {/* Seção Atualizada: Skills */}
            <div>
              <h4 className="text-xl font-semibold mb-2 text-foreground">Habilidades Técnicas e Pessoais:</h4>
              <p className="text-muted-foreground leading-relaxed">
                Domino tecnologias como React, TypeScript, Tailwind CSS, JavaScript e Node.js. Além disso, valorizo a comunicação clara, a colaboração e a busca contínua por aprendizado, garantindo que cada projeto seja tratado com profissionalismo e atenção aos detalhes para que sua marca se destaque.
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
                  Formado em Análise e Desenvolvimento de Sistemas pela Universidade Moura Lacerda em Ribeirão Preto/SP. Durante minha graduação, adquiri conhecimentos sólidos em desenvolvimento front-end, back-end e soluções web, além de práticas de projetos ágeis, design de interfaces e integração de sistemas. Estou sempre em busca de novos aprendizados e atualizações para entregar soluções digitais modernas e eficientes.
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
                  Com experiência prática em desenvolvimento de sistemas, sites e aplicações web, já atuei em projetos próprios e para clientes, criando soluções como sistemas de gestão, micro-SaaS e landing pages. Meu foco é aplicar boas práticas de desenvolvimento e tecnologia de forma estratégica, gerando resultados eficientes e de alto impacto para empresas e negócios.
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