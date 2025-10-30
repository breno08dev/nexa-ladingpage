// src/components/CookieConsentBanner.tsx
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useCookieConsent } from "@/context/CookieConsentContext"; // Importar nosso hook
import { Cookie } from "lucide-react";

export const CookieConsentBanner = () => {
  const { consentStatus, grantConsent, denyConsent } = useCookieConsent();

  // Se o usuário já escolheu (granted or denied), não mostra o banner
  if (consentStatus !== 'pending') {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-8">
      <Alert className="bg-card/95 backdrop-blur-sm shadow-2xl border-border max-w-2xl mx-auto">
        <Cookie className="h-5 w-5 text-primary" />
        <AlertTitle className="font-semibold text-lg text-foreground">
          Nós usamos cookies
        </AlertTitle>
        <AlertDescription className="text-muted-foreground mt-2">
          Este site utiliza cookies para salvar suas preferências (como tema) e para melhorar sua experiência. Ao continuar, você concorda com nosso uso.
        </AlertDescription>
        <div className="flex gap-4 mt-6">
          <Button onClick={grantConsent} className="w-full" variant="hero">
            Aceitar
          </Button>
          <Button onClick={denyConsent} className="w-full" variant="outline">
            Recusar
          </Button>
        </div>
      </Alert>
    </div>
  );
};