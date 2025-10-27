// src/components/Projects.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

// --- DADOS DE EXEMPLO ---
// Substitua estes dados pelos seus projetos reais
// Recomenda-se criar um arquivo separado (ex: src/data/projects.ts) se a lista for longa
const projects = [
  {
    title: "Nome do Projeto 1",
    description: "Breve descrição do projeto, tecnologias usadas ou o problema que ele resolveu.",
    imageUrl: "/placeholder-project.png", // Substitua pelo caminho da imagem real (ex: /src/assets/projeto1.png)
    projectUrl: "https://link-para-o-projeto1.com", // Link para o site ao vivo ou repositório
  },
  {
    title: "Nome do Projeto 2",
    description: "Outra descrição interessante sobre este segundo projeto fantástico.",
    imageUrl: "/placeholder-project.png", // Substitua pelo caminho da imagem real
    projectUrl: "https://link-para-o-projeto2.com",
  },
  {
    title: "Nome do Projeto 3",
    description: "Mais um projeto para demonstrar suas habilidades e experiência.",
    imageUrl: "/placeholder-project.png", // Substitua pelo caminho da imagem real
    projectUrl: "https://link-para-o-projeto3.com",
  },
  // Adicione mais projetos aqui
];
// --- FIM DOS DADOS DE EXEMPLO ---


const Projects = () => {
  return (
    <section id="projetos" className="py-20 px-4 bg-muted/30"> {/* Fundo levemente diferente */}
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meus Projetos
          </h2>
          <p className="text-xl text-muted-foreground">
            Uma amostra do meu trabalho e paixão por código.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-card)] animate-fade-in rounded-xl" // Adicionado group e overflow-hidden
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative aspect-video overflow-hidden"> {/* Container para imagem com aspect ratio */}
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" // Efeito de zoom no hover
                />
                {/* Overlay opcional que aparece no hover */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                   {/* Pode adicionar texto ou botões aqui que só aparecem no hover */}
                 </div>
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-3">{project.description}</p> {/* Limita a descrição a 3 linhas */}
                <Button
                    variant="outline"
                    size="sm"
                    asChild /* Permite que o botão aja como um link */
                    className="mt-4 group/link"
                >
                  <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                    Ver Projeto
                    <ExternalLink className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;