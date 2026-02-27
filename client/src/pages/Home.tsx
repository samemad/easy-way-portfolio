import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BarChart3, Users, Building2, TrendingUp, Languages, Sun, Moon } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

import heroImg from "@/assets/images/hero-bg.jpg";
import aboutImg from "@/assets/images/about-us.jpg";
import logo from "@assets/EasyWay_1772155413140.png";

const translations = {
  en: {
    nav: { about: "About Us", services: "Services", partners: "Partners", contact: "Contact Us" },
    hero: {
      badge: "Established 2022",
      title: "Marketing With Purpose & Vision.",
      description: "We connect exceptional products with the right audience through strategic commercial cooperation and innovative marketing solutions across Yemen.",
      cta1: "Discover Our Services",
      cta2: "Partner With Us"
    },
    about: {
      label: "About Easy Way",
      title: "Bridging The Gap Between Products & People.",
      p1: "Founded in 2022, Easy Way was built on the foundation of collaboration and market intelligence. We specialize in marketing high-quality products by working hand-in-hand with leading Yemeni commercial companies.",
      p2: "Our approach is simple: understand the local market, build strong corporate relationships, and execute marketing strategies that drive real, measurable growth.",
      stat: "Commercial Partners",
      feat1: "Local Expertise",
      feat1Desc: "Deep understanding of the Yemeni market.",
      feat2: "Strategic Growth",
      feat2Desc: "Results-driven marketing campaigns."
    },
    services: {
      label: "What We Do",
      title: "Comprehensive Marketing Solutions",
      description: "We provide end-to-end marketing services for commercial companies, ensuring your products reach their maximum potential.",
      s1: { title: "Market Analysis", desc: "In-depth research and data analysis to identify target demographics and market opportunities." },
      s2: { title: "Corporate Partnership", desc: "Facilitating strategic alliances between brands and commercial distributors across Yemen." },
      s3: { title: "Product Marketing", desc: "Developing and executing comprehensive campaigns to elevate brand presence and drive sales." }
    },
    cta: {
      title: "Ready to grow your market presence?",
      desc: "Join the growing list of commercial companies trusting Easy Way with their product marketing strategy.",
      button: "Let's Discuss Your Project"
    }
  },
  ar: {
    nav: { about: "من نحن", services: "خدماتنا", partners: "شركاؤنا", contact: "اتصل بنا" },
    hero: {
      badge: "تأسست عام 2022",
      title: "تسويق بهدف ورؤية واضحة.",
      description: "نحن نربط المنتجات الاستثنائية بالجمهور المناسب من خلال التعاون التجاري الاستراتيجي وحلول التسويق المبتكرة في جميع أنحاء اليمن.",
      cta1: "اكتشف خدماتنا",
      cta2: "شريك معنا"
    },
    about: {
      label: "عن إيزي واي",
      title: "جسر التواصل بين المنتجات والناس.",
      p1: "تأسست إيزي واي في عام 2022 على أساس التعاون وذكاء السوق. نحن متخصصون في تسويق المنتجات عالية الجودة من خلال العمل جنباً إلى جنب مع الشركات التجارية اليمنية الرائدة.",
      p2: "نهجنا بسيط: فهم السوق المحلي، وبناء علاقات مؤسسية قوية، وتنفيذ استراتيجيات تسويقية تحقق نمواً حقيقياً وملموساً.",
      stat: "شريك تجاري",
      feat1: "خبرة محلية",
      feat1Desc: "فهم عميق للسوق اليمني.",
      feat2: "نمو استراتيجي",
      feat2Desc: "حملات تسويقية مدفوعة بالنتائج."
    },
    services: {
      label: "ماذا نفعل",
      title: "حلول تسويقية شاملة",
      description: "نقدم خدمات تسويقية متكاملة للشركات التجارية، مما يضمن وصول منتجاتك إلى أقصى إمكاناتها.",
      s1: { title: "تحليل السوق", desc: "بحث متعمق وتحليل بيانات لتحديد الفئات المستهدفة وفرص السوق." },
      s2: { title: "الشراكة المؤسسية", desc: "تسهيل التحالفات الاستراتيجية بين العلامات التجارية والموزعين التجاريين في جميع أنحاء اليمن." },
      s3: { title: "تسويق المنتجات", desc: "تطوير وتنفيذ حملات شاملة لرفع حضور العلامة التجارية وتعزيز المبيعات." }
    },
    cta: {
      title: "جاهز لتعزيز حضورك في السوق؟",
      desc: "انضم إلى قائمة الشركات التجارية المتزايدة التي تثق في إيزي واي لاستراتيجية تسويق منتجاتها.",
      button: "لنناقش مشروعك"
    }
  }
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "ar">("en");
  const { theme, setTheme } = useTheme();
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang(prev => prev === "en" ? "ar" : "en");
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className={`min-h-screen bg-background text-foreground ${lang === 'ar' ? 'font-sans' : ''}`}>
      {/* Floating Controls */}
      <div className="fixed top-24 right-4 z-[60] flex flex-col gap-2">
        <Button 
          variant="secondary" 
          size="icon" 
          onClick={toggleLang}
          className="rounded-full shadow-lg border border-border"
        >
          <Languages className="h-5 w-5" />
        </Button>
        <Button 
          variant="secondary" 
          size="icon" 
          onClick={toggleTheme}
          className="rounded-full shadow-lg border border-border"
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>

      <Navbar lang={lang} t={t.nav} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-900/70 z-10" />
          <img 
            src={heroImg} 
            alt="Business Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-20">
          <motion.div 
            key={lang}
            className="max-w-3xl"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {t.hero.badge}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {t.hero.title.split('Purpose')[0]} 
              <span className="text-primary">{lang === 'en' ? 'Purpose' : 'هدف'}</span> 
              {t.hero.title.split('Purpose')[1] || t.hero.title.split('هدف')[1]}
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg text-lg h-14 px-8">
                {t.hero.cta1}
                <ArrowRight className={`ml-2 h-5 w-5 ${lang === 'ar' ? 'rotate-180 mr-2 ml-0' : ''}`} />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-md text-lg h-14 px-8">
                {t.hero.cta2}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: lang === 'en' ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className={`absolute -inset-4 bg-primary/10 rounded-3xl transform ${lang === 'en' ? 'rotate-3' : '-rotate-3'}`} />
                <img 
                  src={aboutImg} 
                  alt="Team Collaboration" 
                  className="relative rounded-2xl shadow-xl w-full object-cover aspect-square md:aspect-[4/3]"
                />
                
                <div className={`absolute -bottom-6 ${lang === 'en' ? '-right-6' : '-left-6'} bg-card p-6 rounded-xl shadow-xl flex items-center gap-4 border border-border`}>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Building2 className="text-primary h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">50+</p>
                    <p className="text-sm font-medium text-muted-foreground">{t.about.stat}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: lang === 'en' ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">{t.about.label}</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t.about.title}
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {t.about.p1}
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t.about.p2}
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-accent rounded-lg">
                    <Users className="text-foreground h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{t.about.feat1}</h4>
                    <p className="text-sm text-muted-foreground">{t.about.feat1Desc}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-accent rounded-lg">
                    <TrendingUp className="text-foreground h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{t.about.feat2}</h4>
                    <p className="text-sm text-muted-foreground">{t.about.feat2Desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">{t.services.label}</h2>
            <h3 className="text-4xl font-bold text-foreground mb-4">{t.services.title}</h3>
            <p className="text-lg text-muted-foreground">
              {t.services.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: BarChart3, ...t.services.s1 },
              { icon: Building2, ...t.services.s2 },
              { icon: TrendingUp, ...t.services.s3 }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-card p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-xl bg-accent border border-border flex items-center justify-center mb-6 group-hover:bg-primary/5 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{service.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl opacity-50" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className={`w-24 h-24 mx-auto bg-white rounded-2xl p-4 mb-8 shadow-xl ${lang === 'en' ? 'rotate-3' : '-rotate-3'}`}>
              <img src={logo} alt="Easy Way Logo" className={`w-full h-full object-contain ${lang === 'en' ? '-rotate-3' : 'rotate-3'}`} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.cta.title}</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
              {t.cta.desc}
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg text-lg h-14 px-10 rounded-full">
              {t.cta.button}
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}