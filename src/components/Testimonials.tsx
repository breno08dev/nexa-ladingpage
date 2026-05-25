// src/components/Testimonials.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rici",
    role: "Proprietária - RB Lanches",
    text: "O hub de links do RB Lanches facilitou demais a vida dos meus clientes. Pedidos e promoções agora chegam rapidinho!",
    rating: 5,
  },
  {
    name: "Giliard Silva",
    role: "CEO - SuperTec-Telecom",
    text: "A landing page da Supertec deixou tudo claro e objetivo. Captei novos clientes rapidamente e a navegação é super prática.",
    rating: 5,
  },
  {
    name: "Edson",
    role: "Gerente - Sea Fiber Network",
    text: "Investir na landing page foi a melhor escolha. Os visitantes entendem os planos de forma rápida e já entram em contato na hora!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 px-4 bg-[#050505] relative overflow-hidden">
      {/* LUZES NEON DE FUNDO */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            O que os nossos <span className="text-purple-400">clientes</span> dizem
          </h2>
          <p className="text-xl text-zinc-400">
            Resultados reais de quem confiou na CONECT NEW
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/[0.02] backdrop-blur-md border-white/5 hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-900/20 animate-fade-in rounded-2xl flex flex-col"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="pt-8 flex-1 flex flex-col">
                <Quote className="h-8 w-8 text-purple-500 mb-6 opacity-30" />
                <p className="text-zinc-300 mb-8 leading-relaxed flex-1">
                  "{testimonial.text}"
                </p>
                
                {/* Linha divisória e informações do cliente */}
                <div className="flex items-center justify-between border-t border-white/5 pt-5 mt-auto">
                  <div>
                    <p className="font-semibold text-white tracking-wide">{testimonial.name}</p>
                    <p className="text-xs text-purple-400 font-medium mt-0.5">{testimonial.role}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-purple-500 text-purple-500" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;