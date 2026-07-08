import { MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import MapComponent from "./MapComponent";

const getAgencies = (t: any) => [
  {
    region: t("hq"),
    name: "Notsè",
    district: "Haho",
    guichets: ["Notsè", "Asrama", "Tado", "Carrefour (Nangbeto)"],
    isHQ: true,
    phone: "(+228) 70 44 70 12", // TODO: Remplacer par le vrai numéro
  },
  {
    region: t("agency"),
    name: "Atakpamé",
    district: "Ogou",
    guichets: ["Atakpamé", "Wahala", "Agbélouvé"],
    isHQ: false,
    phone: "(+228) XX XX XX XX", // TODO: Remplacer
  },
  {
    region: t("agency"),
    name: "Kpékplémé",
    district: "Anié",
    guichets: ["Kpékplémé", "Hahomégbé", "Akparè", "Gléi", "Tohoun", `Moréta (${t("underConstruction")})`],
    isHQ: false,
    phone: "(+228) XX XX XX XX", // TODO: Remplacer
  },
];

export function Network() {
  const t = useTranslations("Network");
  const agencies = getAgencies(t);

  return (
    <section id="reseau" className="py-24 bg-background dark:bg-spec-black">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-spec-black dark:text-white">{t("title")}</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {t.rich("desc", {
              strong: (chunks) => <strong className="font-bold text-spec-blue">{chunks}</strong>
            })}
          </p>
        </div>

        <div className="mb-16">
          <MapComponent />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {agencies.map((agency, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 border-2 transition-all hover:shadow-xl ${
                agency.isHQ
                  ? "bg-spec-blue text-white border-spec-blue shadow-lg shadow-spec-blue/20"
                  : "bg-gray-50 dark:bg-spec-dark border-gray-100 dark:border-white/10"
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${agency.isHQ ? "bg-white/20" : "bg-spec-blue/10"}`}>
                  <MapPin className={`w-5 h-5 ${agency.isHQ ? "text-white" : "text-spec-blue"}`} />
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest ${agency.isHQ ? "text-blue-200" : "text-spec-blue"}`}>
                    {agency.region} · {agency.district}
                  </p>
                  <h3 className={`text-xl font-bold ${agency.isHQ ? "text-white" : "text-spec-black dark:text-white"}`}>
                    {agency.name}
                  </h3>
                </div>
              </div>

              <div className={`mb-4 flex items-center gap-2 text-sm font-medium ${agency.isHQ ? "text-white" : "text-gray-700 dark:text-gray-300"}`}>
                <span>📞</span> {agency.phone}
              </div>

              <p className={`text-sm font-semibold uppercase tracking-wider mb-3 ${agency.isHQ ? "text-blue-200" : "text-gray-500"}`}>
                {agency.guichets.length} {t("guichets")}
              </p>
              <ul className="space-y-2">
                {agency.guichets.map((g, i) => (
                  <li key={i} className={`flex items-center gap-2 text-sm ${agency.isHQ ? "text-white/90" : "text-gray-600 dark:text-gray-400"}`}>
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${agency.isHQ ? "bg-white/60" : "bg-spec-blue/50"}`} />
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
