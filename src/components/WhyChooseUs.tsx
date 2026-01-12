import { Shield, Clock, Award, Users, MapPin, ThumbsUp } from "lucide-react";
import driverImage from "@/assets/driver-professional.jpg";

const features = [
  {
    icon: Shield,
    title: "Максимална сигурност",
    description: "Всички наши шофьори преминават строга проверка и имат богат опит зад волана.",
  },
  {
    icon: Clock,
    title: "24/7 обслужване",
    description: "Винаги на твое разположение - денем и нощем, всеки ден от седмицата.",
  },
  {
    icon: Award,
    title: "Професионални шофьори",
    description: "Над 10 години опит в сферата на транспорта и безупречна репутация.",
  },
  {
    icon: Users,
    title: "5000+ доволни клиенти",
    description: "Хиляди клиенти ни се доверяват всяка седмица за безопасно прибиране.",
  },
  {
    icon: MapPin,
    title: "София и Варна",
    description: "Покриваме центъра и всички квартали на София и Варна с околностите.",
  },
  {
    icon: ThumbsUp,
    title: "Без регистрация",
    description: "Поръчай бързо и лесно без нужда от създаване на акаунт или регистрация.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={driverImage} 
                alt="Професионален шофьор" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-background rounded-2xl p-6 shadow-2xl border border-border">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-brand-gradient flex items-center justify-center">
                  <Award className="w-7 h-7 text-foreground" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">10+</div>
                  <div className="text-sm text-muted-foreground">години опит</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Защо да изберете нас
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ти пиеш, ние караме!
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Lucky Drive е твоят надежден партньор за безопасно прибиране до дома. 
              Насладете се на вечерта без притеснения - ние ще се погрижим за теб и колата ти.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
