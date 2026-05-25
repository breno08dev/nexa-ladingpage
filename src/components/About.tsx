// src/components/About.tsx
import { GraduationCap, Briefcase, Code2, Sparkles, User } from "lucide-react"; 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import suaFotoImportada from "@/assets/perfil.png";

const About = () => {
  const skills = [
    "React", "TypeScript", "Tailwind CSS", "JavaScript", 
    "Node.js", "Supabase", "UI/UX Design", "Clean Code",
    "MySQL", "Git", "Next.js", "Vite", "Agile Methodologies"
  ];

  return (
   
    <section id="sobre" className="py-20 px-4 bg-[#050505] relative overflow-hidden">
      
      {/* LUZES NEON ROXAS DISCRETAS */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center mb-16">
          
          <div className="md:col-span-7 space-y-6 animate-fade-in">
            {/* Tag superior discreta */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-sm font-medium border border-purple-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              Quem está por trás do código
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white">
              Transformando Ideias em{" "}
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Presença Digital
              </span>
            </h2>
            
            <p className="text-lg text-zinc-400 leading-relaxed">
              Sou <span className="font-semibold text-white">Breno</span>, desenvolvedor front-end e fundador da CONECT NEW. Minha missão é ajudar empresas e empreendedores a transformarem suas visões em produtos digitais reais, projetando ecossistemas rápidos, modernos e focados em gerar conversões reais.
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-purple-400" /> Tech Stack & Especialidades
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-3 py-1 text-sm font-medium border border-white/5 hover:border-purple-500/40 transition-colors bg-white/5 text-zinc-300 backdrop-blur-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center animate-scale-in">
            <div className="relative group w-full max-w-[350px]">
             
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-[2rem] blur-md opacity-20 group-hover:opacity-40 transition duration-700 pointer-events-none" />
              
              <div className="relative bg-zinc-950 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] flex flex-col justify-between transition-all duration-500 group-hover:border-purple-500/30">
                
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 z-10 pointer-events-none" />
                
                <img src={suaFotoImportada} alt="Breno" className="absolute inset-0 object-cover w-full h-full z-0 transition-transform duration-700 group-hover:scale-105" /> 


                <div className="absolute top-4 left-4 z-20 backdrop-blur-md bg-black/60 border border-white/10 px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5 transform -rotate-1 group-hover:rotate-0 transition-transform duration-350">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  <span className="text-xs font-bold text-white tracking-wide uppercase">Breno Robin</span>
                </div>

                <div className="absolute bottom-4 right-4 z-20 backdrop-blur-md bg-black/60 border border-white/10 px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-2 transform rotate-1 group-hover:rotate-0 transition-transform duration-350">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </div>
                  <span className="text-xs font-semibold text-white">Disponível para Projetos</span>
                </div>
                
              </div>
            </div>
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* CARDS COM FUNDO ESCURO E BORDAS SUTIS */}
          <Card className="bg-white/[0.02] backdrop-blur-md border-white/5 hover:border-purple-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/10 group rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center gap-3 text-white">
                <div className="p-2 bg-purple-500/10 rounded-xl group-hover:bg-purple-500/20 transition-colors duration-300 border border-purple-500/10">
                  <GraduationCap className="h-5 w-5 text-purple-400" />
                </div>
                Formação Acadêmica
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Formado em Análise e Desenvolvimento de Sistemas pela Universidade Moura Lacerda em Ribeirão Preto/SP. Durante os anos de graduação, consolidei uma base sólida focada em desenvolvimento front-end completo, metodologias ágeis de gestão de projetos, engenharia de software e design de interfaces inovadoras.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/[0.02] backdrop-blur-md border-white/5 hover:border-purple-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/10 group rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center gap-3 text-white">
                <div className="p-2 bg-purple-500/10 rounded-xl group-hover:bg-purple-500/20 transition-colors duration-300 border border-purple-500/10">
                  <Briefcase className="h-5 w-5 text-purple-400" />
                </div>
                Jornada Profissional
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Com larga bagagem prática na estruturação de landing pages de alta conversão, micro-SaaS e ferramentas de gestão sob medida, sou focado em desenvolver sistemas rápidos e arquiteturas escaláveis, integrando boas práticas de desenvolvimento a estratégias digitais que trazem lucros aos clientes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;