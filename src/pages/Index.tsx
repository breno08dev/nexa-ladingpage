import { useEffect } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { useCookieConsent } from "@/context/CookieConsentContext"; // Importar o hook

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Plans from "@/components/Plans";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  // Número de WhatsApp para o toast
  const WHATSAPP_NUMBER_TOAST = "5516988392871";
  const { consentStatus } = useCookieConsent(); // Pegar o status do consentimento

  useEffect(() => {
    // Mensagem pré-definida para o WhatsApp
    const whatsappMessage = "Olá! Estava vendo a página da Conect Nexa e queria tirar algumas dúvidas.";
    const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER_TOAST}?text=${encodedWhatsappMessage}`;

    // Só agendar o toast se o consentimento foi DADO ('granted')
    let timer: NodeJS.Timeout | undefined;
    if (consentStatus === 'granted') {
      timer = setTimeout(() => {
        toast.message("Ficou com alguma dúvida?", {
          description: (
            <div className="flex flex-col gap-4 w-full pt-2">
              <p className="text-muted-foreground">
                Estamos prontos para te ajudar a escolher o plano ideal. Fale conosco no WhatsApp!
              </p>
              <Button
                variant="accent"
                size="lg"
                className="w-full gap-2"
                onClick={() => {
                  window.open(whatsappUrl, "_blank");
                  toast.dismiss();
                }}
              >
                <MessageSquare className="h-5 w-5" />
                Conversar Agora
              </Button>
            </div>
          ),
          duration: Infinity,
        });
      }, 20000); // 20 segundos de delay
    }

    // Função de limpeza para cancelar o timer se o componente desmontar
    return () => {
      if (timer) clearTimeout(timer);
    };

  }, [consentStatus]); // Re-executar o efeito quando o consentimento mudar

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Plans />
        <About />
        <Projects />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;