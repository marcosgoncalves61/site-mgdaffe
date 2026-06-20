import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MG-DAFFE Mecânicos Automotivos | Oficina Mecânica em São Paulo",
  description:
    "Site institucional da MG-DAFFE Mecânicos Automotivos. Oficina em São Paulo especializada em manutenção, diagnóstico, retífica, freios, câmbio, injeção eletrônica, óleo e fluidos.",
  applicationName: "Site Institucional MG-DAFFE",
  authors: [{ name: "MG-DAFFE Mecânicos Automotivos" }],
  keywords: [
    "MG-DAFFE",
    "oficina mecânica",
    "mecânicos automotivos",
    "oficina em São Paulo",
    "Vila Matilde",
    "retífica de motor",
    "diagnóstico automotivo",
    "injeção eletrônica",
    "freios",
    "câmbio",
    "troca de óleo",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-950 text-slate-50">{children}</body>
    </html>
  );
}