// src/components/FAQ.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Em quanto tempo o meu site fica pronto?",
    answer: "O prazo varia de acordo com o plano escolhido. Sites de Links ficam prontos em até 3 dias úteis, Landing Pages em até 7 dias e Sites Institucionais em até 15 dias úteis.",
  },
  {
    question: "Oferecem suporte após a entrega?",
    answer: "Sim! Todos os nossos planos incluem suporte técnico. Os planos superiores contam com manutenções inclusas no primeiro mês.",
  },
  {
    question: "Posso parcelar no cartão?",
    answer: "Sim! Aceitamos pagamento em até 12x no cartão de crédito (com juros da maquininha), facilitando o investimento no seu projeto digital.",
  },
  {
    question: "O domínio é realmente grátis?",
    answer: "Sim! Incluímos 1 ano de domínio grátis nos planos indicados. Após esse período, pode renová-lo por valores acessíveis.",
  },
  {
    question: "Posso fazer alterações no site depois de pronto?",
    answer: "Claro! Oferecemos pacotes de ajustes ou pode solicitar alterações pontuais conforme a sua necessidade.",
  },
  {
    question: "O meu site vai funcionar em telemóveis?",
    answer: "Sim! Todos os sites são desenvolvidos com design responsivo, garantindo perfeita visualização em smartphones, tablets e desktops.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 px-4 bg-[#050505] relative overflow-hidden">
      {/* LUZES NEON DE FUNDO */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Dúvidas <span className="text-purple-400">Frequentes</span>
          </h2>
          <p className="text-xl text-zinc-400">
            Tudo o que precisa saber antes de começar
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-xl px-6 hover:border-purple-500/40 hover:bg-white/[0.04] transition-all duration-300 data-[state=open]:border-purple-500/50 data-[state=open]:shadow-[0_0_15px_rgba(168,85,247,0.1)] overflow-hidden"
            >
              <AccordionTrigger className="text-left text-white hover:text-purple-400 text-lg font-semibold py-5 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-zinc-400 leading-relaxed text-base pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;