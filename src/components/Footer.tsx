import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "#",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      href: "#",
      label: "LinkedIn",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:alex@desarrollador.com",
      label: "Email",
    },
  ];

  const navLinks = [
    { href: "#hero", label: "Inicio" },
    { href: "#about", label: "Sobre mí" },
    { href: "#experience", label: "Experiencia" },
    { href: "#projects", label: "Proyectos" },
    { href: "#contact", label: "Contacto" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 section-padding border-t border-border">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="text-lg font-bold">
              <span className="text-accent">{"<"}</span>
              Dev Portfolio
              <span className="text-accent">{" />"}</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Creando experiencias web excepcionales con código limpio y diseño
              moderno.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-muted-foreground hover:text-accent transition-smooth text-sm"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-2">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                asChild
                className="transition-smooth hover:text-accent"
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center">
            © {currentYear} Alex Desarrollador. Hecho con{" "}
            <Heart className="h-4 w-4 mx-1 text-red-500" fill="currentColor" />y
            mucho código.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
