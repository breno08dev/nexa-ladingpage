import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.png";

const Hero = () => {
  return (
    <section id="inicio" className="pt-32 pb-20 px-4 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4YjVjZjYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djE2SDIwVjE2aDE2em0tMiAySDIydjEyaDEyVjE4eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Conectamos{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ideias
              </span>{" "}
              ao digital.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Desenvolvemos sites modernos e estratégias digitais para fazer seu negócio crescer.
            </p>
            <Button 
              variant="accent" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
              onClick={() => window.open("https://wa.me/5511999999999?text=Quero meu site agora!", "_blank")}
            >
              Quero meu site agora!
            </Button>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-20 blur-3xl rounded-full"></div>
            <img 
              src={heroImage} 
              alt="Tecnologia e criatividade digital" 
              className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
