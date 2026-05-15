"use client";

import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/lib/ThemeProvider";

const navLinks = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#precios", label: "Precios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-slate-900 dark:bg-slate-950 border-b border-slate-700 dark:border-slate-800 shadow-lg animate-slide-down">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-600 rounded flex items-center justify-center text-xs text-slate-300 font-bold transition-transform duration-200 hover:scale-105">
            LOGO
          </div>
          <span className="text-white font-bold tracking-tight text-lg leading-tight">
            Argollas
            <br />
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">
              Antonio Gómez
            </span>
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-300 hover:text-amber-400 transition-colors duration-200 text-sm font-medium tracking-wide uppercase relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full rounded-full" />
            </Link>
          ))}
        </nav>

        {/* Right: theme toggle + mobile burger */}
        <div className="flex items-center gap-3">
          {/* ── Theme toggle button ── */}
          <button
            type="button"
            onClick={toggle}
            className="relative w-10 h-10 rounded-full bg-slate-700 hover:bg-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center justify-center transition-colors duration-300 shadow-inner"
            aria-label="Cambiar tema"
          >
            {/* Sun — visible en modo claro */}
            <Sun
              size={17}
              className={`absolute text-amber-400 transition-all duration-300 ${
                theme === "light"
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 rotate-90 scale-50"
              }`}
            />
            {/* Moon — visible en modo oscuro */}
            <Moon
              size={17}
              className={`absolute text-slate-300 transition-all duration-300 ${
                theme === "dark"
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 -rotate-90 scale-50"
              }`}
            />
          </button>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden text-slate-300 hover:text-white transition-colors p-2 -mr-2 touch-manipulation"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
          >
            <span
              className={`block transition-transform duration-300 ${
                open ? "rotate-90" : "rotate-0"
              }`}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu — animación slide */}
      <div
        className={`md:hidden bg-slate-800 dark:bg-slate-900 border-t border-slate-700 overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 pb-4 pt-2">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block py-3 text-slate-300 hover:text-amber-400 transition-all duration-200 text-sm font-medium tracking-wide uppercase border-b border-slate-700 last:border-0 touch-manipulation ${
                open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

