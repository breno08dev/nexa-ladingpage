// src/components/Projects.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

import projectImage1 from "@/assets/rblanches.png"; 
import projectImage2 from "@/assets/supertec.png"; 
import projectImage3 from "@/assets/fibersea.jpeg"; 
import projectImage4 from "@/assets/gfi.jpeg";

const projects = [
  {
    title: "RB LANCHES",
    description: "Um hub rápido e prático para aceder ao cardápio, promoções e fazer pedidos num clique. Tudo pensado para agilizar a experiência do cliente.",
    imageUrl: projectImage1,
    projectUrl: "https://rblanches.site",
  },
  {
    title: "SUPERTEC - TELECOM",
    description: "Página moderna e objetiva, mostrando serviços, valores e depoimentos, focada em captar clientes e gerar contacto de forma simples e eficaz.",
    imageUrl: projectImage2,
    projectUrl: "https://supertectelecom.com",
  },
  {
    title: "FIBER SEA NETWORK",
    description: "Landing page prática e objetiva, mostrando planos, cobertura e benefícios, facilitando que novos clientes conheçam e contratem o serviço.",
    imageUrl: projectImage3,
    projectUrl: "https://fiberseanetwork.com.br",
  },
  {
    title: "GFI MONTAGEM",
    description: "Site institucional moderno e objetivo, destacando serviços, portfólio e contato, projetado para atrair clientes e gerar leads de forma eficaz.",
    imageUrl: projectImage4,
    projectUrl: "https://gfimontagem.com.br",
  },
];

const Projects = () => {
  return (
    <section id="projetos" className="py-20 px-4 bg-[#050505] relative overflow-hidden">
      {/* LUZES NEON DE FUNDO */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Meus <span className="text-purple-400">Projetos</span>
          </h2>
          <p className="text-xl text-zinc-400">
            Uma amostra do meu trabalho e paixão por código.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-white/[0.02] backdrop-blur-md border-white/5 hover:border-purple-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/20 animate-fade-in rounded-xl flex flex-col"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* MOCKUP DO NAVEGADOR (DARK MODE) */}
              <div className="border-b border-white/5 bg-white/[0.03] px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <div className="ml-2 px-2 py-0.5 bg-black/40 rounded text-[10px] text-zinc-500 font-mono flex-1 truncate text-center">
                  {new URL(project.projectUrl).hostname}
                </div>
              </div>

              {/* IMAGEM E OVERLAY */}
              <div className="relative aspect-video overflow-hidden bg-zinc-900 border-b border-white/5">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover object-top w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <Button
                    variant="default"
                    size="lg"
                    asChild
                    className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl bg-purple-600 hover:bg-purple-700 text-white border-none"
                  >
                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                      Acessar Sistema
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* CONTEÚDO DO CARD */}
              <CardContent className="p-6 space-y-3 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-white tracking-tight">{project.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed flex-1">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;