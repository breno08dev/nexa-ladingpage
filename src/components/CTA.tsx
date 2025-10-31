// src/components/CTA.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { MessageSquare, Mail, Instagram, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// --- Importar a imagem de fundo ---
import ctaBgImage from "@/assets/hero-image.webp"; // <<< Verifique se 'teste2.png' existe em src/assets >>>

// Schema de validação (Apenas Nome e Mensagem)
const whatsappFormSchema = z.object({
  name: z.string().min(2, {
    message: "Por favor, insira seu nome.",
  }),
  message: z.string().min(5, {
    message: "Digite uma breve mensagem (mínimo 5 caracteres).",
  }),
});

// Suas informações de contato
const WHATSAPP_NUMBER = "5516988392871";
const EMAIL_ADDRESS = "dev.brenorobin@hotmail.com";
const INSTAGRAM_USER = "breno.robin";

const CTA = () => {
  const form = useForm<z.infer<typeof whatsappFormSchema>>({
    resolver: zodResolver(whatsappFormSchema),
    defaultValues: {
      name: "",
      message: "",
    },
  });

  // Função onSubmit (sem alterações)
  function onSubmit(values: z.infer<typeof whatsappFormSchema>) {
    const text = `Olá, meu nome é ${values.name}. Gostaria de falar sobre: ${values.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
    form.reset();
  }

  return (
    <section
      id="contato"
      className="py-16 sm:py-20 px-4 relative overflow-hidden bg-cover bg-center" // Usar bg-cover e bg-center
      style={{ backgroundImage: `url(${ctaBgImage})` }} // Aplicar a imagem importada
    >
      {/* Overlay Escuro para Contraste */}
      <div className="absolute inset-0 bg-black/70 z-10"></div> {/* Overlay consistente para ambos os temas */}

      <div className="container mx-auto max-w-6xl relative z-20"> {/* Aumentado z-index */}
        {/* Título da Seção */}
        <div className="text-center mb-12 animate-fade-in">
           {/* Título e Parágrafo Brancos para contraste */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-white">
            Entre em Contato
          </h2>
          <p className="text-lg sm:text-xl text-white/90">
            Nossa equipe está pronta para ajudar você a escolher o melhor plano ou tirar suas dúvidas.
          </p>
        </div>

        {/* Layout Principal (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Coluna Esquerda: Informações de Contato e Horários */}
          {/* Usar Card com fundo translúcido para integrar com o fundo */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '150ms' }}>
            {/* Fale Conosco */}
            <Card className="bg-card/80 dark:bg-card/60 backdrop-blur-md border-border/50 shadow-lg text-card-foreground"> {/* Fundo translúcido */}
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary">Fale Conosco</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                 {/* WhatsApp (Informativo) */}
                 <div
                  className="flex items-center gap-3 text-muted-foreground group" // Removido hover:text-primary
                 >
                  <MessageSquare className="h-6 w-6 text-primary transition-transform flex-shrink-0" /> {/* Removido group-hover:scale-110 */}
                  <div>
                    <p className="font-medium text-foreground transition-colors">WhatsApp</p> {/* Removido group-hover:text-primary */}
                    <p className="text-sm">(16) 98839-2871</p>
                  </div>
                 </div>
                 {/* Email (Informativo) */}
                 <div
                  className="flex items-center gap-3 text-muted-foreground group" // Removido hover:text-primary
                 >
                  <Mail className="h-6 w-6 text-primary transition-transform flex-shrink-0" /> {/* Removido group-hover:scale-110 */}
                  <div>
                    <p className="font-medium text-foreground transition-colors">E-mail</p> {/* Removido group-hover:text-primary */}
                    <p className="text-sm break-all">{EMAIL_ADDRESS}</p> {/* break-all para emails longos */}
                  </div>
                 </div>
                 {/* Instagram (Informativo) */}
                 <div
                  className="flex items-center gap-3 text-muted-foreground group" // Removido hover:text-primary
                 >
                  <Instagram className="h-6 w-6 text-primary transition-transform flex-shrink-0" /> {/* Removido group-hover:scale-110 */}
                  <div>
                    <p className="font-medium text-foreground transition-colors">Instagram</p> {/* Removido group-hover:text-primary */}
                    <p className="text-sm">@{INSTAGRAM_USER}</p>
                  </div>
                 </div>
              </CardContent>
            </Card>

            {/* Horários de Atendimento */}
            <Card className="bg-card/80 dark:bg-card/60 backdrop-blur-md border-border/50 shadow-lg text-card-foreground"> {/* Fundo translúcido */}
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary flex items-center gap-2">
                    <Clock className="h-6 w-6"/> Horários de Atendimento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                 <p><span className="font-medium text-foreground">Segunda a Sexta:</span> 09:00 às 17:00</p>
                 <p><span className="font-medium text-foreground">Sábado:</span> 08:00 às 12:00</p>
                 <p className="text-sm italic pt-2">*Domingos e feriados fechado.</p>
              </CardContent>
            </Card>
          </div>

          {/* Coluna Direita: Formulário */}
          {/* Card do formulário também com fundo translúcido */}
          <Card className="bg-card/80 dark:bg-card/60 backdrop-blur-md border-border/50 shadow-lg text-card-foreground animate-fade-in p-6 sm:p-8" style={{ animationDelay: '300ms' }}>
             <h3 className="text-2xl font-semibold mb-6 text-primary text-center md:text-left">Envie sua Mensagem</h3>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome Completo</FormLabel> {/* Shadcn ajusta a cor baseada no tema */}
                        <FormControl>
                          {/* Input com leve transparência para integrar */}
                          <Input
                            placeholder="Seu nome"
                            {...field}
                            className="bg-background/80 dark:bg-black/20 border-border dark:border-white/20 focus:bg-background dark:focus:bg-black/30 placeholder:text-muted-foreground"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensagem</FormLabel>
                        <FormControl>
                          {/* Textarea com leve transparência */}
                          <Textarea
                            placeholder="Conte-nos sobre suas necessidades..."
                            className="resize-none bg-background/80 dark:bg-black/20 border-border dark:border-white/20 focus:bg-background dark:focus:bg-black/30 placeholder:text-muted-foreground"
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    variant="hero" // Usando variante hero para destaque
                    size="lg"
                    className="w-full group text-base sm:text-lg"
                  >
                    Enviar via WhatsApp
                    <MessageSquare className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </Form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTA;