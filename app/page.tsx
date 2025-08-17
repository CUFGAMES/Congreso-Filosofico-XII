import Link from "next/link";
import MobileMenu from "@/components/mobile-menu";
import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <header className="relative bg-transparent">
        <nav className="flex items-center justify-between px-5 py-5 relative z-50">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-white font-bold text-2xl font-[family-name:var(--font-poppins)]"
            >
              Congreso Filosofía
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <Link
              href="/"
              className="text-white hover:text-blue-300 transition-colors text-sm font-[family-name:var(--font-poppins)]"
            >
              Inicio
            </Link>
            <Link
              href="/ponencias"
              className="text-white hover:text-blue-300 transition-colors text-sm font-[family-name:var(--font-poppins)]"
            >
              Ponencias
            </Link>
            <Link
              href="/galeria"
              className="text-white hover:text-blue-300 transition-colors text-sm font-[family-name:var(--font-poppins)]"
            >
              Galería
            </Link>
            <Link
              href="/creditos"
              className="text-white hover:text-blue-300 transition-colors text-sm font-[family-name:var(--font-poppins)]"
            >
              Créditos
            </Link>
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </nav>
      </header>

      {/* Hero Section with Background Image */}
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: "url('/philosophy-conference-hall.png')",
          backgroundPosition: "49% 60%",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Navigation positioned absolutely over hero */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <nav className="flex items-center justify-between px-5 py-5">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className="text-white font-bold text-2xl font-[family-name:var(--font-poppins)]"
              >
                Congreso Filosofía
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              <Link
                href="/"
                className="text-white hover:text-blue-300 transition-colors text-sm font-[family-name:var(--font-poppins)]"
              >
                Inicio
              </Link>
              <Link
                href="/ponencias"
                className="text-white hover:text-blue-300 transition-colors text-sm font-[family-name:var(--font-poppins)]"
              >
                Ponencias
              </Link>
              <Link
                href="/galeria"
                className="text-white hover:text-blue-300 transition-colors text-sm font-[family-name:var(--font-poppins)]"
              >
                Galería
              </Link>
              <Link
                href="/creditos"
                className="text-white hover:text-blue-300 transition-colors text-sm font-[family-name:var(--font-poppins)]"
              >
                Créditos
              </Link>
            </div>

            {/* Mobile Menu */}
            <MobileMenu />
          </nav>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1
            id="titulo_principal"
            className="text-4xl md:text-6xl font-bold mb-6 font-[family-name:var(--font-poppins)] leading-tight drop-shadow-lg"
          >
            XII CONGRESO FILOSOFÍA:
            <br />
            RAZONAMIENTO VS
            <br />
            INTELIGENCIA ARTIFICIAL
          </h1>

          <p className="text-lg md:text-xl mb-8 font-[family-name:var(--font-mulish)] font-light max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Encuentra en este lugar el proceso de pensar pensamientos,
            <br />
            el paso a paso de la construcción de nuestras ponencias para el
            <br />
            XII CONGRESO DE FILOSOFÍA 2025 JOSÉ CELESTINO MUTIS
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/ponencias"
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 font-semibold transition-all duration-300 font-[family-name:var(--font-poppins)] text-sm uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              PONENCIAS
            </Link>
            <Link
              href="/creditos"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 font-semibold transition-all duration-300 font-[family-name:var(--font-poppins)] text-sm uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              CRÉDITOS
            </Link>
          </div>
        </div>
      </section>

      {/* ... resto de secciones iguales como las que ya tienes ... */}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-300 text-base">
              © 2025 XII Congreso Filosofía. Created for free using WordPress
              and{" "}
              <Link
                href="https://kubiobuilder.com"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Kubio
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
