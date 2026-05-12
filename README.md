# Argollas Antonio Gómez — Landing Page

Landing page de una sola página (SPA) para **Argollas Antonio Gómez**, fabricante de argollas soldadas de alta resistencia para lonas. Incluye secciones de presentación, autoridad de marca, tabla de precios por volumen, galería y contacto por WhatsApp.

**Stack:** Next.js 16 · React 19 · Tailwind CSS 4 · TypeScript · lucide-react

---

## Clonar y ejecutar en otro equipo

> **Requisito previo:** tener instalado [Node.js](https://nodejs.org/) (v18 o superior).

```bash
# 1. Clonar el repositorio
git clone https://github.com/JERRYDRONE/ArgollasAntonioGomez.git

# 2. Entrar a la carpeta
cd ArgollasAntonioGomez

# 3. Instalar dependencias (esto genera node_modules localmente)
npm install

# 4. Levantar servidor de desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

> `node_modules/` y `.next/` están excluidos del repositorio mediante `.gitignore`.
> El paso `npm install` los regenera automáticamente en cada equipo.

---

## Hosteo en producción

### Opción A — Vercel (recomendada, gratuita)

1. Crear cuenta en [vercel.com](https://vercel.com) e importar el repositorio desde GitHub.
2. Vercel detecta Next.js automáticamente — sin configuración adicional.
3. Cada push a `main` despliega una nueva versión.

### Opción B — Servidor propio (VPS / Linux)

```bash
# 1. Clonar e instalar dependencias
git clone https://github.com/JERRYDRONE/ArgollasAntonioGomez.git
cd ArgollasAntonioGomez
npm install

# 2. Compilar para producción (genera la carpeta .next/)
npm run build

# 3. Iniciar servidor de producción
npm start
```

El servidor escucha en el puerto `3000` por defecto. Para exponerlo al exterior, configura un reverse proxy (Nginx o Apache) apuntando a `localhost:3000`.

---

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx       # Layout raíz y metadatos SEO
│   ├── page.tsx         # Página principal (ensamble de secciones)
│   └── globals.css      # Estilos globales y variables Tailwind
├── components/
│   ├── Navbar.tsx       # Barra de navegación
│   ├── Hero.tsx         # Sección principal con CTA
│   ├── Authority.tsx    # Propuesta de valor / experiencia
│   ├── Pricing.tsx      # Tarjetas de precios por volumen
│   ├── Gallery.tsx      # Galería de producto
│   └── Footer.tsx       # Pie de página y contacto
└── lib/
    └── whatsapp.ts      # Utilidad para generar enlaces de WhatsApp
```
