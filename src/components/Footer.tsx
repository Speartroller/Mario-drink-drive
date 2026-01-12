import { Car, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

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
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-brand-gradient flex items-center justify-center">
                <Car className="w-6 h-6 text-foreground" />
              </div>
              <span className="font-display font-bold text-xl">
                Lucky<span className="text-accent">Drive</span>
              </span>
            </a>
            <p className="text-primary-foreground/70 mb-6">
              Не карай след алкохол! Поръчай личен шофьор, който ще те закара безопасно до дома с твоята кола.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors group">
                <Facebook className="w-5 h-5 group-hover:text-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors group">
                <Instagram className="w-5 h-5 group-hover:text-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors group">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current group-hover:text-foreground">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors group">
                <Youtube className="w-5 h-5 group-hover:text-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Бързи връзки</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Услуги</h3>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>Личен шофьор</li>
              <li>Корпоративни събития</li>
              <li>Сватби и празници</li>
              <li>Трансфери</li>
              <li>VIP обслужване</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Контакти</h3>
            <div className="space-y-3">
              <a href="tel:+359888123456" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                <Phone className="w-5 h-5" />
                <span>София: 0888 123 456</span>
              </a>
              <a href="tel:+359899654321" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                <Phone className="w-5 h-5" />
                <span>Варна: 0899 654 321</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>бул. "Витоша" 100, София 1000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Lucky Drive. Всички права запазени.
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
