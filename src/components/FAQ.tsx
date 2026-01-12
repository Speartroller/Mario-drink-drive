import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Как работи услугата Lucky Drive?",
    answer: "Много просто! Обаждате се или поръчвате онлайн, наш професионален шофьор пристига при вас, сяда зад волана на вашата кола и ви закарва безопасно до дома. Вие се отпускате, ние караме!",
  },
  {
    question: "Колко струва услугата?",
    answer: "Цената зависи от разстоянието и времето. Започваме от 15 лв. за кратки разстояния в градските райони. Можете да получите точна цена преди поръчката чрез нашето приложение или по телефона.",
  },
  {
    question: "Необходима ли е регистрация?",
    answer: "Не! Можете да поръчате шофьор без никаква регистрация. Просто се обадете или използвайте приложението - бързо и лесно.",
  },
  {
    question: "В кои градове работите?",
    answer: "Понастоящем обслужваме София и Варна с техните околности. Планираме разширение в Пловдив, Бургас и други големи градове скоро.",
  },
  {
    question: "Колко бързо пристига шофьорът?",
    answer: "В повечето случаи шофьорът пристига в рамките на 10-15 минути. При натоварени часове може да е малко по-дълго, но винаги ви информираме за очакваното време.",
  },
  {
    question: "Какви автомобили могат да се возят?",
    answer: "Нашите шофьори са обучени да карат всякакви леки автомобили - от малки градски коли до по-големи SUV модели. Ако имате специфично превозно средство, моля свържете се с нас предварително.",
  },
  {
    question: "Застраховани ли сте?",
    answer: "Да, всички наши услуги са напълно застраховани. Освен това всички шофьори преминават строга проверка на миналото и имат богат опит в шофирането.",
  },
  {
    question: "Как мога да платя?",
    answer: "Приемаме плащане в брой, с банкова карта или чрез мобилни приложения за плащане. Изберете най-удобния за вас начин!",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Често задавани въпроси
          </h2>
          <p className="text-muted-foreground text-lg">
            Отговори на най-често задаваните въпроси за услугата Lucky Drive.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-xl border border-border px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
