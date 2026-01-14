import { Car, Phone } from "lucide-react";
const navLinks = [{
  label: "Начало",
  href: "#home"
}, {
  label: "За нас",
  href: "#about"
}, {
  label: "Как работи",
  href: "#how-it-works"
}, {
  label: "Цени",
  href: "#pricing"
}, {
  label: "Отзиви",
  href: "#testimonials"
}, {
  label: "Контакти",
  href: "#contact"
}, {
  label: "FAQ",
  href: "#faq"
}];
export function Footer() {
  return <footer className="bg-primary text-primary-foreground">
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
            © {new Date().getFullYear()} Lucky Drive. Всички права запазени.
          </p>
          <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-accent transition-colors">Условия за ползване</a>
            <a href="#" className="hover:text-accent transition-colors">Поверителност</a>
            <a href="#" className="hover:text-accent transition-colors">Бисквитки</a>
          </div>
        </div>
      </div>
    </footer>;
}