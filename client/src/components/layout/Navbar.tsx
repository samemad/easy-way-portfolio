import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import logo from "@assets/EasyWay_1772155413140.png";

interface NavbarProps {
  lang: "en" | "ar";
  t: any;
}

export default function Navbar({ lang, t }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm transition-all">
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 transition-transform hover:scale-[1.02]">
            <img src={logo} alt="Easy Way Logo" className="h-12 w-auto object-contain dark:invert-[0.1]" />
          </a>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">{t.about}</a>
          <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">{t.services}</a>
          <a href="#partners" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">{t.partners}</a>
          <Button className="bg-primary text-white hover:bg-primary/90 shadow-md">
            {t.contact}
          </Button>
        </div>
      </div>
    </nav>
  );
}