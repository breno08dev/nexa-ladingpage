// src/components/CTA.tsx
"use client"; // Necessário para react-hook-form

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { MessageSquare } from "lucide-react"; // Importar ícone do WhatsApp ou similar

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

// Schema de validação simples para o formulário do WhatsApp
const whatsappFormSchema = z.object({
  name: z.string().min(2, {
    message: "Por favor, insira seu nome.",
  }),
  message: z.string().min(5, {
    message: "Digite uma breve mensagem (mínimo 5 caracteres).",
  }),
});

// Número de telefone para o WhatsApp (substitua pelo seu número real com código do país/área)
const WHATSAPP_NUMBER = "5511999999999"; // Exemplo: Brasil, São Paulo

const CTA = () => {
  const form = useForm<z.infer<typeof whatsappFormSchema>>({
    resolver: zodResolver(whatsappFormSchema),
    defaultValues: {
      name: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof whatsappFormSchema>) {
    const text = `Olá NEXA, meu nome é ${values.name}. Gostaria de falar sobre: ${values.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
    form.reset(); // Limpa o formulário após abrir o WhatsApp
  }

  return (
    <section id="contato" className="py-16 sm:py-20 px-4 relative overflow-hidden"> {/* Padding vertical reduzido em telas pequenas */}
      {/* Fundo Gradiente */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(var(--gradient-purple))",
        }}
      />
      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMTZ2MTZIMjBWMTZoMTZ6bS0yIDJIMjJ2MTJoMTJWMTh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="animate-fade-in space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground"> {/* Tamanho menor em telas pequenas */}
            Vamos Conversar sobre o seu Projeto?
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto"> {/* Tamanho menor em telas pequenas */}
            Preencha os campos abaixo e inicie a conversa diretamente pelo WhatsApp!
          </p>

          {/* Formulário WhatsApp */}
          <Form {...form}>
            {/* Adiciona um fundo semi-transparente e padding ao formulário */}
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 bg-black/20 backdrop-blur-md p-6 sm:p-8 rounded-xl w-full max-w-lg mx-auto text-left shadow-lg border border-white/10" // Padding reduzido em telas pequenas, adicionado w-full
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    {/* Label branca para contraste */}
                    <FormLabel className="text-primary-foreground/90 text-sm sm:text-base">Nome</FormLabel> {/* Label menor em mobile */}
                    <FormControl>
                      {/* Input com fundo customizado para melhor visibilidade */}
                      <Input
                        placeholder="Seu nome"
                        {...field}
                        className="bg-white/5 border-white/20 focus:bg-white/10 focus:border-white/40 placeholder:text-white/50 text-white ring-offset-background focus-visible:ring-primary/50" // Estilo refinado
                      />
                    </FormControl>
                    <FormMessage className="text-red-400 text-xs" /> {/* Mensagem de erro vermelha e menor */}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                     {/* Label branca para contraste */}
                    <FormLabel className="text-primary-foreground/90 text-sm sm:text-base">Mensagem</FormLabel> {/* Label menor em mobile */}
                    <FormControl>
                      {/* Textarea com fundo customizado */}
                      <Textarea
                        placeholder="O que você tem em mente?"
                        className="resize-none bg-white/5 border-white/20 focus:bg-white/10 focus:border-white/40 placeholder:text-white/50 text-white ring-offset-background focus-visible:ring-primary/50" // Estilo refinado
                        rows={4}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400 text-xs" /> {/* Mensagem de erro vermelha e menor */}
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                variant="accent" // Usando variante accent para destaque
                size="lg"
                className="w-full group  sm:text-lg hover:shadow-[0_0_20px_hsl(var(--accent)/0.4)] transition-shadow duration-300" // Tamanho de texto menor no botão em mobile
              >
                Iniciar Conversa no WhatsApp
                <MessageSquare className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default CTA;