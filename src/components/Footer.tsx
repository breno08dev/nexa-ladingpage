// src/components/Footer.tsx
import { Instagram, MessageSquare, Mail, ArrowUp } from "lucide-react";
import logoImg from "@/assets/conectnewlogo.png"; // Importação da sua logo oficial

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/5 py-12 px-4 relative overflow-hidden">
      {/* GLOW ROXO DISCRETO NO FUNDO DO RODAPÉ */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* GRID PRINCIPAL: Centralizado no mobile, alinhado à esquerda no desktop */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12 text-center md:text-left">
          
          {/* COLUNA 1: LOGO E DESCRIÇÃO */}
          <div className="md:col-span-1 space-y-4 flex flex-col items-center md:items-start">
            <button 
              onClick={scrollToTop}
              className="bg-transparent border-none p-0 cursor-pointer transition-transform hover:scale-105 inline-block"
            >
              <img src={logoImg} alt="Conect New" className="h-16 md:h-16 object-contain" />
            </button>
            <p className="text-sm text-zinc-400 leading-relaxed pt-2 max-w-xs md:max-w-none">
              Transformando ideias inovadoras em ecossistemas digitais de alta performance e conversão.
            </p>
          </div>

          {/* COLUNA 2: NAVEGAÇÃO RÁPIDA */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-2 text-sm flex flex-col items-center md:items-start">
              <li>
                <button onClick={() => scrollToSection("inicio")} className="text-zinc-400 hover:text-purple-400 transition-colors">Início</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("planos")} className="text-zinc-400 hover:text-purple-400 transition-colors">Planos</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("sobre")} className="text-zinc-400 hover:text-purple-400 transition-colors">Sobre Mim</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("projetos")} className="text-zinc-400 hover:text-purple-400 transition-colors">Projetos</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("processo")} className="text-zinc-400 hover:text-purple-400 transition-colors">Processo</button>
              </li>
            </ul>
          </div>

          {/* COLUNA 3: CONTATOS */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Contato</h4>
            <ul className="space-y-3 text-sm text-zinc-400 flex flex-col items-center md:items-start w-full">
              <li className="flex items-center justify-center md:justify-start gap-2 w-full">
                <MessageSquare className="h-4 w-4 text-purple-400 flex-shrink-0" />
                <span>(16) 98839-2871</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2 w-full">
                <Mail className="h-4 w-4 text-purple-400 flex-shrink-0" />
                <span className="break-all">dev.brenorobin@hotmail.com</span>
              </li>
            </ul>
          </div>

          {/* COLUNA 4: REDES SOCIAIS E VOLTAR AO TOPO */}
          <div className="space-y-4 flex flex-col justify-between items-center md:items-end w-full">
            <div className="flex flex-col items-center md:items-end w-full">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider text-center md:text-right mb-4">Siga-nos</h4>
              <div className="flex gap-4 justify-center md:justify-end w-full">
                <a 
                  href="https://instagram.com/breno.robin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white/5 rounded-xl border border-white/10 text-zinc-400 hover:text-purple-400 hover:border-purple-500/40 transition-all duration-300 shadow-lg"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://wa.me/5516988392871" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white/5 rounded-xl border border-white/10 text-zinc-400 hover:text-purple-400 hover:border-purple-500/40 transition-all duration-300 shadow-lg"
                >
                  <MessageSquare className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* BOTÃO VOLTAR AO TOPO */}
            <button
              onClick={scrollToTop}
              className="mt-8 md:mt-0 p-3 bg-purple-600/10 border border-purple-500/20 text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300 rounded-xl group shadow-[0_0_15px_rgba(168,85,247,0.05)] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] self-center md:self-end"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="h-5 w-5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* DIRETRIZES DE COPYRIGHT */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 text-center sm:text-left">
          <p>© {currentYear} CONECT NEW. Todos os direitos reservados.</p>
          <p className="font-mono">
            Desenvolvido por{" "}
            <span className="text-zinc-400 hover:text-purple-400 transition-colors cursor-pointer" onClick={() => scrollToSection("sobre")}>
              Breno Robin
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;