import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Phone, Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

// ─────────────────────────────────────────────────────────────────────────────
// HOW TO SET UP EMAILJS (free — no backend needed):
//
// 1. Go to https://www.emailjs.com and create a free account
// 2. Add an Email Service (Gmail, Outlook, etc.) → copy the Service ID
// 3. Create an Email Template with these variables:
//      {{from_name}}, {{from_email}}, {{company}}, {{message}}
//    → copy the Template ID
// 4. Go to Account → API Keys → copy your Public Key
// 5. Replace the three constants below with your real values
// 6. Run:  npm install @emailjs/browser
// ─────────────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = "service_b45xjy4";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_96gduzn";  // e.g. "template_xyz456"
const EMAILJS_PUBLIC_KEY  = "dKFtNZkVLu4WTgbZ1";   // e.g. "AbCdEfGhIjKlMnOp"

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: "en" | "ar";
}

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

type Status = "idle" | "sending" | "success" | "error";

const content = {
  en: {
    title: "Let's Work Together",
    subtitle: "Fill in the form and our team will get back to you within 24 hours.",
    name: "Full Name",
    email: "Email Address",
    company: "Company Name (optional)",
    message: "Your Message",
    namePlaceholder: "John Doe",
    emailPlaceholder: "john@company.com",
    companyPlaceholder: "Your Company",
    messagePlaceholder: "Tell us about your project...",
    send: "Send Message",
    sending: "Sending...",
    successTitle: "Message Sent! 🎉",
    successDesc: "Thank you for reaching out. We'll get back to you within 24 hours.",
    errorTitle: "Failed to Send",
    errorDesc: "Something went wrong. Please try again or email us directly at info@easyway-ye.com",
    tryAgain: "Try Again",
    close: "Close",
    info: { email: "info@easyway-ye.com", phone: "+967 123 456 789", address: "Sana'a, Yemen" },
  },
  ar: {
    title: "لنعمل معاً",
    subtitle: "املأ النموذج وسيتواصل معك فريقنا خلال 24 ساعة.",
    name: "الاسم الكامل",
    email: "البريد الإلكتروني",
    company: "اسم الشركة (اختياري)",
    message: "رسالتك",
    namePlaceholder: "محمد أحمد",
    emailPlaceholder: "info@company.com",
    companyPlaceholder: "شركتك",
    messagePlaceholder: "أخبرنا عن مشروعك...",
    send: "إرسال الرسالة",
    sending: "جارٍ الإرسال...",
    successTitle: "تم الإرسال! 🎉",
    successDesc: "شكراً لتواصلك معنا. سنرد عليك خلال 24 ساعة.",
    errorTitle: "فشل الإرسال",
    errorDesc: "حدث خطأ ما. يرجى المحاولة مرة أخرى أو مراسلتنا على info@easyway-ye.com",
    tryAgain: "حاول مرة أخرى",
    close: "إغلاق",
    info: { email: "info@easyway-ye.com", phone: "+967 123 456 789", address: "صنعاء، اليمن" },
  },
};

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition text-sm md:text-base";

export default function ContactModal({ isOpen, onClose, lang }: ContactModalProps) {
  const t = content[lang];
  const [form, setForm] = useState<FormState>({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Dynamic import — keeps initial bundle small
      const emailjs = await import("@emailjs/browser");

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          company:    form.company || "N/A",
          message:    form.message,
          reply_to:   form.email,       // so you can reply directly from your inbox
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setForm({ name: "", email: "", company: "", message: "" });
      setStatus("idle");
    }, 400);
  };

  const infoItems = [
    { icon: Mail,   text: t.info.email   },
    { icon: Phone,  text: t.info.phone   },
    { icon: MapPin, text: t.info.address },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Centering wrapper */}
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-3 md:p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-background w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden max-h-[95vh] md:max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* ── Header ── */}
              <div className="relative bg-slate-900 px-6 md:px-8 py-8 md:py-10 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
                <button onClick={handleClose} className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors" aria-label="Close">
                  <X className="h-5 w-5" />
                </button>
                <h2 className="text-2xl md:text-3xl font-bold mb-2 relative">{t.title}</h2>
                <p className="text-slate-300 text-sm md:text-base relative">{t.subtitle}</p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-2 md:gap-4 mt-5 md:mt-6 relative">
                  {infoItems.map(({ icon: Icon, text }, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs md:text-sm text-slate-300">
                      <Icon className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary flex-shrink-0" />
                      {text}
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Body ── */}
              <div className="p-6 md:p-8">
                <AnimatePresence mode="wait">

                  {status === "success" && (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, delay: 0.1 }}>
                        <CheckCircle className="h-16 w-16 md:h-20 md:w-20 text-green-500 mx-auto mb-4 md:mb-6" />
                      </motion.div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{t.successTitle}</h3>
                      <p className="text-muted-foreground mb-8 text-sm md:text-base">{t.successDesc}</p>
                      <Button onClick={handleClose} className="bg-primary text-white rounded-full px-8">{t.close}</Button>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div key="error" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                      <AlertCircle className="h-16 w-16 md:h-20 md:w-20 text-red-500 mx-auto mb-4 md:mb-6" />
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{t.errorTitle}</h3>
                      <p className="text-muted-foreground mb-8 text-sm md:text-base max-w-sm mx-auto">{t.errorDesc}</p>
                      <div className="flex gap-3 justify-center flex-wrap">
                        <Button onClick={() => setStatus("idle")} className="bg-primary text-white rounded-full px-6">{t.tryAgain}</Button>
                        <Button onClick={handleClose} variant="outline" className="rounded-full px-6">{t.close}</Button>
                      </div>
                    </motion.div>
                  )}

                  {(status === "idle" || status === "sending") && (
                    <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">{t.name}</label>
                          <input required value={form.name} onChange={handleChange("name")} placeholder={t.namePlaceholder} className={inputClass} />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">{t.email}</label>
                          <input required type="email" value={form.email} onChange={handleChange("email")} placeholder={t.emailPlaceholder} className={inputClass} />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">{t.company}</label>
                        <input value={form.company} onChange={handleChange("company")} placeholder={t.companyPlaceholder} className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">{t.message}</label>
                        <textarea required rows={4} value={form.message} onChange={handleChange("message")} placeholder={t.messagePlaceholder} className={`${inputClass} resize-none`} />
                      </div>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button type="submit" disabled={status === "sending"} className="w-full bg-primary hover:bg-primary/90 text-white h-11 md:h-12 rounded-full text-sm md:text-base font-medium shadow-lg shadow-primary/25">
                          {status === "sending" ? (
                            <span className="flex items-center gap-2">
                              <motion.span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full inline-block" animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }} />
                              {t.sending}
                            </span>
                          ) : (
                            <span className="flex items-center gap-2">
                              <Send className="h-4 w-4" />
                              {t.send}
                            </span>
                          )}
                        </Button>
                      </motion.div>
                    </motion.form>
                  )}

                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}