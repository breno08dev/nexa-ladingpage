// src/components/Process.tsx
import { MessageCircle, Layout, Code, CheckCircle, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Definindo as etapas do processo com cores atualizadas para o Dark Theme
const processSteps = [
  {
    step: 1,
    title: "Briefing e Alinhamento",
    description: "Conversamos para entender as suas necessidades, objetivos e público-alvo. Recolhemos todas as informações essenciais para o projeto.",
    icon: MessageCircle,
    colorClass: "text-purple-400", 
  },
  {
    step: 2,
    title: "Proposta e Design",
    description: "Criamos um esboço visual (layout ou protótipo) do seu site, definindo a estrutura, cores e estilo visual, alinhado à sua marca.",
    icon: Layout,
    colorClass: "text-indigo-400",
  },
  {
    step: 3,
    title: "Desenvolvimento",
    description: "Com o design aprovado, codificamos o seu site utilizando as tecnologias mais modernas, garantindo performance e responsividade.",
    icon: Code,
    colorClass: "text-purple-400",
  },
  {
    step: 4,
    title: "Revisão e Ajustes",
    description: "Apresentamos o site para sua avaliação. Realizamos os ajustes necessários com base no seu feedback para garantir a sua total satisfação.",
    icon: CheckCircle,
    colorClass: "text-indigo-400",
  },
  {
    step: 5,
    title: "Lançamento e Suporte",
    description: "Após a aprovação final, colocamos o seu site no ar! Oferecemos suporte inicial e opções de manutenção contínua.",
    icon: Rocket,
    colorClass: "text-purple-400",
  },
];

const Process = () => {
  return (
    <section id="processo" className="py-20 px-4 bg-[#050505] relative overflow-hidden"> 
      {/* LUZES NEON DE FUNDO */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Como Funciona Nosso <span className="text-purple-400">Processo</span>
          </h2>
          <p className="text-xl text-zinc-400">
            Da ideia ao lançamento, seguimos etapas claras para garantir o sucesso do seu projeto.
          </p>
        </div>

        {/* Grid para exibir as etapas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"> 
          {processSteps.map((item, index) => (
            <Card
              key={item.step}
              className="relative bg-white/[0.02] backdrop-blur-md border-white/5 hover:border-purple-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/20 animate-fade-in group overflow-hidden rounded-xl"
              style={{ animationDelay: `${index * 150}ms` }}
            >
             {/* Número da Etapa fixo no canto superior direito (Fundo) */}
<div className={`absolute top-4 right-4 text-5xl font-bold ${item.colorClass} opacity-5 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none transform group-hover:scale-110 z-0`}> 
  {String(item.step).padStart(2, '0')}
</div>

{/* Header: pt-6, px-6 (espaço na esquerda) e pr-20 (margem grande na direita para não tocar no número) */}
<CardHeader className="pt-6 px-6 pr-20 relative z-10">
  {/* Ícone pequeno (h-4 w-4 e p-2) alinhado à esquerda */}
  <div className={`inline-flex items-center justify-center p-2 rounded-lg mb-3 bg-white/5 border border-white/10 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-colors duration-300 ${item.colorClass} w-fit`}>
    <item.icon className="h-4 w-4" />
  </div>
  <CardTitle className="text-lg font-semibold text-white leading-tight">{item.title}</CardTitle> 
</CardHeader>

{/* Content: Mesma margem de segurança na direita (pr-20) para o texto não invadir o número */}
<CardContent className="relative z-10 px-6 pb-6 pr-20"> 
  <p className="text-zinc-400 leading-relaxed text-sm">{item.description}</p>
</CardContent>
            </Card>
          ))}
          
           {/* Card Opcional de Call to Action - Estilo Tracejado Neon */}
           <Card className="border-dashed border-2 border-purple-500/30 bg-purple-500/5 backdrop-blur-md hover:bg-purple-500/10 transition-colors duration-300 flex flex-col items-center justify-center p-8 text-center animate-fade-in rounded-xl"> 
                <h3 className="text-2xl font-bold mb-2 text-white">Próximo Passo?</h3>
                <p className="text-zinc-400 mb-6">
                    Pronto para começar? Entre em contacto e vamos transformar a sua ideia em realidade!
                </p>
                <Button 
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white border-none shadow-[0_0_20px_-5px_rgba(147,51,234,0.5)]"
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    Falar Connosco
                </Button>
            </Card>
        </div>
      </div>
    </section>
  );
};

export default Process;