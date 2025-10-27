// src/components/Process.tsx
import { MessageCircle, Layout, Code, CheckCircle, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Definindo as etapas do processo
const processSteps = [
  {
    step: 1,
    title: "Briefing e Alinhamento",
    description: "Conversamos para entender suas necessidades, objetivos e público-alvo. Coletamos todas as informações essenciais para o projeto.",
    icon: MessageCircle,
    colorClass: "text-primary", // Cor do ícone/número
  },
  {
    step: 2,
    title: "Proposta e Design",
    description: "Criamos um esboço visual (layout ou protótipo) do seu site, definindo a estrutura, cores e estilo visual, alinhado à sua marca.",
    icon: Layout,
    colorClass: "text-accent",
  },
  {
    step: 3,
    title: "Desenvolvimento",
    description: "Com o design aprovado, codificamos seu site utilizando as tecnologias mais modernas, garantindo performance e responsividade.",
    icon: Code,
    colorClass: "text-primary",
  },
  {
    step: 4,
    title: "Revisão e Ajustes",
    description: "Apresentamos o site para sua avaliação. Realizamos os ajustes necessários com base no seu feedback para garantir sua satisfação.",
    icon: CheckCircle,
    colorClass: "text-accent",
  },
  {
    step: 5,
    title: "Lançamento e Suporte",
    description: "Após a aprovação final, colocamos seu site no ar! Oferecemos suporte inicial e opções de manutenção contínua.",
    icon: Rocket,
    colorClass: "text-primary",
  },
];

const Process = () => {
  return (
    <section id="processo" className="py-20 px-4 bg-background"> {/* Fundo padrão */}
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Como Funciona Nosso Processo
          </h2>
          <p className="text-xl text-muted-foreground">
            Da ideia ao lançamento, seguimos etapas claras para garantir o sucesso do seu projeto.
          </p>
        </div>

        {/* Grid para exibir as etapas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"> {/* Adicionado items-stretch */}
          {processSteps.map((item, index) => (
            <Card
              key={item.step}
              className="relative border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-card)] animate-fade-in group overflow-hidden" // Adicionado group
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Número da Etapa no canto */}
              <div className={`absolute top-4 right-4 text-5xl font-bold ${item.colorClass} opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}> {/* Adicionado pointer-events-none */}
                {String(item.step).padStart(2, '0')}
              </div>
              {/* Aumentado padding direito para pr-16 e adicionado overflow-hidden para segurança */}
              <CardHeader className="pt-8 pr-28 relative z-10 overflow-hidden">
                <div className={`inline-block p-3 bg-muted rounded-full mb-4 ${item.colorClass}`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold break-words">{item.title}</CardTitle> {/* Adicionado break-words */}
              </CardHeader>
              <CardContent className="relative z-10"> {/* Adicionado relative z-10 */}
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
           {/* Card Opcional - Agora flui naturalmente no grid */}
           <Card className="border-dashed border-primary/50 bg-primary/5 flex flex-col items-center justify-center p-8 text-center animate-fade-in"> {/* Removido col-span */}
                <h3 className="text-xl font-semibold mb-2 text-primary">Próximo Passo?</h3>
                <p className="text-muted-foreground mb-4">
                    Pronto para começar? Entre em contato e vamos transformar sua ideia em realidade!
                </p>
                <Button variant="hero" onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>
                    Fale Conosco
                </Button>
            </Card>
        </div>
      </div>
    </section>
  );
};

export default Process;