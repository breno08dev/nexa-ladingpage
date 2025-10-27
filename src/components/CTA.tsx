import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="contato" className="py-20 px-4 relative overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(var(--gradient-purple))",
        }}
      />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMTZ2MTZIMjBWMTZoMTZ6bS0yIDJIMjJ2MTJoMTJWMTh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="animate-fade-in space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
            Pronto para levar seu negócio para o digital?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Transforme sua presença online com um site profissional. Comece agora e veja seu negócio crescer!
          </p>
          <Button
            variant="accent"
            size="lg"
            className="text-lg px-10 py-7 h-auto group"
            onClick={() =>
              window.open(
                "https://wa.me/5511999999999?text=Olá! Quero transformar minha presença digital com a NEXA!",
                "_blank"
              )
            }
          >
            Fale com a NEXA agora!
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
