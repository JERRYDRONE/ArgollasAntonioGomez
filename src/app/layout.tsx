import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/ThemeProvider";

export const metadata: Metadata = {
  title: "Argollas Antonio Gómez | Argollas Soldadas para Lonas",
  description:
    "Taller de manufactura especializado en argollas de acero soldadas para lonas. Calibre 3/16, galvanizadas. +22 años de experiencia. Menudeo, Medio Mayoreo y Mayoreo.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f4f5" },
    { media: "(prefers-color-scheme: dark)",  color: "#020617" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Previene el flash de tema incorrecto (FOUC) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var p=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(t===null&&p))document.documentElement.classList.add('dark')}catch(e){}})()`,
          }}
        />
      </head>
      <body className="antialiased bg-zinc-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

