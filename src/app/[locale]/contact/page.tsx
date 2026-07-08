"use client";

import { MapPin, Phone, Mail, Clock, Send, ChevronRight, CheckCircle2 } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const t = useTranslations("ContactPage");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xwvdzbqw", {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
      }
    } catch (error) {
      alert("Erreur réseau. Veuillez vérifier votre connexion.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-spec-dark pt-12 pb-24">
      <div className="container mx-auto px-6">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-spec-blue transition-colors">{t("home")}</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-spec-black dark:text-white font-medium">{t("contact")}</span>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-spec-black dark:text-white mb-6">{t("title")}</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {t("desc")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-2 bg-background dark:bg-spec-black rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-white/5 relative overflow-hidden">

            {isSuccess ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-background dark:bg-spec-black z-10 p-8 text-center animate-in fade-in duration-300">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-bold text-spec-black dark:text-white mb-4">{t("successTitle")}</h2>
                <p className="text-gray-600 dark:text-gray-400">{t("successDesc")}</p>
              </div>
            ) : null}

            <h2 className="text-2xl font-bold text-spec-black dark:text-white mb-8">{t("formTitle")}</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">{t("name")}</label>
                  <input required type="text" name="name" id="name" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-spec-dark/50 focus:ring-2 focus:ring-spec-blue focus:border-transparent outline-none transition-all dark:text-white" placeholder="Jean Dupont" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">{t("phone")}</label>
                  <input required type="tel" name="phone" id="phone" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-spec-dark/50 focus:ring-2 focus:ring-spec-blue focus:border-transparent outline-none transition-all dark:text-white" placeholder="(+228) 00 00 00 00" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">{t("email")}</label>
                <input required type="email" name="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-spec-dark/50 focus:ring-2 focus:ring-spec-blue focus:border-transparent outline-none transition-all dark:text-white" placeholder="creedemmanuel7@gmail.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">{t("subject")}</label>
                <select id="subject" name="subject" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-spec-dark/50 focus:ring-2 focus:ring-spec-blue focus:border-transparent outline-none transition-all dark:text-white">
                  <option value="credit">{t("subjectCredit")}</option>
                  <option value="epargne">{t("subjectSavings")}</option>
                  <option value="partenariat">{t("subjectPartnership")}</option>
                  <option value="autre">{t("subjectOther")}</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">{t("message")}</label>
                <textarea required id="message" name="message" rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-spec-dark/50 focus:ring-2 focus:ring-spec-blue focus:border-transparent outline-none transition-all resize-none dark:text-white" placeholder={t("messagePlaceholder")}></textarea>
              </div>

              <button disabled={isSubmitting} type="submit" className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-spec-blue text-white font-bold text-lg hover:bg-blue-700 transition-colors shadow-xl shadow-spec-blue/30 disabled:opacity-70">
                <Send className={`w-5 h-5 ${isSubmitting ? 'animate-bounce' : ''}`} />
                {isSubmitting ? t("sending") : t("sendBtn")}
              </button>
            </form>
          </div>

          {/* Info Section */}
          <div className="space-y-8">
            <div className="bg-spec-black text-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-6">{t("infoTitle")}</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-spec-blue" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">{t("hq")}</p>
                    <p className="text-gray-400 text-sm" dangerouslySetInnerHTML={{__html: t.raw("hqAddress")}}></p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-spec-blue" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">{t("phoneLabel")}</p>
                    <p className="text-gray-400 text-sm">(+228) 70 44 70 12</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-spec-blue" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">{t("emailLabel")}</p>
                    <p className="text-gray-400 text-sm">creedemmanuel7@gmail.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-spec-blue" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">{t("hoursLabel")}</p>
                    <p className="text-gray-400 text-sm" dangerouslySetInnerHTML={{__html: t.raw("hoursDesc")}}></p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map */}
            <div className="bg-background dark:bg-spec-black rounded-3xl p-4 shadow-xl border border-gray-100 dark:border-white/5 h-64 overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15833.568266497214!2d1.1578335!3d6.9538335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1026d30026dd372b%3A0xc3b8ab9f8c62c3e4!2sNots%C3%A8%2C%20Togo!5e0!3m2!1sfr!2sfr!4v1717540234567!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '1rem' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
