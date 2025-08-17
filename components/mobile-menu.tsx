"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white z-50 relative">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsOpen(false)} />}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gray-800 transform transition-transform duration-300 z-50 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 pt-20">
          <div className="mb-8">
            <Link href="/" className="text-white font-bold text-xl">
              Congreso Filosofía
            </Link>
          </div>

          <nav className="space-y-6">
            <Link
              href="/"
              className="block text-white text-lg hover:text-blue-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/ponencias"
              className="block text-white text-lg hover:text-blue-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Ponencias
            </Link>
            <Link
              href="/galeria"
              className="block text-white text-lg hover:text-blue-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Galería
            </Link>
            <Link
              href="/creditos"
              className="block text-white text-lg hover:text-blue-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Créditos
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}
