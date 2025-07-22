import { Card, CardContent } from "@/components/ui/card";
import { Code, Layout, Lightbulb, Terminal } from "lucide-react";

const About = () => {
  const skills = [
    {
      title: "Frontend Development",
      description: "Creación de interfaces modernas con React, Vue y Angular",
      icon: <Layout className="h-6 w-6 text-accent" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Diseño centrado en el usuario, con atención a la accesibilidad y usabilidad",
      icon: <Lightbulb className="h-6 w-6 text-accent" />,
    },
    {
      title: "Clean Code",
      description:
        "Código limpio, mantenible y escalable utilizando patrones de diseño",
      icon: <Code className="h-6 w-6 text-accent" />,
    },
    {
      title: "Performance",
      description:
        "Optimización del rendimiento para sitios web rápidos y eficientes",
      icon: <Terminal className="h-6 w-6 text-accent" />,
    },
  ];

  return (
    <section id="about" className="py-24 section-padding">
      <div className="container-width">
        <div className="space-y-12">
          <div className="max-w-3xl">
            <h2 className="heading-2 mb-4">
              Sobre <span className="text-accent">mí</span>
            </h2>
            <p className="body-text text-muted-foreground">
              Soy un desarrollador front-end apasionado por crear experiencias
              digitales excepcionales. Mi enfoque combina habilidades técnicas
              sólidas con un ojo para el diseño, permitiéndome construir sitios
              web que no solo se ven bien, sino que también funcionan
              perfectamente.
            </p>
            <p className="body-text text-muted-foreground mt-4">
              Con más de 5 años de experiencia en el desarrollo web, he
              trabajado en proyectos para startups, agencias y empresas. Mi
              objetivo es crear interfaces que sean accesibles, responsivas y
              ofrezcan una excelente experiencia de usuario.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="border border-border transition-smooth hover:border-accent/50 hover:shadow-md"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="p-3 bg-accent/10 rounded-lg inline-block">
                    {skill.icon}
                  </div>
                  <h3 className="heading-3">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
