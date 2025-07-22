import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Plataforma de comercio electrónico completa con carrito de compras, pagos integrados y panel de administración. Desarrollada con React y integración con APIs de pago.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      technologies: [
        "React",
        "TypeScript",
        "Stripe API",
        "Tailwind CSS",
        "Node.js",
      ],
      demoUrl: "#",
      repoUrl: "#",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real, arrastra y suelta, y notificaciones push.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
      technologies: ["Vue.js", "Firebase", "PWA", "SCSS"],
      demoUrl: "#",
      repoUrl: "#",
      featured: true,
    },
    {
      title: "Portfolio Website",
      description:
        "Sitio web portfolio responsivo para un diseñador gráfico, con galería interactiva y formulario de contacto integrado.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d",
      technologies: ["Next.js", "Framer Motion", "Sanity CMS"],
      demoUrl: "#",
      repoUrl: "#",
      featured: false,
    },
    {
      title: "Weather Dashboard",
      description:
        "Dashboard del clima con pronósticos detallados, mapas interactivos y alertas meteorológicas personalizables.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
      technologies: ["React", "Chart.js", "OpenWeather API", "Mapbox"],
      demoUrl: "#",
      repoUrl: "#",
      featured: false,
    },
    {
      title: "Blog Platform",
      description:
        "Plataforma de blog con editor de contenido avanzado, sistema de comentarios y optimización SEO automática.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      technologies: ["Gatsby", "GraphQL", "Netlify CMS", "MDX"],
      demoUrl: "#",
      repoUrl: "#",
      featured: false,
    },
    {
      title: "Crypto Tracker",
      description:
        "Aplicación para seguimiento de criptomonedas con gráficos en tiempo real, alertas de precio y portfolio personalizado.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
      technologies: ["React", "Redux", "CoinGecko API", "Recharts"],
      demoUrl: "#",
      repoUrl: "#",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-24 section-padding">
      <div className="container-width">
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="heading-2 mb-4">
              Mis <span className="text-accent">proyectos</span>
            </h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Una selección de proyectos que demuestran mis habilidades técnicas
              y creatividad
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-8">
            <h3 className="heading-3">Proyectos Destacados</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border border-border transition-smooth hover:border-accent/50 hover:shadow-lg group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="heading-3">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3 pt-2">
                      <Button size="sm" className="transition-smooth">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver Demo
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="transition-smooth"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div className="space-y-8">
            <h3 className="heading-3">Otros Proyectos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border border-border transition-smooth hover:border-accent/50 hover:shadow-md group"
                >
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2 pt-1">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 text-xs"
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 text-xs"
                      >
                        <Github className="h-3 w-3 mr-1" />
                        Código
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
