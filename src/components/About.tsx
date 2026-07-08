import { CheckCircle2, TrendingUp, Users, ExternalLink, Milestone, Target } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations("About");
  return (
    <section id="about" className="py-24 bg-background dark:bg-spec-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          {/* Text Column History */}
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-spec-blue/10 text-spec-blue border border-spec-blue/20 text-sm font-semibold tracking-wide uppercase">
              Notre Histoire
            </div>
            <h2 className="text-4xl font-bold text-spec-black dark:text-white">{t("title")}</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              {t("desc1")}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              {t.rich("desc2", {
                strong: (chunks) => <span className="font-bold text-spec-blue">{chunks}</span>
              })}
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="border-l-4 border-spec-blue pl-4">
                <div className="flex items-center gap-2 text-xl font-bold text-spec-black dark:text-white mb-1">
                  <Milestone className="w-5 h-5 text-spec-blue" />
                  {t("list1")}
                </div>
              </div>
              <div className="border-l-4 border-spec-blue pl-4">
                <div className="flex items-center gap-2 text-xl font-bold text-spec-black dark:text-white mb-1">
                  <Target className="w-5 h-5 text-spec-blue" />
                  {t("list2")}
                </div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="flex-1 relative w-full lg:w-auto mt-10 lg:mt-0">
            <div className="relative min-h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/team_meeting.png" 
                alt="SPEC OIC-Togo Équipe" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-spec-blue/10 dark:bg-spec-blue/5 border border-spec-blue/20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

