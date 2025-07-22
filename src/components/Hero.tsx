import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center section-padding py-20"
    >
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="heading-1">
                Hola, soy{" "}
                <span className="text-accent">Alex Desarrollador</span>
              </h1>
              <p className="body-large text-muted-foreground max-w-lg">
                Desarrollador Front-end especializado en crear experiencias web
                modernas, accesibles y de alto rendimiento con React, TypeScript
                y las últimas tecnologías.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("#projects")}
                className="transition-smooth"
              >
                Ver mis proyectos
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="transition-smooth"
              >
                Contáctame
              </Button>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="transition-smooth">
                <Github size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="transition-smooth">
                <Linkedin size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="transition-smooth">
                <Mail size={20} />
              </Button>
            </div>
          </div>

          <div className="lg:order-last">
            <div className="relative">
              <img
                src={heroIllustration}
                alt="Desarrollador Front-end"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-accent/5 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
