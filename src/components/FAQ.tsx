import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Em quanto tempo meu site fica pronto?",
    answer: "O prazo varia de acordo com o plano escolhido. Sites de Links ficam prontos em até 3 dias úteis, Landing Pages em até 7 dias e Sites Institucionais em até 15 dias úteis.",
  },
  {
    question: "Vocês oferecem suporte após a entrega?",
    answer: "Sim! Todos os nossos planos incluem suporte técnico. Os planos superiores contam com manutenções inclusas no primeiro mês.",
  },
  {
    question: "Posso parcelar no cartão?",
    answer: "Sim! Aceitamos pagamento em até 12x no cartão de crédito (com juros da maquininha), facilitando o investimento no seu projeto digital.",
  },
  {
    question: "O domínio é realmente grátis?",
    answer: "Sim! Incluímos 1 ano de domínio grátis nos planos indicados. Após esse período, você pode renová-lo por valores acessíveis.",
  },
  {
    question: "Posso fazer alterações no site depois de pronto?",
    answer: "Claro! Oferecemos pacotes de ajustes ou você pode solicitar alterações pontuais conforme sua necessidade.",
  },
  {
    question: "Meu site vai funcionar em celulares?",
    answer: "Sim! Todos os sites são desenvolvidos com design responsivo, garantindo perfeita visualização em smartphones, tablets e desktops.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Tudo o que você precisa saber antes de começar
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 hover:border-primary transition-colors"
            >
              <AccordionTrigger className="text-left hover:text-primary text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
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
