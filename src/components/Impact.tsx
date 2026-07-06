export function Impact() {
  const metrics = [
    { value: "100", label: "Milliards FCFA de crédits accordés", suffix: "Mds+" },
    { value: "64 000", label: "Membres actifs", suffix: "+" },
    { value: "13", label: "Guichets au Togo", suffix: "" },
    { value: "85", label: "Taux de remboursement", suffix: "%" },
  ];

  return (
    <section id="impact" className="py-24 bg-spec-blue text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Impact depuis 2002</h2>
          <p className="text-blue-100 text-lg">
            Des résultats concrets qui témoignent de notre engagement quotidien pour le développement économique du Togo et l'inclusion financière de nos communautés.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/20">
          {metrics.map((metric, idx) => (
            <div key={idx} className="text-center pt-8 md:pt-0 px-4">
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-5xl md:text-6xl font-extrabold tracking-tight">{metric.value}</span>
                <span className="text-2xl font-bold text-blue-200">{metric.suffix}</span>
              </div>
              <p className="font-medium text-blue-100 uppercase tracking-wider text-sm">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
