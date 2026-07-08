import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function CTA() {
  const t = useTranslations("CTA");
  return (
    <section className="py-24 bg-gray-50 dark:bg-spec-dark/20 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full border-[20px] border-spec-blue/5" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full border-[30px] border-spec-blue/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-background dark:bg-spec-black rounded-3xl p-10 md:p-16 shadow-2xl border border-gray-100 dark:border-white/5 text-center max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-spec-black dark:text-white">
            {t.rich("title", {
              strong: (chunks) => <span className="text-spec-blue">{chunks}</span>
            })}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl">
            {t("desc")}
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-spec-blue text-white rounded-xl font-bold text-lg hover:bg-spec-blue-dark hover:-translate-y-1 transition-all shadow-lg shadow-spec-blue/30 group">
            {t("secondaryBtn")}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
