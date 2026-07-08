"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";

export function Impact() {
  const t = useTranslations("Impact");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const metrics = [
    { value: 100, label: t("metric1"), suffix: "Mds+" },
    { value: 64000, label: t("metric2"), suffix: "+" },
    { value: 13, label: t("metric3"), suffix: "" },
    { value: 85, label: t("metric4"), suffix: "%" },
  ];

  return (
    <section id="impact" className="py-24 bg-spec-blue text-white" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
          <p className="text-blue-100 text-lg">
            {t("desc")}
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 divide-white/20">
          {metrics.map((metric, idx) => (
            <div key={idx} className="text-center p-6 rounded-2xl bg-spec-blue-dark/30 border border-white/10">
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-4xl md:text-6xl font-extrabold tracking-tight tabular-nums">
                  {inView ? (
                    <CountUp end={metric.value} duration={2.5} separator=" " />
                  ) : (
                    "0"
                  )}
                </span>
                <span className="text-xl md:text-2xl font-bold text-blue-200">{metric.suffix}</span>
              </div>
              <p className="font-medium text-blue-100 uppercase tracking-wider text-xs md:text-sm">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
