import "./globals.css";
import { Cormorant_Garamond, Jost } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata = {
  title: "Ingrid Cuellar | Inversiones Inmobiliarias de Lujo en Santa Cruz",
  description:
    "Asesoría inmobiliaria premium en Santa Cruz de la Sierra. Propiedades exclusivas en Equipetrol y Urubó. +20 años conectando inversionistas con el lujo boliviano.",
  openGraph: {
    title: "Ingrid Cuellar | Inversiones Inmobiliarias de Lujo",
    description:
      "Propiedades exclusivas en las zonas más cotizadas de Santa Cruz. Asesoría personalizada para inversionistas locales e internacionales.",
    type: "website",
    locale: "es_BO",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0E1B2A",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="font-sans text-navy antialiased">{children}</body>
    </html>
  );
}
