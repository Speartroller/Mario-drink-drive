import { Phone, UserCheck, Car, Home } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Обади се или поръчай онлайн",
    description: "Свържи се с нас по телефона",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Шофьор идва при теб",
    description: "Професионален шофьор пристига на посоченото от теб място в рамките на минути.",
  },
  {
    icon: Car,
    step: "03",
    title: "Качваш се в своята кола",
    description: "Нашият шофьор сяда зад волана на твоята кола, а ти се отпускаш на пътническата седалка.",
  },
  {
    icon: Home,
    step: "04",
    title: "Прибираш се безопасно вкъщи",
    description: "Пристигаш до дома си в комфорт и безопасност. Ти и колата ти сте в сигурни ръце!",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Как работи
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Лесно като 1-2-3-4
          </h2>
          <p className="text-muted-foreground text-lg">
            Поръчай личен шофьор за минути и се прибери безопасно до дома с твоята кола.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              {/* Connector Line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-accent/50 to-accent/20" />
              )}
              
              <div className="relative bg-background rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border border-border">
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-brand-gradient flex items-center justify-center text-foreground font-bold text-sm shadow-lg">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-5">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                {/* Content */}
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
