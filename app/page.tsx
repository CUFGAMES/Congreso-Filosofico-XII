import Link from "next/link"
import MobileMenu from "@/components/mobile-menu"
import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <header className="relative bg-transparent">
        <nav className="flex items-center justify-between px-5 py-5 relative z-50">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-2xl font-[family-name:var(--font-poppins)]">
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
              <Link href="/" className="text-white font-bold text-2xl font-[family-name:var(--font-poppins)]">
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-[family-name:var(--font-poppins)] leading-tight drop-shadow-lg" id="titulo_principal">
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

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center mb-16">
            <div className="flex items-center space-x-6 text-sm font-[family-name:var(--font-poppins)]">
              <span className="text-blue-700 bg-gradient-to-r from-blue-100 to-blue-200 px-6 py-3 rounded-full flex items-center gap-2 shadow-md border border-blue-200 font-medium">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-16 0 9 9 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                PONENCIAS
              </span>
              <span className="text-purple-700 bg-gradient-to-r from-purple-100 to-purple-200 px-6 py-3 rounded-full flex items-center gap-2 shadow-md border border-purple-200 font-medium">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                RAZONAMIENTO
              </span>
              <span className="text-green-700 bg-gradient-to-r from-green-100 to-green-200 px-6 py-3 rounded-full flex items-center gap-2 shadow-md border border-green-200 font-medium">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                INTELIGENCIA ARTIFICIAL
              </span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="lg:w-1/2">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WT1nat6yCGm0dUgn5ZgYG1wZ80y0qt.png"
                alt="XII Congreso Filosofía Poster"
                className="w-full max-w-md mx-auto shadow-lg rounded-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-bold mb-6 font-[family-name:var(--font-poppins)] text-gray-800">
                Estuvimos en:
              </h3>
              <p className="text-gray-700 font-[family-name:var(--font-mulish)] leading-relaxed text-lg">
                Compartimos nuestra experiencia en el XII Congreso de Filosofía, donde exploramos las intersecciones
                entre el razonamiento humano y la inteligencia artificial en el contexto filosófico contemporáneo.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-20">
            <div className="lg:w-1/2">
              <img
                src="/vanguardia-philosophy-congress.png"
                alt="Artículo en Vanguardia"
                className="w-full shadow-lg rounded-lg"
              />
            </div>
            <div className="lg:w-1/2 text-center lg:text-right">
              <h3 className="text-2xl font-semibold mb-6 font-[family-name:var(--font-poppins)] text-gray-800">
                Aquí podrás encontrar nuestro artículo en Vanguardia
              </h3>
              <p className="text-gray-600 font-[family-name:var(--font-mulish)] text-lg">
                Lee más sobre nuestra participación y los temas tratados en el congreso.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="lg:w-1/2">
              <img
                src="/philosophy-congress-students.png"
                alt="Participación en el Congreso"
                className="w-full shadow-lg rounded-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-bold mb-6 font-[family-name:var(--font-poppins)] text-gray-800">
                PARTICIPACIÓN
              </h3>
              <p className="text-gray-700 font-[family-name:var(--font-mulish)] leading-relaxed mb-4 text-lg">
                Participamos con entusiasmo en el XII Congreso de Filosofía, presentando nuestras investigaciones sobre
                la relación entre el razonamiento tradicional y las nuevas formas de inteligencia artificial.
              </p>
              <p className="text-gray-600 font-[family-name:var(--font-mulish)] text-base">
                Nuestro equipo de estudiantes y docentes contribuyó activamente a los debates y discusiones académicas
                del evento.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/placeholder-dygjh.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center">
          <div className="bg-white/95 backdrop-blur-md max-w-lg mx-auto p-10 rounded-xl shadow-2xl border border-white/20">
            <h3 className="text-3xl font-bold mb-6 font-[family-name:var(--font-poppins)] text-gray-900">Créditos</h3>
            <p className="text-gray-700 font-[family-name:var(--font-mulish)] mb-8 text-lg leading-relaxed">
              Conoce más sobre los estudiantes, docentes y colaboradores que hicieron posible este proyecto académico.
            </p>
            <Link
              href="/creditos"
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 font-[family-name:var(--font-poppins)] text-sm shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Ver Créditos
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-16 font-[family-name:var(--font-poppins)] text-gray-800">
            Realizado por:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 shadow-xl text-center rounded-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <img
                src="/female-philosophy-researcher.png"
                alt="María Inés Castellanos"
                className="w-36 h-36 mx-auto mb-6 object-cover rounded-full border-4 border-pink-100"
              />
              <h4 className="font-bold text-xl font-[family-name:var(--font-poppins)] text-gray-800 mb-2">
                María Inés Castellanos
              </h4>
              <p className="text-gray-600 font-[family-name:var(--font-mulish)] text-base">Estudiante de Filosofía</p>
            </div>
            <div className="bg-white p-8 shadow-xl text-center rounded-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <img
                src="/nulak-logo.png"
                alt="NULAK"
                className="w-36 h-36 mx-auto mb-6 object-cover rounded-full border-4 border-blue-100"
              />
              <h4 className="font-bold text-xl font-[family-name:var(--font-poppins)] text-gray-800 mb-2">ODYSSEY</h4>
              <p className="text-gray-600 font-[family-name:var(--font-mulish)] text-base">Promoción 2025</p>
            </div>
            <div className="bg-white p-8 shadow-xl text-center rounded-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <img
                src="/jose-celestino-mutis-academic.png"
                alt="Dr. José Celestino Mutis"
                className="w-36 h-36 mx-auto mb-6 object-cover rounded-full border-4 border-green-100"
              />
              <h4 className="font-bold text-xl font-[family-name:var(--font-poppins)] text-gray-800 mb-2">
                Colegio Jose Celestino Mutis
              </h4>
              <p className="text-gray-600 font-[family-name:var(--font-mulish)] text-base">Institución Educativa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-300 text-base">
              © 2025 XII Congreso Filosofía. Created for free using WordPress and{" "}
              <Link
                href="https://kubiobuilder.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Kubio
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
