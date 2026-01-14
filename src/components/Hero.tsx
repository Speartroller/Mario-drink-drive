import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Shield, Clock, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
export function Hero() {
  return <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Luxury car at night" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/95" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6 animate-fade-in">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-medium">Сигурност на първо място</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-slide-up">
            Не карай след алкохол —{" "}
            <span className="text-accent">ние караме вместо теб!</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-slide-up" style={{
          animationDelay: "0.1s"
        }}>
            Поръчай личен шофьор, който ще те закара до дома с твоята кола. 
            Бързо, безопасно и без регистрация.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{
          animationDelay: "0.2s"
        }}>
            <Button variant="hero" size="xl" className="w-full sm:w-auto group">
              Поръчай онлайн
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl" className="w-full sm:w-auto" asChild>
              <a href="tel:+359888123456">
                <Phone className="w-5 h-5" />
                Обади се сега
              </a>
            </Button>
          </div>

          {/* Quick Contact Numbers */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 animate-slide-up" style={{
          animationDelay: "0.3s"
        }}>
            <a href="tel:+359888123456" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="font-medium">София:</span>
              <span>+359 88 217 7318</span>
            </a>
            <a href="tel:+359899654321" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors">
              
              
              
            </a>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-in" style={{
          animationDelay: "0.4s"
        }}>
            {[{
            icon: Shield,
            label: "100% сигурност"
          }, {
            icon: Clock,
            label: "24/7 наличност"
          }, {
            icon: "5000+",
            label: "доволни клиенти"
          }, {
            icon: "10+",
            label: "години опит"
          }].map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-primary-foreground/5 backdrop-blur-sm">
                {typeof item.icon === "string" ? (
                  <span className="text-2xl font-bold text-accent">{item.icon}</span>
                ) : (
                  <item.icon className="w-6 h-6 text-accent" />
                )}
                <span className="text-sm text-primary-foreground/80">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-8 h-12 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-accent rounded-full animate-bounce" />
        </div>
      </div>
    </section>;
}