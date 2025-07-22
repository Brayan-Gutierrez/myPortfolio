import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      location: "Madrid, España",
      period: "2021 - Presente",
      description:
        "Lidero el desarrollo de aplicaciones React complejas para clientes enterprise. Implementé arquitecturas escalables que redujeron el tiempo de carga en un 40%.",
      technologies: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "GraphQL",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      location: "Barcelona, España",
      period: "2019 - 2021",
      description:
        "Desarrollé sitios web responsivos y aplicaciones web para diversos clientes. Colaboré estrechamente con diseñadores y backend developers.",
      technologies: ["Vue.js", "JavaScript", "SCSS", "Webpack", "REST APIs"],
    },
    {
      title: "Junior Web Developer",
      company: "StartupXYZ",
      location: "Valencia, España",
      period: "2018 - 2019",
      description:
        "Primeros pasos en el desarrollo web, enfocándome en la implementación de diseños y optimización del rendimiento frontend.",
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
    },
  ];

  const education = [
    {
      title: "Grado en Ingeniería Informática",
      institution: "Universidad Politécnica de Madrid",
      period: "2014 - 2018",
      description: "Especialización en desarrollo de software y sistemas web.",
    },
    {
      title: "Máster en Desarrollo Web",
      institution: "Keepcoding Bootcamp",
      period: "2018",
      description:
        "Bootcamp intensivo en tecnologías web modernas y metodologías ágiles.",
    },
  ];

  const techSkills = [
    "React",
    "TypeScript",
    "JavaScript",
    "Next.js",
    "Vue.js",
    "Angular",
    "Tailwind CSS",
    "SCSS",
    "Node.js",
    "GraphQL",
    "REST APIs",
    "Git",
    "Docker",
    "AWS",
    "Vercel",
    "Figma",
    "Adobe XD",
  ];

  return (
    <section id="experience" className="py-24 section-padding bg-muted/30">
      <div className="container-width">
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="heading-2 mb-4">
              Mi <span className="text-accent">experiencia</span>
            </h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Un recorrido por mi trayectoria profesional y las habilidades que
              he desarrollado
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-8">
            <h3 className="heading-3">Experiencia Profesional</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="border border-border transition-smooth hover:border-accent/50"
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <CardTitle className="heading-3">{exp.title}</CardTitle>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <span className="font-medium">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <MapPin className="h-4 w-4 mr-1" />
                      {exp.location}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <h3 className="heading-3">Formación</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="border border-border transition-smooth hover:border-accent/50"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.title}</CardTitle>
                    <div className="text-muted-foreground">
                      <div className="font-medium">{edu.institution}</div>
                      <div className="text-sm">{edu.period}</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-8">
            <h3 className="heading-3">Habilidades Técnicas</h3>
            <div className="flex flex-wrap gap-3">
              {techSkills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-sm py-2 px-3 hover:bg-accent hover:text-accent-foreground transition-smooth"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
