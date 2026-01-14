import { Phone, MessageCircle, Clock, MapPin, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function QuickOrder() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="relative bg-primary rounded-3xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-8 p-8 md:p-12 lg:p-16 items-center">
            {/* Left Content */}
            <div className="text-center md:text-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-4">
                Бърза поръчка
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Поръчай шофьор с <span className="text-accent">едно обаждане</span>
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Без апликации, без регистрация. Просто се обади или пиши и ние ще бъдем при теб до 20 минути.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button variant="hero" size="xl" asChild>
                  <a href="tel:+359882177318">
                    <Phone className="w-5 h-5" />
                    Обади се сега
                  </a>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <a href="https://wa.me/359882177318" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Пиши в WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Content - Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <Clock className="w-10 h-10 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-primary-foreground mb-1">24/7</h3>
                <p className="text-sm text-primary-foreground/70">Денонощно</p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <Zap className="w-10 h-10 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-primary-foreground mb-1">20 мин</h3>
                <p className="text-sm text-primary-foreground/70">Време за пристигане</p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <MapPin className="w-10 h-10 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-primary-foreground mb-1">София</h3>
                <p className="text-sm text-primary-foreground/70">И околности</p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <Phone className="w-10 h-10 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-primary-foreground mb-1">Лесно</h3>
                <p className="text-sm text-primary-foreground/70">Само 1 обаждане</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
