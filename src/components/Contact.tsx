import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Clock, Send, Facebook, Instagram, Youtube } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Съобщението е изпратено успешно! Ще се свържем с вас скоро.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Контакти
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Свържете се с нас
          </h2>
          <p className="text-muted-foreground text-lg">
            Имате въпроси? Обадете се или ни пишете - отговаряме бързо!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Sofia Office */}
            <div className="bg-secondary rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground">София</h3>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <a href="tel:+359888123456" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">0888 123 456</span>
                </a>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5" />
                  <span>Денонощно обслужване</span>
                </div>
                <p>бул. "Витоша" 100, София 1000</p>
              </div>
            </div>

            {/* Varna Office */}
            <div className="bg-secondary rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground">Варна</h3>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <a href="tel:+359899654321" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">0899 654 321</span>
                </a>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5" />
                  <span>Денонощно обслужване</span>
                </div>
                <p>ул. "Приморски" 50, Варна 9000</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground">Последвайте ни:</span>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-accent transition-colors group">
                  <Facebook className="w-5 h-5 text-primary-foreground group-hover:text-foreground" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-accent transition-colors group">
                  <Instagram className="w-5 h-5 text-primary-foreground group-hover:text-foreground" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-accent transition-colors group">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary-foreground group-hover:text-foreground fill-current">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-accent transition-colors group">
                  <Youtube className="w-5 h-5 text-primary-foreground group-hover:text-foreground" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-secondary rounded-2xl p-8 border border-border">
            <h3 className="font-display font-bold text-xl text-foreground mb-6">Изпратете съобщение</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Име
                </label>
                <Input
                  id="name"
                  placeholder="Вашето име"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Телефон
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="0888 123 456"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Съобщение
                </label>
                <Textarea
                  id="message"
                  placeholder="Вашето съобщение..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" variant="gold" size="xl" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                Изпрати съобщение
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
