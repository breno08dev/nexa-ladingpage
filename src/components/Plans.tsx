// src/components/Plans.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

// Número de WhatsApp para usar nos links
const WHATSAPP_NUMBER_PLANS = "5516988392871"; // Incluindo código do país (55)

// Atualizando a estrutura de dados dos planos para incluir o preço original
const plans = [
  {
    name: "Site de Links",
    originalPrice: "R$ 359,00", // Preço original adicionado
    price: "R$ 259,00",
    features: [
      "100% Seguro (HTTPS)",
      "Hospedagem grátis 1 ano",
      "Design Profissional",
      "Integração com Redes Sociais",
      "Domínio Grátis (1 ano)", // Adicionado (1 ano) conforme imagem
    ],
    highlighted: false,
  },
  {
    name: "Landing Page Básica",
    originalPrice: "R$ 597,00", // Preço original adicionado
    price: "R$ 497,00",
    features: [
      "100% Seguro (HTTPS)",
      "Hospedagem grátis 1 ano",
      "Design Profissional",
      "Integração com Redes Sociais",
      "4 Sessões de Criação",
      "Domínio Grátis (1 ano)", // Adicionado (1 ano) conforme imagem
    ],
    highlighted: false,
  },
  {
    name: "Landing Page Alta Conversão",
    originalPrice: "R$ 897,00", // Preço original adicionado
    price: "R$ 797,00",
    features: [
      "100% Seguro (HTTPS)",
      "Hospedagem grátis 1 ano",
      "Design Profissional",
      "Integração com Redes Sociais",
      "Até 8 Sessões de Criação",
      "Domínio Grátis",
      "Suporte Técnico",
    ],
    highlighted: true,
  },
  {
    name: "Site Institucional",
    originalPrice: "R$1.597,00", // Preço original adicionado
    price: "R$1.497,00",
    features: [
      "100% Seguro (HTTPS)",
      "Hospedagem grátis 1 ano",
      "Design Profissional",
      "Integração com Redes Sociais",
      "5 Páginas: Home, Blog, Sobre, Serviços, Contato",
      "Domínio Grátis",
      "Suporte Técnico", // Adicionado conforme imagem
    ],
    highlighted: false,
  },
];

const Plans = () => {
  // Função para gerar a URL do WhatsApp com mensagem personalizada
  const generateWhatsAppLink = (planName: string) => {
    const baseText = "Olá! Tenho interesse no plano";
    const encodedText = encodeURIComponent(`${baseText} ${planName}. Gostaria de mais informações.`);
    return `https://wa.me/${WHATSAPP_NUMBER_PLANS}?text=${encodedText}`;
  };

  return (
    <section id="planos" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Escolha o plano ideal para o seu negócio
          </h2>
          <p className="text-xl text-muted-foreground">
            Soluções completas para transformar sua presença digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 items-center"> {/* Adicionado items-center para alinhar verticalmente */}
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col relative transition-all duration-300 hover:shadow-2xl ${
                plan.highlighted
                  ? "border-primary border-2 shadow-[var(--shadow-glow)] scale-105 lg:scale-105 z-10" // Adicionado scale-105 e z-10
                  : "hover:border-primary hover:scale-105" // Movido hover:scale-105 para cá
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold z-20"> {/* Aumentado z-index do selo */}
                  Mais Popular
                </div>
              )}
              <CardHeader className="pt-10"> {/* Aumentado padding top ainda mais por causa do selo e escala */}
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="mt-2">
                  {/* Preço Original Riscado */}
                  {plan.originalPrice && (
                     <span className="text-muted-foreground line-through text-lg mr-2">
                       {plan.originalPrice}
                     </span>
                  )}
                  {/* Preço Promocional */}
                  <span className="text-3xl font-bold text-primary">
                    {plan.price}
                  </span>
                </CardDescription>
              </CardHeader>
              {/* Adicionado flex-grow para empurrar o footer para baixo */}
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant={plan.highlighted ? "hero" : "default"}
                  className="w-full"
                  onClick={() =>
                    window.open(
                      generateWhatsAppLink(plan.name), // Usa a função para gerar link
                      "_blank"
                    )
                  }
                >
                  Escolher Plano
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="text-center text-lg text-muted-foreground">
          Hospedagem e Domínio Grátis. Pague em até <span className="font-semibold text-primary">12x no cartão</span>.
        </p>
      </div>
    </section>
  );
};

export default Plans;