import { Button } from "@/components/ui/button";
import heroImage from "@/assets/new.png"; // Importar a imagem de fundo

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative flex items-center justify-center h-[80vh] bg-cover bg-center px-4" // Alterado para h-[80vh]
      style={{ backgroundImage: `url(${heroImage})` }} // Aplicar imagem de fundo
    >
      {/* Overlay escuro para melhor legibilidade do texto */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      {/* Container do conteúdo */}
      <div className="container mx-auto max-w-4xl text-center md:text-left relative z-20 animate-fade-in"> {/* Adicionado md:text-left */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white"> {/* Texto branco para contraste */}
            Transforme sua Presença Digital:{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Conectamos
            </span>{" "}
            você ao futuro.
          </h1>
          <Button
            variant="hero" // Usando a variante 'hero' existente para destaque
            size="lg"
            className="text-lg px-10 py-4 h-auto" // Removida margem top para alinhar com texto esquerdo
            onClick={() => window.open("https://wa.me/5516988392871?text=Quero meu site agora!", "_blank")}
          >
            Quero meu site agora!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;