import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@assets/EasyWay_1772155413140.png";

interface NavbarProps {
  lang: "en" | "ar";
  t: any;
  onContactClick?: () => void;
}

const sections = ["about", "services", "partners"];

export default function Navbar({ lang, t, onContactClick }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for background + active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Find which section is currently in view
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const navLinks = [
    { id: "about", label: t.about },
    { id: "services", label: t.services },
    { id: "partners", label: t.partners },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-md"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 transition-transform hover:scale-[1.02]">
              <img
                src={logo}
                alt="Easy Way Logo"
                className="h-12 w-auto object-contain dark:invert-[0.1]"
              />
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="relative text-sm font-medium transition-colors cursor-pointer group"
              >
                <span
                  className={
                    activeSection === link.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }
                >
                  {link.label}
                </span>
                {/* Active underline */}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full"
                  animate={{ width: activeSection === link.id ? "100%" : "0%" }}
                  transition={{ duration: 0.25 }}
                />
              </button>
            ))}
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                className="bg-primary text-white hover:bg-primary/90 shadow-md rounded-full px-6"
                onClick={onContactClick}
              >
                {t.contact}
              </Button>
            </motion.div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileOpen ? "x" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              className={`fixed top-0 ${lang === "ar" ? "left-0" : "right-0"} z-50 h-full w-72 bg-background shadow-2xl border-${lang === "ar" ? "r" : "l"} border-border flex flex-col`}
              initial={{ x: lang === "ar" ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: lang === "ar" ? "-100%" : "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 30 }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <img src={logo} alt="Easy Way" className="h-10 w-auto object-contain" />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg hover:bg-accent transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col p-6 gap-2 flex-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => scrollTo(link.id)}
                    className={`text-left rtl:text-right px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      activeSection === link.id
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-accent text-foreground"
                    }`}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>

              {/* CTA */}
              <div className="p-6 border-t border-border">
                <Button
                  className="w-full bg-primary text-white hover:bg-primary/90 rounded-full h-12"
                  onClick={() => {
                    setMobileOpen(false);
                    onContactClick?.();
                  }}
                >
                  {t.contact}
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}