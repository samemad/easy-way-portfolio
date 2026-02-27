import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Users, Building2, TrendingUp } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

import heroImg from "@/assets/images/hero-bg.jpg";
import aboutImg from "@/assets/images/about-us.jpg";
import logo from "@assets/EasyWay_1772155413140.png";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

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
            className="max-w-3xl"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Established 2022
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Marketing With <span className="text-primary">Purpose</span> & Vision.
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
              We connect exceptional products with the right audience through strategic commercial cooperation and innovative marketing solutions across Yemen.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg text-lg h-14 px-8">
                Discover Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-md text-lg h-14 px-8">
                Partner With Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-3xl transform rotate-3" />
                <img 
                  src={aboutImg} 
                  alt="Team Collaboration" 
                  className="relative rounded-2xl shadow-xl w-full object-cover aspect-square md:aspect-[4/3]"
                />
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Building2 className="text-primary h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-slate-900">50+</p>
                    <p className="text-sm font-medium text-slate-500">Commercial Partners</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">About Easy Way</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Bridging The Gap Between Products & People.
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Founded in 2022, Easy Way was built on the foundation of collaboration and market intelligence. We specialize in marketing high-quality products by working hand-in-hand with leading Yemeni commercial companies.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our approach is simple: understand the local market, build strong corporate relationships, and execute marketing strategies that drive real, measurable growth.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-slate-100 rounded-lg">
                    <Users className="text-slate-700 h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Local Expertise</h4>
                    <p className="text-sm text-slate-500">Deep understanding of the Yemeni market.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-slate-100 rounded-lg">
                    <TrendingUp className="text-slate-700 h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Strategic Growth</h4>
                    <p className="text-sm text-slate-500">Results-driven marketing campaigns.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services/Features Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">What We Do</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-4">Comprehensive Marketing Solutions</h3>
            <p className="text-lg text-slate-600">
              We provide end-to-end marketing services for commercial companies, ensuring your products reach their maximum potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Market Analysis",
                description: "In-depth research and data analysis to identify target demographics and market opportunities."
              },
              {
                icon: Building2,
                title: "Corporate Partnership",
                description: "Facilitating strategic alliances between brands and commercial distributors across Yemen."
              },
              {
                icon: TrendingUp,
                title: "Product Marketing",
                description: "Developing and executing comprehensive campaigns to elevate brand presence and drive sales."
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-primary/5 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl opacity-50" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-24 mx-auto bg-white rounded-2xl p-4 mb-8 shadow-xl rotate-3">
              <img src={logo} alt="Easy Way Logo" className="w-full h-full object-contain -rotate-3" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to grow your market presence?</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
              Join the growing list of commercial companies trusting Easy Way with their product marketing strategy.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg text-lg h-14 px-10 rounded-full">
              Let's Discuss Your Project
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}