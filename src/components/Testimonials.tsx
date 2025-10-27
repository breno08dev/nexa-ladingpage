import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Proprietária - Studio Beleza",
    text: "A NEXA transformou minha presença digital. Hoje recebo clientes todos os dias através do meu site!",
    rating: 5,
  },
  {
    name: "João Oliveira",
    role: "Gerente - Café & Companhia",
    text: "Profissionalismo e agilidade na entrega. O site ficou exatamente como imaginei, só que melhor!",
    rating: 5,
  },
  {
    name: "Ana Costa",
    role: "CEO - FitLife Academia",
    text: "Investimento que valeu cada centavo. Nossos resultados aumentaram significativamente após o novo site.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 px-4 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(var(--gradient-dark))",
        }}
      />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-muted-foreground">
            Resultados reais de quem confiou na NEXA
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-card)] animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary mb-4 opacity-50" />
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
