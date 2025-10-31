// src/components/Footer.tsx
import { Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              CONECT NEW
            </h3>
            <p className="text-muted-foreground">
              Conectamos você e sua empresa ao Digital
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-muted-foreground hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#planos" className="text-muted-foreground hover:text-primary transition-colors">
                  Planos
                </a>
              </li>
              <li>
                <a href="#projetos" className="text-muted-foreground hover:text-primary transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#processo" className="text-muted-foreground hover:text-primary transition-colors">
                  Processo
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                  Dúvidas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contato</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/5516988392871" // Número Atualizado
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://instagram.com/breno.robin" // Usuário Atualizado
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span>Instagram</span>
              </a>
              <a
                 // Email Atualizado
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <p>dev.brenorobin@hotmail.com</p>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>© 2025 CONECT NEX – Conectamos você e sua empresa ao Digital.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;