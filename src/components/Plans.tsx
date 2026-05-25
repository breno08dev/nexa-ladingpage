// src/components/Plans.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";

const WHATSAPP_NUMBER_PLANS = "5516988392871"; 

const plans = [
  {
    name: "Blog / Portfólio",
    price: "R$ 498,00",
    features: [
      "Hospedagem Grátis (1 ano)",
      "Domínio Grátis (1 ano)",
      "100% Seguro (HTTPS)",
      "Design Responsivo",
      "Integração com Redes Sociais",
    ],
    highlighted: false,
  },
  {
    name: "Landing Page (5 divisões)",
    price: "R$ 798,00",
    features: [
      "Hospedagem Grátis (1 ano)",
      "Domínio Grátis (1 ano)",
      "100% Seguro (HTTPS)",
      "Até 5 divisões estratégicas",
      "Design Alta Conversão",
      "Botão WhatsApp flutuante",
    ],
    highlighted: true,
  },
  {
    name: "Site Institucional",
    price: "R$ 1.590,00",
    features: [
      "Hospedagem Grátis (1 ano)",
      "Domínio Grátis (1 ano)",
      "100% Seguro (HTTPS)",
      "Múltiplas Páginas",
      "Design Profissional Exclusivo",
      "Suporte Técnico",
    ],
    highlighted: false,
  },
];

const Plans = () => {
  const generateWhatsAppLink = (planName: string) => {
    const baseText = "Olá! Tenho interesse no plano";
    const encodedText = encodeURIComponent(`${baseText} ${planName}. Gostaria de mais informações.`);
    return `https://wa.me/${WHATSAPP_NUMBER_PLANS}?text=${encodedText}`;
  };

  return (
    <section id="planos" className="py-20 px-4 bg-[#050505] relative overflow-hidden">
      {/* LUZES NEON DE FUNDO */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Escolha o plano ideal para o seu negócio
          </h2>
          <p className="text-xl text-zinc-400">
            Soluções completas com domínio e hospedagem inclusos por 1 ano.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 items-center max-w-5xl mx-auto"> 
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col relative transition-all duration-500 backdrop-blur-md ${
                plan.highlighted
                  ? "bg-purple-900/10 border-purple-500/50 shadow-2xl shadow-purple-900/20 scale-105 lg:scale-105 z-10" 
                  : "bg-white/[0.02] border-white/5 hover:border-purple-500/30 hover:scale-105 hover:bg-white/[0.04]" 
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold z-20 flex items-center gap-1 shadow-lg shadow-purple-500/25 border border-purple-400/30"> 
                  <Sparkles className="w-4 h-4" />
                  Mais Popular
                </div>
              )}
              <CardHeader className="pt-10"> 
                <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                <CardDescription className="mt-2">
                  <span className={`text-4xl font-bold ${plan.highlighted ? 'text-purple-400' : 'text-white'}`}>
                    {plan.price}
                  </span>
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`mt-1 p-1 rounded-full ${plan.highlighted ? 'bg-purple-500/20' : 'bg-white/5'}`}>
                        <Check className={`h-4 w-4 flex-shrink-0 ${plan.highlighted ? 'text-purple-400' : 'text-zinc-400'}`} />
                      </div>
                      <span className="text-sm text-zinc-300 leading-tight pt-1">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant={plan.highlighted ? "default" : "outline"}
                  size="lg"
                  className={`w-full ${plan.highlighted ? 'bg-purple-600 hover:bg-purple-700 text-white border-none' : 'border-white/10 text-white hover:bg-white/10 hover:text-white'}`}
                  onClick={() => window.open(generateWhatsAppLink(plan.name), "_blank")}
                >
                  Escolher Plano
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* ORÇAMENTO PERSONALIZADO (DARK THEME) */}
        <div className="max-w-4xl mx-auto mt-16 p-8 rounded-2xl bg-white/[0.02] backdrop-blur-md border border-white/10 flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="mb-6 md:mb-0 text-center md:text-left relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2">Quer criar algo totalmente novo?</h3>
            <p className="text-zinc-400 max-w-lg">
              Para você que tem uma ideia inovadora e precisa de um sistema sob medida. Faça um orçamento sem compromisso.
            </p>
          </div>
          <Button 
            size="lg" 
            className="whitespace-nowrap px-8 bg-white text-black hover:bg-zinc-200 relative z-10"
            onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER_PLANS}?text=${encodeURIComponent("Olá! Gostaria de fazer um orçamento para um projeto personalizado, totalmente novo.")}`, "_blank")}
          >
            Orçamento Personalizado
          </Button>
        </div>

        <p className="text-center text-sm text-zinc-500 mt-8">
          Aceitamos pagamentos em até <span className="font-semibold text-purple-400">12x no cartão</span>.
        </p>
      </div>
    </section>
  );
};

export default Plans;