import { MapPin, Clock, Zap, Banknote, CreditCard } from "lucide-react";

const pricingData = [
  { destination: "Перник", priceBGN: 100, priceEUR: 51.13 },
  { destination: "Елин Пелин", priceBGN: 80, priceEUR: 40.90 },
  { destination: "Равно Поле", priceBGN: 75, priceEUR: 38.35 },
  { destination: "Банкя Център", priceBGN: 75, priceEUR: 38.35 },
  { destination: "Кремиковци", priceBGN: 70, priceEUR: 35.79 },
  { destination: "Казичене", priceBGN: 70, priceEUR: 35.79 },
  { destination: "Лозен", priceBGN: 70, priceEUR: 35.79 },
  { destination: "Долни Богров", priceBGN: 70, priceEUR: 35.79 },
  { destination: "Горни Богров", priceBGN: 75, priceEUR: 38.35 },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent font-medium text-sm mb-4">
            Цени
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Фиксирани цени за <span className="text-accent">дестинации</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Прозрачни цени без скрити такси. Цената е фиксирана независимо от трафика.
          </p>
        </div>

        {/* Base Rate Card */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="bg-primary rounded-2xl p-6 md:p-8 text-primary-foreground shadow-xl">
            <h3 className="font-display font-bold text-xl md:text-2xl mb-6 text-center">Базова тарифа</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-primary-foreground/10 rounded-xl p-5 text-center">
                <p className="text-primary-foreground/70 text-sm mb-2">Начална такса</p>
                <p className="text-3xl font-bold">20<span className="text-lg font-medium ml-1">лв</span></p>
                <p className="text-sm text-primary-foreground/60 mt-1">≈ 10.23 €</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-xl p-5 text-center">
                <p className="text-primary-foreground/70 text-sm mb-2">На километър</p>
                <p className="text-3xl font-bold">3<span className="text-lg font-medium ml-1">лв/км</span></p>
                <p className="text-sm text-primary-foreground/60 mt-1">≈ 1.53 €/км</p>
              </div>
            </div>
          </div>
        </div>

        {/* 24/7 and 20 min badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground shadow-lg">
            <Clock className="w-5 h-5 text-accent" />
            <span className="font-semibold">Работим 24/7</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground shadow-lg">
            <Zap className="w-5 h-5 text-accent" />
            <span className="font-semibold">До 20 минути на адреса</span>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border shadow-sm">
            <Banknote className="w-5 h-5 text-accent" />
            <span className="font-medium text-foreground">В брой</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border shadow-sm">
            <CreditCard className="w-5 h-5 text-accent" />
            <span className="font-medium text-foreground">Банков превод (Revolut)</span>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {pricingData.map((item, index) => (
            <div
              key={item.destination}
              className="group relative bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-accent/50 overflow-hidden"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full" />
              
              <div className="relative z-10">
                {/* Destination */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground group-hover:text-accent transition-colors">
                    {item.destination}
                  </h3>
                </div>

                {/* Prices */}
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-3xl font-bold text-foreground">
                      {item.priceBGN}<span className="text-lg font-medium text-muted-foreground ml-1">лв</span>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      ≈ {item.priceEUR.toFixed(2)} €
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                    от София
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground mt-8 text-sm">
          * Цените са ориентировъчни и могат да варират. Свържете се с нас за точна оферта.
        </p>
      </div>
    </section>
  );
}
