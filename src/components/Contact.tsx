import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Clock, Send, Facebook, Instagram, Banknote, CreditCard } from "lucide-react";
import { toast } from "sonner";
export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Съобщението е изпратено успешно! Ще се свържем с вас скоро.");
    setFormData({
      name: "",
      phone: "",
      message: ""
    });
  };
  return <section id="contact" className="py-20 md:py-28 bg-background">
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

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Sofia Office */}
            <div className="bg-secondary rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground">София и околности</h3>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <a href="tel:+359882177318" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">+359 88 217 7318</span>
                </a>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5" />
                  <span>Денонощно обслужване 24/7</span>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-secondary rounded-2xl p-6 border border-border">
              <h3 className="font-display font-bold text-lg text-foreground mb-4">Начини на плащане</h3>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border">
                  <Banknote className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium text-foreground">В брой</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border">
                  <CreditCard className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium text-foreground">Банков превод (Revolut)</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-secondary rounded-2xl p-6 border border-border">
              <h3 className="font-display font-bold text-lg text-foreground mb-4">Последвайте ни</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center hover:bg-accent transition-colors group">
                  <Facebook className="w-5 h-5 text-primary-foreground group-hover:text-accent-foreground" />
                </a>
                <a href="#" className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center hover:bg-accent transition-colors group">
                  <Instagram className="w-5 h-5 text-primary-foreground group-hover:text-accent-foreground" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          
        </div>
      </div>
    </section>;
}