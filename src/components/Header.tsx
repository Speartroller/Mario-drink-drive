import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Car } from "lucide-react";

const navLinks = [
  { label: "Начало", href: "#home" },
  { label: "За нас", href: "#about" },
  { label: "Как работи", href: "#how-it-works" },
  { label: "Цени", href: "#pricing" },
  { label: "Отзиви", href: "#testimonials" },
  { label: "Контакти", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-brand-gradient flex items-center justify-center">
              <Car className="w-6 h-6 text-foreground" />
            </div>
            <span className="font-display font-bold text-xl text-primary-foreground">
              Lucky<span className="text-accent">Drive</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-lg transition-all duration-200 font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+359888123456" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">0888 123 456</span>
            </a>
            <Button variant="gold" size="lg">
              Поръчай сега
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-primary-foreground/10 animate-slide-up">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-lg transition-all duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-primary-foreground/10 flex flex-col gap-3">
              <a href="tel:+359888123456" className="flex items-center justify-center gap-2 text-primary-foreground/80 py-2">
                <Phone className="w-4 h-4" />
                <span className="font-medium">0888 123 456</span>
              </a>
              <Button variant="gold" size="lg" className="w-full">
                Поръчай сега
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
