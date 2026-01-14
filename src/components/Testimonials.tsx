import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Георги Петров",
    location: "София, Лозенец",
    rating: 5,
    text: "Страхотна услуга! Шофьорът дойде за 15 минути и ме прибра до дома безопасно. Препоръчвам на всички!",
    avatar: "ГП"
  },
  {
    name: "Мария Иванова",
    location: "София, Младост",
    rating: 5,
    text: "Много професионални и коректни. Ще използвам услугата отново!",
    avatar: "МИ"
  },
  {
    name: "Стефан Димитров",
    location: "София, Витоша",
    rating: 5,
    text: "Перфектно решение след купон с приятели. Нито секунда не се притесних за колата си. Браво!",
    avatar: "СД"
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-4">
            Отзиви
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Какво казват нашите клиенти
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 hover:bg-primary-foreground/10 transition-colors duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-accent mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-semibold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary-foreground/60">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
