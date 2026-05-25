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

const whatsappFormSchema = z.object({
  name: z.string().min(2, {
    message: "Por favor, insira o seu nome.",
  }),
  message: z.string().min(5, {
    message: "Digite uma breve mensagem (mínimo 5 caracteres).",
  }),
});

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

  function onSubmit(values: z.infer<typeof whatsappFormSchema>) {
    const text = `Olá, meu nome é ${values.name}. Gostaria de falar sobre: ${values.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
    form.reset();
  }

  return (
    <section id="contato" className="py-16 sm:py-20 px-4 bg-[#050505] relative overflow-hidden">
      {/* LUZES NEON DE FUNDO */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-20">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Vamos <span className="text-purple-400">Conversar?</span>
          </h2>
          <p className="text-xl text-zinc-400">
            A nossa equipa está pronta para ajudar a escolher o melhor plano para o seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* COLUNA ESQUERDA: INFORMAÇÕES */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '150ms' }}>
            <Card className="bg-white/[0.02] backdrop-blur-md border-white/5 shadow-2xl hover:border-purple-500/20 transition-colors rounded-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-white">Contactos Diretos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                 <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-purple-500/10 rounded-xl group-hover:bg-purple-500/20 transition-colors border border-purple-500/10">
                    <MessageSquare className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">WhatsApp</p>
                    <p className="text-sm text-zinc-400">(16) 98839-2871</p>
                  </div>
                 </div>
                 
                 <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-purple-500/10 rounded-xl group-hover:bg-purple-500/20 transition-colors border border-purple-500/10">
                    <Mail className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">E-mail</p>
                    <p className="text-sm text-zinc-400 break-all">{EMAIL_ADDRESS}</p>
                  </div>
                 </div>
                 
                 <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-purple-500/10 rounded-xl group-hover:bg-purple-500/20 transition-colors border border-purple-500/10">
                    <Instagram className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Instagram</p>
                    <p className="text-sm text-zinc-400">@{INSTAGRAM_USER}</p>
                  </div>
                 </div>
              </CardContent>
            </Card>

            <Card className="bg-white/[0.02] backdrop-blur-md border-white/5 shadow-2xl hover:border-purple-500/20 transition-colors rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white flex items-center gap-2">
                    <Clock className="h-5 w-5 text-purple-400"/> Horários de Atendimento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-zinc-400 text-sm">
                 <p><span className="font-medium text-white">Segunda a Sexta:</span> 09:00 às 17:00</p>
                 <p><span className="font-medium text-white">Sábado:</span> 08:00 às 12:00</p>
                 <p className="italic pt-2 text-zinc-500">*Domingos e feriados fechado.</p>
              </CardContent>
            </Card>
          </div>

          {/* COLUNA DIREITA: FORMULÁRIO */}
          <Card className="bg-white/[0.02] backdrop-blur-md border-white/5 shadow-2xl animate-fade-in p-6 sm:p-8 rounded-2xl" style={{ animationDelay: '300ms' }}>
             <h3 className="text-2xl font-semibold mb-6 text-white text-center md:text-left">Envie uma Mensagem</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zinc-300">Nome Completo</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="O seu nome"
                            {...field}
                            className="bg-black/40 border-white/10 text-white focus:border-purple-500/50 focus:ring-purple-500/50 placeholder:text-zinc-600 h-12"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zinc-300">Mensagem</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Conte-nos sobre o seu projeto..."
                            className="resize-none bg-black/40 border-white/10 text-white focus:border-purple-500/50 focus:ring-purple-500/50 placeholder:text-zinc-600"
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full group text-base sm:text-lg bg-purple-600 hover:bg-purple-700 text-white border-none shadow-[0_0_20px_-5px_rgba(147,51,234,0.5)] h-12"
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