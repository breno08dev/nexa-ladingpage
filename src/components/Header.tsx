// src/components/Header.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

// Importe a sua logo da pasta assets
import logoImg from "@/assets/conectnewlogo.png"; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); 
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 shadow-sm shadow-purple-900/10">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* LADO ESQUERDO: Logo */}
          <div className="flex items-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-transparent border-none p-0 cursor-pointer transition-transform hover:scale-105"
              aria-label="Voltar ao topo"
            >
              <img src={logoImg} alt="Conect New" className="h-16 md:h-16 object-contain" />
            </button>
          </div>
          
          {/* LADO DIREITO: Links (Desktop) e Botão Mobile */}
          <div className="flex items-center gap-6">
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection("inicio")} className="text-sm font-medium text-zinc-400 hover:text-purple-400 transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection("planos")} className="text-sm font-medium text-zinc-400 hover:text-purple-400 transition-colors">
                Planos
              </button>
              <button onClick={() => scrollToSection("sobre")} className="text-sm font-medium text-zinc-400 hover:text-purple-400 transition-colors">
                Sobre
              </button>
              <button onClick={() => scrollToSection("projetos")} className="text-sm font-medium text-zinc-400 hover:text-purple-400 transition-colors">
                Projetos
              </button>
              <button onClick={() => scrollToSection("processo")} className="text-sm font-medium text-zinc-400 hover:text-purple-400 transition-colors">
                Processo
              </button>
              <button onClick={() => scrollToSection("depoimentos")} className="text-sm font-medium text-zinc-400 hover:text-purple-400 transition-colors">
                Depoimentos
              </button>
              <button onClick={() => scrollToSection("faq")} className="text-sm font-medium text-zinc-400 hover:text-purple-400 transition-colors">
                Dúvidas
              </button>
              
              <Button
                size="sm"
                className="bg-purple-600 hover:bg-purple-700 text-white border-none shadow-[0_0_15px_-3px_rgba(147,51,234,0.4)] ml-2"
                onClick={() => window.open("https://wa.me/5516988392871?text=Olá! Gostaria de solicitar um orçamento.", "_blank")}
              >
                Solicitar Orçamento
              </Button>
            </div>

            {/* Mobile Menu Button - Fica à direita no mobile */}
            <button
              className="md:hidden text-zinc-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in border-t border-white/5 pt-4">
            <button onClick={() => scrollToSection("inicio")} className="text-zinc-300 hover:text-purple-400 transition-colors text-left text-lg">
              Início
            </button>
            <button onClick={() => scrollToSection("planos")} className="text-zinc-300 hover:text-purple-400 transition-colors text-left text-lg">
              Planos
            </button>
            <button onClick={() => scrollToSection("sobre")} className="text-zinc-300 hover:text-purple-400 transition-colors text-left text-lg">
              Sobre
            </button>
            <button onClick={() => scrollToSection("projetos")} className="text-zinc-300 hover:text-purple-400 transition-colors text-left text-lg">
              Projetos
            </button>
            <button onClick={() => scrollToSection("processo")} className="text-zinc-300 hover:text-purple-400 transition-colors text-left text-lg">
              Processo
            </button>
            <button onClick={() => scrollToSection("depoimentos")} className="text-zinc-300 hover:text-purple-400 transition-colors text-left text-lg">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-zinc-300 hover:text-purple-400 transition-colors text-left text-lg">
              Dúvidas
            </button>
            
            <Button
              className="w-full mt-2 bg-purple-600 hover:bg-purple-700 text-white"
              onClick={() => window.open("https://wa.me/5516988392871?text=Olá! Gostaria de solicitar um orçamento.", "_blank")}
            >
              Solicitar Orçamento
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;