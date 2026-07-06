import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SPEC OIC-Togo | Institution de Microfinance",
    template: "%s | SPEC OIC-Togo",
  },
  description:
    "La SPEC OIC-Togo est une institution de microfinance agréée, active depuis le 17 octobre 2002. Épargne, crédit agricole, transfert d'argent — au service de 64 000 membres dans les régions des Plateaux et Centrale.",
  keywords: ["microfinance", "Togo", "épargne", "crédit agricole", "Notsè", "SPEC OIC", "BCEAO"],
  openGraph: {
    title: "SPEC OIC-Togo | Institution de Microfinance",
    description:
      "64 000 membres, 13 guichets, 24 ans d'inclusion financière au Togo.",
    locale: "fr_TG",
    type: "website",
    siteName: "SPEC OIC-Togo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${outfit.variable} font-sans antialiased bg-background text-foreground flex flex-col min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

