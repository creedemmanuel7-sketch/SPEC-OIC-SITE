"use client";

import { useState } from "react";
import { Calculator as CalcIcon, PiggyBank, HandCoins, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export function Calculator() {
  const t = useTranslations("Calculator");
  const [mode, setMode] = useState<"credit" | "epargne">("credit");
  const [amount, setAmount] = useState<number>(500000);
  const [duration, setDuration] = useState<number>(12);
  const [interestRate, setInterestRate] = useState<number>(2);

  const monthlyPayment = mode === "credit" 
    ? (amount + (amount * (interestRate / 100) * duration)) / duration 
    : 0;

  const totalSaved = mode === "epargne"
    ? amount * duration
    : 0;

  return (
    <section className="py-24 bg-background dark:bg-spec-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-4 bg-spec-blue/10 rounded-full mb-6 text-spec-blue">
              <CalcIcon className="w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-spec-black dark:text-white">
              {t("sectionTitle")}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              {t("sectionDesc")}
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-spec-dark rounded-3xl p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-gray-100 dark:border-white/5">
            {/* Tabs */}
            <div className="flex p-1 bg-gray-200 dark:bg-spec-black/50 rounded-xl mb-10 w-full max-w-sm mx-auto">
              <button
                onClick={() => setMode("credit")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm transition-all ${mode === "credit" ? "bg-white dark:bg-spec-dark text-spec-blue shadow-md" : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"}`}
              >
                <HandCoins className="w-4 h-4" /> {t("tabCredit")}
              </button>
              <button
                onClick={() => setMode("epargne")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm transition-all ${mode === "epargne" ? "bg-white dark:bg-spec-dark text-spec-blue shadow-md" : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"}`}
              >
                <PiggyBank className="w-4 h-4" /> {t("tabSavings")}
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Controls */}
              <div className="space-y-8">
                <div>
                  <label className="flex justify-between font-semibold text-spec-black dark:text-white mb-4">
                    <span>{mode === "credit" ? t("amountBorrow") : t("monthlyDeposit")}</span>
                    <span className="text-spec-blue">{amount.toLocaleString()} FCFA</span>
                  </label>
                  <input
                    type="range"
                    min={mode === "credit" ? 30000 : 5000}
                    max={mode === "credit" ? 5000000 : 500000}
                    step={5000}
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-spec-blue"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>{mode === "credit" ? "30 000" : "5 000"}</span>
                    <span>{mode === "credit" ? "5 000 000+" : "500 000"}</span>
                  </div>
                </div>

                <div>
                  <label className="flex justify-between font-semibold text-spec-black dark:text-white mb-4">
                    <span>{t("duration")}</span>
                    <span className="text-spec-blue">{duration} {t("months")}</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="36"
                    step="1"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-spec-blue"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>1 {t("months")}</span>
                    <span>36 {t("months")}</span>
                  </div>
                </div>
              </div>

              {/* Result Card */}
              <div className="bg-spec-blue text-white rounded-2xl p-8 flex flex-col justify-center shadow-xl shadow-spec-blue/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <CalcIcon className="w-32 h-32" />
                </div>
                <h3 className="text-blue-100 font-medium mb-2 text-center relative z-10">
                  {mode === "credit" ? t("estimatedMonthly") : t("projectedCapital")}
                </h3>
                <div className="text-4xl md:text-5xl font-extrabold text-center mb-6 drop-shadow-md relative z-10">
                  {mode === "credit" 
                    ? Math.round(monthlyPayment).toLocaleString() 
                    : Math.round(totalSaved).toLocaleString()}
                  <span className="text-xl font-medium ml-2 opacity-80">FCFA</span>
                </div>
                
                <div className="space-y-3 mb-8 text-sm text-blue-50/80 bg-black/10 p-4 rounded-xl relative z-10">
                  {mode === "credit" ? (
                    <>
                      <div className="flex justify-between">
                        <span>{t("estimatedRate")}</span>
                        <span className="font-semibold text-white">{interestRate}% / {t("month")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{t("totalToRepay")}</span>
                        <span className="font-semibold text-white">{Math.round(monthlyPayment * duration).toLocaleString()} FCFA</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-between">
                        <span>{t("totalDeposits")}</span>
                        <span className="font-semibold text-white">{Math.round(totalSaved).toLocaleString()} FCFA</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{t("savingsDuration")}</span>
                        <span className="font-semibold text-white">{duration} {t("month")}</span>
                      </div>
                    </>
                  )}
                </div>

                <Link 
                  href={mode === "credit" ? "/demande-de-pret" : "/contact"}
                  className="w-full py-4 bg-white text-spec-blue rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors group relative z-10"
                >
                  {mode === "credit" ? t("requestCredit") : t("openAccount")}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <p className="text-[10px] text-center mt-4 text-blue-200/60 leading-tight relative z-10">
                  {t("disclaimer")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
