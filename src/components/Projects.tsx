// src/components/Projects.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

// --- IMPORTAR IMAGENS DOS PROJETOS ---
// Importe as imagens reais dos seus projetos aqui.
// Substitua 'projeto1.png', 'projeto2.png', etc., pelos nomes reais dos seus arquivos.
// Certifique-se que os arquivos existem em src/assets/
import projectImage1 from "@/assets/rblanches.png"; // Exemplo
import projectImage2 from "@/assets/supertec.png"; // Exemplo
import projectImage3 from "@/assets/teste.png"; // Exemplo
// Se você não tiver as imagens ainda, pode usar a hero-image como placeholder temporário:
// import placeholderImage from "@/assets/hero-image.png";

// --- DADOS DOS PROJETOS ---
// Atualize os dados com informações reais e as imagens importadas
const projects = [
  {
    title: "RB LANCHES",
    description: "Um hub rápido e prático para acessar o cardápio, promoções e fazer pedidos do RB Lanches em um clique. Tudo pensado para agilizar a experiência do cliente.",
    imageUrl: projectImage1, // Use a variável importada
    projectUrl: "https://rblanches.site",
  },
  {
    title: "SUPERTEC - TELECOM",
    description: "Página moderna e objetiva, mostrando serviços, valores e depoimentos da Supertec, focada em captar clientes e gerar contato de forma simples e eficaz.",
    imageUrl: projectImage2, // Use a variável importada
    projectUrl: "https://supertectelecom.com",
  },
  {
    title: "EM DESENVOLVIMENTO",
    description: "Landing page prática e objetiva, mostrando planos, cobertura e benefícios, facilitando que novos clientes conheçam e contratem o serviço rapidamente.",
    imageUrl: projectImage3, // Use a variável importada
    projectUrl: "https://link-para-o-projeto3.com",
  },
  // Adicione mais projetos aqui, importando as respectivas imagens
];
// --- FIM DOS DADOS DOS PROJETOS ---


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
              className="group overflow-hidden border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-card)] animate-fade-in rounded-xl"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.imageUrl} // Agora usa a variável importada
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                 </div>
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-3">{project.description}</p>
                <Button
                    variant="outline"
                    size="sm"
                    asChild
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