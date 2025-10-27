import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Site de Links",
    price: "R$ 259,00",
    features: [
      "100% Seguro (HTTPS)",
      "Hospedagem grátis 1 ano",
      "Design Profissional",
      "Integração com Redes Sociais",
      "Domínio Grátis (1 ano)",
    ],
    highlighted: false,
  },
  {
    name: "Landing Page Básica",
    price: "R$ 497,00",
    features: [
      "100% Seguro (HTTPS)",
      "Hospedagem grátis 1 ano",
      "Design Profissional",
      "Integração com Redes Sociais",
      "4 Sessões de Criação",
    ],
    highlighted: false,
  },
  {
    name: "Landing Page Alta Conversão",
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
    price: "R$ 1.497,00",
    features: [
      "100% Seguro (HTTPS)",
      "Hospedagem grátis 1 ano",
      "Design Profissional",
      "Integração com Redes Sociais",
      "5 Páginas: Home, Blog, Sobre, Serviços, Contato",
      "Domínio Grátis",
    ],
    highlighted: false,
  },
];

const Plans = () => {
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.highlighted
                  ? "border-primary border-2 shadow-[var(--shadow-glow)]"
                  : "hover:border-primary"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Mais Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-3xl font-bold text-primary mt-2">
                  {plan.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
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
                      `https://wa.me/5511999999999?text=Olá! Tenho interesse no plano ${plan.name}.`,
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
          Hospedagem e Domínio Grátis. Pague em até <span className="font-semibold text-primary">10x no cartão</span>.
        </p>
      </div>
    </section>
  );
};

export default Plans;
