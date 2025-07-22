import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "¡Mensaje enviado!",
        description: "Gracias por contactarme. Te responderé lo antes posible.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-accent" />,
      title: "Email",
      value: "br.desarrollador@gmail.com",
      href: "mailto:br.desarrollador@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-accent" />,
      title: "Teléfono",
      value: "+34 600 123 456",
      href: "tel:+34600123456",
    },
    {
      icon: <MapPin className="h-5 w-5 text-accent" />,
      title: "Ubicación",
      value: "Madrid, España",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 section-padding bg-muted/30">
      <div className="container-width">
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="heading-2 mb-4">
              Trabajemos <span className="text-accent">juntos</span>
            </h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? Me encantaría saber más sobre tu
              idea y cómo puedo ayudarte a hacerla realidad.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="heading-3">Información de contacto</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-medium">{info.title}</div>
                      <a
                        href={info.href}
                        className="text-muted-foreground hover:text-accent transition-smooth"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <h4 className="font-semibold mb-3">
                  ¿Por qué trabajar conmigo?
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Comunicación clara y constante</li>
                  <li>• Entrega en tiempo y forma</li>
                  <li>• Código limpio y documentado</li>
                  <li>• Soporte post-entrega</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle className="heading-3">
                    Envíame un mensaje
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nombre *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Tu nombre"
                          required
                          className="transition-smooth focus:border-accent"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="tu@email.com"
                          required
                          className="transition-smooth focus:border-accent"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Asunto *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="¿De qué quieres hablar?"
                        required
                        className="transition-smooth focus:border-accent"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mensaje *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Cuéntame sobre tu proyecto..."
                        rows={6}
                        required
                        className="transition-smooth focus:border-accent resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto transition-smooth"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Enviar mensaje
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
