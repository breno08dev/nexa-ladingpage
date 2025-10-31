import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Fecha o menu mobile após clicar em um item
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-transparent border-none p-0 cursor-pointer"
              aria-label="Voltar ao topo"
            >
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                CONECT NEW
              </h1>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("inicio")} className="text-foreground hover:text-primary transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection("planos")} className="text-foreground hover:text-primary transition-colors">
              Planos
            </button>
             <button onClick={() => scrollToSection("sobre")} className="text-foreground hover:text-primary transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection("projetos")} className="text-foreground hover:text-primary transition-colors">
              Projetos
            </button>
            <button onClick={() => scrollToSection("processo")} className="text-foreground hover:text-primary transition-colors">
              Processo
            </button>
            <button onClick={() => scrollToSection("depoimentos")} className="text-foreground hover:text-primary transition-colors">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-foreground hover:text-primary transition-colors">
              Dúvidas
            </button>
            <button onClick={() => scrollToSection("contato")} className="text-foreground hover:text-primary transition-colors">
              Contato
            </button>
            <Button
              variant="hero"
              size="lg"
              onClick={() => window.open("https://wa.me/5516988392871?text=Olá! Gostaria de solicitar um orçamento.", "_blank")}
            >
              Solicitar Orçamento
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
            <button onClick={() => scrollToSection("inicio")} className="text-foreground hover:text-primary transition-colors text-left">
              Início
            </button>
            <button onClick={() => scrollToSection("planos")} className="text-foreground hover:text-primary transition-colors text-left">
              Planos
            </button>
            <button onClick={() => scrollToSection("sobre")} className="text-foreground hover:text-primary transition-colors text-left">
              Sobre
            </button>
             <button onClick={() => scrollToSection("projetos")} className="text-foreground hover:text-primary transition-colors text-left">
               Projetos
             </button>
             <button onClick={() => scrollToSection("processo")} className="text-foreground hover:text-primary transition-colors text-left">
               Processo
             </button>
            <button onClick={() => scrollToSection("depoimentos")} className="text-foreground hover:text-primary transition-colors text-left">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-foreground hover:text-primary transition-colors text-left">
              Dúvidas
            </button>
            <button onClick={() => scrollToSection("contato")} className="text-foreground hover:text-primary transition-colors text-left">
              Contato
            </button>
            <Button
              variant="hero"
              className="w-full"
              onClick={() => window.open("https://wa.me/5516988392871?text=Olá! Gostaria de solicitar um orçamento.", "_blank")}
            >
              Solicitar Orçamento
            </Button>
            <div className="flex justify-start pt-2">
              <ThemeToggle />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;