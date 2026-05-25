// src/components/Hero.tsx
import { Button } from "@/components/ui/button";
import video from "@/assets/video.mp4"

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative flex items-center justify-center min-h-[80vh] bg-[#050505] overflow-hidden px-4 pt-20"
    >
      {/* VÍDEO DE FUNDO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 mix-blend-screen"
      >
        {/* Substitua 'seu-video.mp4' pelo nome do arquivo do seu vídeo que deve estar na pasta public */}
        <source src={video} type="video/mp4" />
      </video>

      {/* OVERLAY ESCURO COM GRADIENTE PARA LEITURA DO TEXTO */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#050505]/60 to-[#050505] z-10"></div>

      {/* LUZES NEON DE FUNDO */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[3000ms] z-10" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[150px] pointer-events-none z-10" />

      {/* Container do conteúdo */}
      <div className="container mx-auto max-w-4xl text-center md:text-left relative z-20 animate-fade-in">
        <div className="space-y-8">
          
          

          <br />
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white tracking-tight">
            Transforme a sua Presença Digital:{" "}
            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              Conectamos
            </span>{" "}
            você ao futuro.
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto md:mx-0">
             Criamos ecossistemas digitais rápidos, modernos e focados em resultados. Eleve o nível da sua marca com a tecnologia certa.
          </p>

          <div className="pt-4">
            <Button
              size="lg"
              className="text-lg px-10 py-6 h-auto bg-purple-600 hover:bg-purple-700 text-white border-none shadow-[0_0_30px_-5px_rgba(147,51,234,0.4)] hover:shadow-[0_0_40px_-5px_rgba(147,51,234,0.6)] transition-all duration-300 hover:-translate-y-1 rounded-xl"
              onClick={() => window.open("https://wa.me/5516988392871?text=Quero meu site agora!", "_blank")}
            >
              Quero o meu site agora!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;