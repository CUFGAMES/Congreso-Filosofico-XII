"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react"

export default function GaleriaPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  /**
   * CONFIGURACIÓN DE IMÁGENES DE LA GALERÍA
   *
   * INSTRUCCIONES PARA MODIFICAR:
   * 1. Cambia 'image' por la ruta de tu imagen real
   * 2. Cambia 'title' por el nombre/descripción de la foto
   * 3. Agrega más objetos al array para más imágenes
   */
  const galeriaImagenes = [
    // IMAGEN 1
    {
      id: 1,
      title: "Foto grupal del congreso",
      image: "/placeholder.svg?height=400&width=600&text=Foto+Grupal+Congreso",
    },
    // IMAGEN 2
    {
      id: 2,
      title: "Presentación magistral",
      image: "/placeholder.svg?height=400&width=600&text=Presentación+Magistral",
    },
    // IMAGEN 3
    {
      id: 3,
      title: "Estudiantes participantes",
      image: "/placeholder.svg?height=400&width=600&text=Estudiantes+Participantes",
    },
    // IMAGEN 4
    {
      id: 4,
      title: "Auditorio principal",
      image: "/placeholder.svg?height=400&width=600&text=Auditorio+Principal",
    },
    // IMAGEN 5
    {
      id: 5,
      title: "Mesa de ponentes",
      image: "/placeholder.svg?height=400&width=600&text=Mesa+Ponentes",
    },
    // IMAGEN 6
    {
      id: 6,
      title: "Actividad grupal",
      image: "/placeholder.svg?height=400&width=600&text=Actividad+Grupal",
    },
    // IMAGEN 7
    {
      id: 7,
      title: "Conferencia inaugural",
      image: "/placeholder.svg?height=400&width=600&text=Conferencia+Inaugural",
    },
    // IMAGEN 8
    {
      id: 8,
      title: "Estudiantes en debate",
      image: "/placeholder.svg?height=400&width=600&text=Debate+Estudiantes",
    },
    // IMAGEN 9
    {
      id: 9,
      title: "Ceremonia de clausura",
      image: "/placeholder.svg?height=400&width=600&text=Ceremonia+Clausura",
    },
    // IMAGEN 10
    {
      id: 10,
      title: "Exposición de trabajos",
      image: "/placeholder.svg?height=400&width=600&text=Exposición+Trabajos",
    },
    // IMAGEN 11
    {
      id: 11,
      title: "Networking estudiantes",
      image: "/placeholder.svg?height=400&width=600&text=Networking+Estudiantes",
    },
    // IMAGEN 12
    {
      id: 12,
      title: "Premiación final",
      image: "/placeholder.svg?height=400&width=600&text=Premiación+Final",
    },
    //IMAGEN 13
    {
      id: 13,
      title: "RICOOO",
      image: "/placeholder.svg?height=400&width=600&text=Premiación+Final",
    },
    // AGREGAR MÁS IMÁGENES AQUÍ...
  ]

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = galeriaImagenes.findIndex((img) => img.id === selectedImage)
      const nextIndex = (currentIndex + 1) % galeriaImagenes.length
      setSelectedImage(galeriaImagenes[nextIndex].id)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = galeriaImagenes.findIndex((img) => img.id === selectedImage)
      const prevIndex = currentIndex === 0 ? galeriaImagenes.length - 1 : currentIndex - 1
      setSelectedImage(galeriaImagenes[prevIndex].id)
    }
  }

  const selectedImageData = selectedImage ? galeriaImagenes.find((img) => img.id === selectedImage) : null

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Navigation */}
      <div
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage: "url('/philosophy-conference-hall.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Navigation */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <nav className="flex items-center justify-between p-6">
            <Link href="/" className="text-white text-xl font-bold font-[family-name:var(--font-poppins)]">
              Congreso Filosofía
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-white hover:text-gray-300 transition-colors">
                Inicio
              </Link>
              <Link href="/ponencias" className="text-white hover:text-gray-300 transition-colors">
                Ponencias
              </Link>
              <Link href="/galeria" className="text-white font-semibold">
                Galería
              </Link>
              <Link href="/creditos" className="text-white hover:text-gray-300 transition-colors">
                Créditos
              </Link>
            </div>
          </nav>
        </div>

        {/* Page Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-poppins)] mb-4">
              Galería del Congreso
            </h1>
            <p className="text-lg opacity-90">Momentos destacados del XII Congreso de Filosofía</p>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver al inicio
        </Link>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galeriaImagenes.map((imagen) => (
            <div key={imagen.id} className="group">
              <div
                onClick={() => openLightbox(imagen.id)}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={imagen.image || "/placeholder.svg"}
                    alt={imagen.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-2">
                      <div className="text-sm font-medium">Ver imagen</div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-800 text-center">{imagen.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button onClick={closeLightbox} className="absolute top-4 right-4 text-white hover:text-gray-300 z-10">
              <X className="w-8 h-8" />
            </button>

            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image */}
            <img
              src={selectedImageData.image || "/placeholder.svg"}
              alt={selectedImageData.title}
              className="max-w-full max-h-full object-contain"
            />

            {/* Image Title */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
              <h3 className="text-lg font-medium">{selectedImageData.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
