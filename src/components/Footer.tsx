import { Phone, Clock, Zap } from "lucide-react";

const navLinks = [
  { label: "Начало", href: "#home" },
  { label: "За нас", href: "#about" },
  { label: "Как работи", href: "#how-it-works" },
  { label: "Цени", href: "#pricing" },
  { label: "Отзиви", href: "#testimonials" },
  { label: "Контакти", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-12 md:py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-brand-gradient flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-foreground" fill="currentColor">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.04 3H5.81l1.04-3zM19 17H5v-5h14v5z"/>
                  <circle cx="7.5" cy="14.5" r="1.5"/>
                  <circle cx="16.5" cy="14.5" r="1.5"/>
                </svg>
              </div>
              <span className="font-display font-bold text-lg">
                karai<span className="text-accent">utre</span>.com
              </span>
            </a>
            <p className="text-primary-foreground/70 mb-6">
              Не карай след алкохол! Поръчай личен шофьор, който ще те закара безопасно до дома с твоята кола.
            </p>
            <div className="flex gap-3">
              
              
              
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Бързи връзки</h3>
            <ul className="space-y-2">
              {navLinks.map(link => <li key={link.href}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Услуги</h3>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>Личен шофьор</li>
              
              
              
              
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Контакти</h3>
            <div className="space-y-3">
              <a href="tel:+359888123456" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                <Phone className="w-5 h-5" />
                <span>София: +359 88 217 7318</span>
              </a>
              <a href="tel:+359899654321" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                
                
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                
                
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} karaiutre.com. Всички права запазени.
          </p>
          <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-accent transition-colors">Условия за ползване</a>
            <a href="#" className="hover:text-accent transition-colors">Поверителност</a>
            <a href="#" className="hover:text-accent transition-colors">Бисквитки</a>
          </div>
        </div>
      </div>
    </footer>
  );
}