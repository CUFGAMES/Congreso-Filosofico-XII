"use client"

import { useState } from "react"
import Link from "next/link"
import MobileMenu from "@/components/mobile-menu"

export default function PonenciasPage() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  /**
   * ========================================
   * CONFIGURACIÓN INDIVIDUAL DE PONENCIAS
   * ========================================
   *
   * INSTRUCCIONES PARA MODIFICAR:
   * 1. Cada ponencia tiene su propia línea con número específico
   * 2. Cambia 'image' por la ruta de tu imagen real
   * 3. Cambia 'redirectUrl' por el enlace al que quieres redirigir
   * 4. Modifica 'studentName' con el nombre del estudiante
   * 5. Cambia 'title' con el título de la ponencia
   */

  const imagenesConfig = {
    "11-1": [
      // PONENCIA 1
      {
        id: 1,
        studentName: "Arturo Alexander Carreño Carreño",
        title: "Título de la ponencia 1",
        image: "https://e.plataformaintegra.net/jcmutis/img/fotos/mat/4086_81_11.jpeg", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://drive.google.com/drive/folders/1-0BB55R1hbk_-gR79h7z-fSOJZPI1XEr", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 2
      {
        id: 2,
        studentName: "Estudiante 2",
        title: "Título de la ponencia 2",
        image: "/ponencia-11-1-02.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 3
      {
        id: 3,
        studentName: "Estudiante 3",
        title: "Título de la ponencia 3",
        image: "/ponencia-11-1-03.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 4
      {
        id: 4,
        studentName: "Estudiante 4",
        title: "Título de la ponencia 4",
        image: "/ponencia-11-1-04.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 5
      {
        id: 5,
        studentName: "Estudiante 5",
        title: "Título de la ponencia 5",
        image: "/ponencia-11-1-05.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 6
      {
        id: 6,
        studentName: "Estudiante 6",
        title: "Título de la ponencia 6",
        image: "/ponencia-11-1-06.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 7
      {
        id: 7,
        studentName: "Estudiante 7",
        title: "Título de la ponencia 7",
        image: "/ponencia-11-1-07.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 8
      {
        id: 8,
        studentName: "Estudiante 8",
        title: "Título de la ponencia 8",
        image: "/ponencia-11-1-08.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 9
      {
        id: 9,
        studentName: "Estudiante 9",
        title: "Título de la ponencia 9",
        image: "/ponencia-11-1-09.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 10
      {
        id: 10,
        studentName: "Estudiante 10",
        title: "Título de la ponencia 10",
        image: "/ponencia-11-1-10.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 11
      {
        id: 11,
        studentName: "Estudiante 11",
        title: "Título de la ponencia 11",
        image: "/ponencia-11-1-11.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 12
      {
        id: 12,
        studentName: "Estudiante 12",
        title: "Título de la ponencia 12",
        image: "/ponencia-11-1-12.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 13
      {
        id: 13,
        studentName: "Estudiante 13",
        title: "Título de la ponencia 13",
        image: "/ponencia-11-1-13.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 14
      {
        id: 14,
        studentName: "Estudiante 14",
        title: "Título de la ponencia 14",
        image: "/ponencia-11-1-14.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 15
      {
        id: 15,
        studentName: "Estudiante 15",
        title: "Título de la ponencia 15",
        image: "/ponencia-11-1-15.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 16
      {
        id: 16,
        studentName: "Estudiante 16",
        title: "Título de la ponencia 16",
        image: "/ponencia-11-1-16.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 17
      {
        id: 17,
        studentName: "Estudiante 17",
        title: "Título de la ponencia 17",
        image: "/ponencia-11-1-17.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 18
      {
        id: 18,
        studentName: "Estudiante 18",
        title: "Título de la ponencia 18",
        image: "/ponencia-11-1-18.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 19
      {
        id: 19,
        studentName: "Estudiante 19",
        title: "Título de la ponencia 19",
        image: "/ponencia-11-1-19.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 20
      {
        id: 20,
        studentName: "Estudiante 20",
        title: "Título de la ponencia 20",
        image: "/ponencia-11-1-20.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 21
      {
        id: 21,
        studentName: "Estudiante 21",
        title: "Título de la ponencia 21",
        image: "/ponencia-11-1-21.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 22
      {
        id: 22,
        studentName: "Estudiante 22",
        title: "Título de la ponencia 22",
        image: "/ponencia-11-1-22.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 23
      {
        id: 23,
        studentName: "Estudiante 23",
        title: "Título de la ponencia 23",
        image: "/ponencia-11-1-23.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 24
      {
        id: 24,
        studentName: "Estudiante 24",
        title: "Título de la ponencia 24",
        image: "/ponencia-11-1-24.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 25
      {
        id: 25,
        studentName: "Estudiante 25",
        title: "Título de la ponencia 25",
        image: "/ponencia-11-1-25.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 26
      {
        id: 26,
        studentName: "Estudiante 26",
        title: "Título de la ponencia 26",
        image: "/ponencia-11-1-26.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 27
      {
        id: 27,
        studentName: "Estudiante 27",
        title: "Título de la ponencia 27",
        image: "/ponencia-11-1-27.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 28
      {
        id: 28,
        studentName: "Estudiante 28",
        title: "Título de la ponencia 28",
        image: "/ponencia-11-1-28.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 29
      {
        id: 29,
        studentName: "Estudiante 29",
        title: "Título de la ponencia 29",
        image: "/ponencia-11-1-29.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 30
      {
        id: 30,
        studentName: "Estudiante 30",
        title: "Título de la ponencia 30",
        image: "/ponencia-11-1-30.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 31
      {
        id: 31,
        studentName: "Estudiante 31",
        title: "Título de la ponencia 31",
        image: "/ponencia-11-1-31.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 32
      {
        id: 32,
        studentName: "Estudiante 32",
        title: "Título de la ponencia 32",
        image: "/ponencia-11-1-32.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
    ],

    "11-2": [
      // PONENCIA 1
      {
        id: 1,
        studentName: "Estudiante 1",
        title: "Título de la ponencia 1",
        image: "/ponencia-11-2-01.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 2
      {
        id: 2,
        studentName: "Estudiante 2",
        title: "Título de la ponencia 2",
        image: "/ponencia-11-2-02.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 3
      {
        id: 3,
        studentName: "Estudiante 3",
        title: "Título de la ponencia 3",
        image: "/ponencia-11-2-03.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 4
      {
        id: 4,
        studentName: "Estudiante 4",
        title: "Título de la ponencia 4",
        image: "/ponencia-11-2-04.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 5
      {
        id: 5,
        studentName: "Estudiante 5",
        title: "Título de la ponencia 5",
        image: "/ponencia-11-2-05.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 6
      {
        id: 6,
        studentName: "Estudiante 6",
        title: "Título de la ponencia 6",
        image: "/ponencia-11-2-06.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 7
      {
        id: 7,
        studentName: "Estudiante 7",
        title: "Título de la ponencia 7",
        image: "/ponencia-11-2-07.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 8
      {
        id: 8,
        studentName: "Estudiante 8",
        title: "Título de la ponencia 8",
        image: "/ponencia-11-2-08.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 9
      {
        id: 9,
        studentName: "Estudiante 9",
        title: "Título de la ponencia 9",
        image: "/ponencia-11-2-09.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 10
      {
        id: 10,
        studentName: "Estudiante 10",
        title: "Título de la ponencia 10",
        image: "/ponencia-11-2-10.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 11
      {
        id: 11,
        studentName: "Estudiante 11",
        title: "Título de la ponencia 11",
        image: "/ponencia-11-2-11.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 12
      {
        id: 12,
        studentName: "Estudiante 12",
        title: "Título de la ponencia 12",
        image: "/ponencia-11-2-12.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 13
      {
        id: 13,
        studentName: "Estudiante 13",
        title: "Título de la ponencia 13",
        image: "/ponencia-11-2-13.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 14
      {
        id: 14,
        studentName: "Estudiante 14",
        title: "Título de la ponencia 14",
        image: "/ponencia-11-2-14.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 15
      {
        id: 15,
        studentName: "Estudiante 15",
        title: "Título de la ponencia 15",
        image: "/ponencia-11-2-15.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 16
      {
        id: 16,
        studentName: "Estudiante 16",
        title: "Título de la ponencia 16",
        image: "/ponencia-11-2-16.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 17
      {
        id: 17,
        studentName: "Estudiante 17",
        title: "Título de la ponencia 17",
        image: "/ponencia-11-2-17.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 18
      {
        id: 18,
        studentName: "Estudiante 18",
        title: "Título de la ponencia 18",
        image: "/ponencia-11-2-18.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 19
      {
        id: 19,
        studentName: "Estudiante 19",
        title: "Título de la ponencia 19",
        image: "/ponencia-11-2-19.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 20
      {
        id: 20,
        studentName: "Estudiante 20",
        title: "Título de la ponencia 20",
        image: "/ponencia-11-2-20.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 21
      {
        id: 21,
        studentName: "Estudiante 21",
        title: "Título de la ponencia 21",
        image: "/ponencia-11-2-21.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 22
      {
        id: 22,
        studentName: "Estudiante 22",
        title: "Título de la ponencia 22",
        image: "/ponencia-11-2-22.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 23
      {
        id: 23,
        studentName: "Estudiante 23",
        title: "Título de la ponencia 23",
        image: "/ponencia-11-2-23.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 24
      {
        id: 24,
        studentName: "Estudiante 24",
        title: "Título de la ponencia 24",
        image: "/ponencia-11-2-24.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 25
      {
        id: 25,
        studentName: "Estudiante 25",
        title: "Título de la ponencia 25",
        image: "/ponencia-11-2-25.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 26
      {
        id: 26,
        studentName: "Estudiante 26",
        title: "Título de la ponencia 26",
        image: "/ponencia-11-2-26.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 27
      {
        id: 27,
        studentName: "Estudiante 27",
        title: "Título de la ponencia 27",
        image: "/ponencia-11-2-27.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 28
      {
        id: 28,
        studentName: "Estudiante 28",
        title: "Título de la ponencia 28",
        image: "/ponencia-11-2-28.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 29
      {
        id: 29,
        studentName: "Estudiante 29",
        title: "Título de la ponencia 29",
        image: "/ponencia-11-2-29.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 30
      {
        id: 30,
        studentName: "Estudiante 30",
        title: "Título de la ponencia 30",
        image: "/ponencia-11-2-30.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
    ],

    "11-3": [
      // PONENCIA 1
      {
        id: 1,
        studentName: "Estudiante 1",
        title: "Título de la ponencia 1",
        image: "/ponencia-11-3-01.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 2
      {
        id: 2,
        studentName: "Estudiante 2",
        title: "Título de la ponencia 2",
        image: "/ponencia-11-3-02.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 3
      {
        id: 3,
        studentName: "Estudiante 3",
        title: "Título de la ponencia 3",
        image: "/ponencia-11-3-03.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 4
      {
        id: 4,
        studentName: "Estudiante 4",
        title: "Título de la ponencia 4",
        image: "/ponencia-11-3-04.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 5
      {
        id: 5,
        studentName: "Estudiante 5",
        title: "Título de la ponencia 5",
        image: "/ponencia-11-3-05.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 6
      {
        id: 6,
        studentName: "Estudiante 6",
        title: "Título de la ponencia 6",
        image: "/ponencia-11-3-06.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 7
      {
        id: 7,
        studentName: "Estudiante 7",
        title: "Título de la ponencia 7",
        image: "/ponencia-11-3-07.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 8
      {
        id: 8,
        studentName: "Estudiante 8",
        title: "Título de la ponencia 8",
        image: "/ponencia-11-3-08.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 9
      {
        id: 9,
        studentName: "Estudiante 9",
        title: "Título de la ponencia 9",
        image: "/ponencia-11-3-09.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 10
      {
        id: 10,
        studentName: "Estudiante 10",
        title: "Título de la ponencia 10",
        image: "/ponencia-11-3-10.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 11
      {
        id: 11,
        studentName: "Estudiante 11",
        title: "Título de la ponencia 11",
        image: "/ponencia-11-3-11.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 12
      {
        id: 12,
        studentName: "Estudiante 12",
        title: "Título de la ponencia 12",
        image: "/ponencia-11-3-12.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 13
      {
        id: 13,
        studentName: "Estudiante 13",
        title: "Título de la ponencia 13",
        image: "/ponencia-11-3-13.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 14
      {
        id: 14,
        studentName: "Estudiante 14",
        title: "Título de la ponencia 14",
        image: "/ponencia-11-3-14.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 15
      {
        id: 15,
        studentName: "Estudiante 15",
        title: "Título de la ponencia 15",
        image: "/ponencia-11-3-15.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 16
      {
        id: 16,
        studentName: "Estudiante 16",
        title: "Título de la ponencia 16",
        image: "/ponencia-11-3-16.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 17
      {
        id: 17,
        studentName: "Estudiante 17",
        title: "Título de la ponencia 17",
        image: "/ponencia-11-3-17.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 18
      {
        id: 18,
        studentName: "Estudiante 18",
        title: "Título de la ponencia 18",
        image: "/ponencia-11-3-18.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 19
      {
        id: 19,
        studentName: "Estudiante 19",
        title: "Título de la ponencia 19",
        image: "/ponencia-11-3-19.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 20
      {
        id: 20,
        studentName: "Estudiante 20",
        title: "Título de la ponencia 20",
        image: "/ponencia-11-3-20.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 21
      {
        id: 21,
        studentName: "Estudiante 21",
        title: "Título de la ponencia 21",
        image: "/ponencia-11-3-21.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 22
      {
        id: 22,
        studentName: "Estudiante 22",
        title: "Título de la ponencia 22",
        image: "/ponencia-11-3-22.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 23
      {
        id: 23,
        studentName: "Estudiante 23",
        title: "Título de la ponencia 23",
        image: "/ponencia-11-3-23.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 24
      {
        id: 24,
        studentName: "Estudiante 24",
        title: "Título de la ponencia 24",
        image: "/ponencia-11-3-24.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 25
      {
        id: 25,
        studentName: "Estudiante 25",
        title: "Título de la ponencia 25",
        image: "/ponencia-11-3-25.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 26
      {
        id: 26,
        studentName: "Estudiante 26",
        title: "Título de la ponencia 26",
        image: "/ponencia-11-3-26.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 27
      {
        id: 27,
        studentName: "Estudiante 27",
        title: "Título de la ponencia 27",
        image: "/ponencia-11-3-27.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 28
      {
        id: 28,
        studentName: "Estudiante 28",
        title: "Título de la ponencia 28",
        image: "/ponencia-11-3-28.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 29
      {
        id: 29,
        studentName: "Estudiante 29",
        title: "Título de la ponencia 29",
        image: "/ponencia-11-3-29.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 30
      {
        id: 30,
        studentName: "Estudiante 30",
        title: "Título de la ponencia 30",
        image: "/ponencia-11-3-30.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 31
      {
        id: 31,
        studentName: "Estudiante 31",
        title: "Título de la ponencia 31",
        image: "/ponencia-11-3-31.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 32
      {
        id: 32,
        studentName: "Estudiante 32",
        title: "Título de la ponencia 32",
        image: "/ponencia-11-3-32.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 33
      {
        id: 33,
        studentName: "Estudiante 33",
        title: "Título de la ponencia 33",
        image: "/ponencia-11-3-33.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
    ],

    invitados: [
      // PONENCIA 1
      {
        id: 1,
        studentName: "Invitado 1",
        title: "Título de la ponencia 1",
        image: "/invitado-01.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 2
      {
        id: 2,
        studentName: "Invitado 2",
        title: "Título de la ponencia 2",
        image: "/invitado-02.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 3
      {
        id: 3,
        studentName: "Invitado 3",
        title: "Título de la ponencia 3",
        image: "/invitado-03.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 4
      {
        id: 4,
        studentName: "Invitado 4",
        title: "Título de la ponencia 4",
        image: "/invitado-04.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 5
      {
        id: 5,
        studentName: "Invitado 5",
        title: "Título de la ponencia 5",
        image: "/invitado-05.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 6
      {
        id: 6,
        studentName: "Invitado 6",
        title: "Título de la ponencia 6",
        image: "/invitado-06.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 7
      {
        id: 7,
        studentName: "Invitado 7",
        title: "Título de la ponencia 7",
        image: "/invitado-07.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 8
      {
        id: 8,
        studentName: "Invitado 8",
        title: "Título de la ponencia 8",
        image: "/invitado-08.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 9
      {
        id: 9,
        studentName: "Invitado 9",
        title: "Título de la ponencia 9",
        image: "/invitado-09.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 10
      {
        id: 10,
        studentName: "Invitado 10",
        title: "Título de la ponencia 10",
        image: "/invitado-10.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 11
      {
        id: 11,
        studentName: "Invitado 11",
        title: "Título de la ponencia 11",
        image: "/invitado-11.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 12
      {
        id: 12,
        studentName: "Invitado 12",
        title: "Título de la ponencia 12",
        image: "/invitado-12.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 13
      {
        id: 13,
        studentName: "Invitado 13",
        title: "Título de la ponencia 13",
        image: "/invitado-13.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 14
      {
        id: 14,
        studentName: "Invitado 14",
        title: "Título de la ponencia 14",
        image: "/invitado-14.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 15
      {
        id: 15,
        studentName: "Invitado 15",
        title: "Título de la ponencia 15",
        image: "/invitado-15.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 16
      {
        id: 16,
        studentName: "Invitado 16",
        title: "Título de la ponencia 16",
        image: "/invitado-16.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 17
      {
        id: 17,
        studentName: "Invitado 17",
        title: "Título de la ponencia 17",
        image: "/invitado-17.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 18
      {
        id: 18,
        studentName: "Invitado 18",
        title: "Título de la ponencia 18",
        image: "/invitado-18.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 19
      {
        id: 19,
        studentName: "Invitado 19",
        title: "Título de la ponencia 19",
        image: "/invitado-19.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 20
      {
        id: 20,
        studentName: "Invitado 20",
        title: "Título de la ponencia 20",
        image: "/invitado-20.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 21
      {
        id: 21,
        studentName: "Invitado 21",
        title: "Título de la ponencia 21",
        image: "/invitado-21.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 22
      {
        id: 22,
        studentName: "Invitado 22",
        title: "Título de la ponencia 22",
        image: "/invitado-22.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 23
      {
        id: 23,
        studentName: "Invitado 23",
        title: "Título de la ponencia 23",
        image: "/invitado-23.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 24
      {
        id: 24,
        studentName: "Invitado 24",
        title: "Título de la ponencia 24",
        image: "/invitado-24.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 25
      {
        id: 25,
        studentName: "Invitado 25",
        title: "Título de la ponencia 25",
        image: "/invitado-25.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 26
      {
        id: 26,
        studentName: "Invitado 26",
        title: "Título de la ponencia 26",
        image: "/invitado-26.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 27
      {
        id: 27,
        studentName: "Invitado 27",
        title: "Título de la ponencia 27",
        image: "/invitado-27.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 28
      {
        id: 28,
        studentName: "Invitado 28",
        title: "Título de la ponencia 28",
        image: "/invitado-28.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 29
      {
        id: 29,
        studentName: "Invitado 29",
        title: "Título de la ponencia 29",
        image: "/invitado-29.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
      // PONENCIA 30
      {
        id: 30,
        studentName: "Invitado 30",
        title: "Título de la ponencia 30",
        image: "/invitado-30.png", // ← CAMBIA ESTA IMAGEN
        redirectUrl: "https://google.com", // ← CAMBIA ESTE ENLACE
      },
    ],
  }

  const getCurrentImages = () => {
    return selectedOption ? imagenesConfig[selectedOption as keyof typeof imagenesConfig] || [] : []
  }

  const handleImageClick = (redirectUrl: string) => {
    window.open(redirectUrl, "_blank")
  }

  return (
    <div className="min-h-screen">
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
              className="text-white hover:text-blue-300 transition-colors text-sm font-[family-name:var(--font-poppins)] border-b border-white"
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

      {!selectedOption ? (
        // Fullscreen centered selection
        <section
          className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{
            backgroundImage: "url('/philosophy-conference-hall.png')",
            backgroundPosition: "49% 60%",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Centered Selection Options */}
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 font-[family-name:var(--font-prompt)]">Ponencias</h1>
            <p className="text-lg mb-12 font-[family-name:var(--font-mulish)]">
              Selecciona una categoría para ver las ponencias
            </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto px-6">
                {[
                  { id: "11-1", title: "11 - 1", description: "Primera categoría (32 ponencias)", count: 32, image: "/foto-categoria-11-1.png" },
                  { id: "11-2", title: "11 - 2", description: "Segunda categoría (30 ponencias)", count: 30, image: "/foto-categoria-11-2.png" },
                  { id: "11-3", title: "11 - 3", description: "Tercera categoría (33 ponencias)", count: 33, image: "/foto-categoria-11-3.png" },
                  { id: "invitados", title: "INVITADOS", description: "Ponencias especiales (30 ponencias)", count: 30, image: "/foto-categoria-invitados.png" },
                ].map((option) => (
                  <div
                    key={option.id}
                    onClick={() => setSelectedOption(option.id)}
                    className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden cursor-pointer hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20"
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={option.image}
                        alt={option.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                        <div className="p-4 text-white">
                          <h3 className="text-xl font-bold font-[family-name:var(--font-prompt)]">{option.title}</h3>
                          <p className="text-sm opacity-90 font-[family-name:var(--font-mulish)]">{option.description}</p>
                          <span className="inline-block bg-white/20 px-2 py-1 rounded-full text-xs mt-2">
                            {option.count} ponencias
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          </div>
        </section>
      ) : (
        // Gallery view with normal layout
        <div className="pt-20">
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-prompt)]">
                  Ponencias
                </h1>
                <p className="text-lg text-gray-600 font-[family-name:var(--font-mulish)]">
                  Categoría: {selectedOption.toUpperCase()} ({getCurrentImages().length} ponencias)
                </p>
              </div>

              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={() => setSelectedOption(null)}
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors font-[family-name:var(--font-mulish)]"
                >
                  ← Volver a categorías
                </button>
                <h2 className="text-2xl font-bold text-gray-900 font-[family-name:var(--font-prompt)]">
                  Categoría: {selectedOption.toUpperCase()}
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {getCurrentImages().map((imagen) => (
                  <div key={imagen.id} className="group">
                    <div
                      onClick={() => handleImageClick(imagen.redirectUrl)}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                    >
                      <div className="relative aspect-square overflow-hidden">
                        <img
                          src={imagen.image || "/placeholder.svg"}
                          alt={`${imagen.studentName} - ${imagen.title}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-3">
                        <h3 className="font-semibold text-sm text-gray-800 mb-1">{imagen.studentName}</h3>
                        <p className="text-xs text-gray-600 line-clamp-2">{imagen.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-16 text-center">
                <div className="bg-gray-50 rounded-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-prompt)]">
                    Sobre las Ponencias
                  </h2>
                  <p className="text-gray-700 font-[family-name:var(--font-mulish)] max-w-3xl mx-auto">
                    Las ponencias del XII Congreso de Filosofía abordan el tema central "Razonamiento vs Inteligencia
                    Artificial" desde diferentes perspectivas académicas. Cada presentación ofrece un análisis crítico y
                    reflexivo sobre las implicaciones éticas, lógicas y existenciales del desarrollo de la inteligencia
                    artificial frente a la capacidad racional del ser humano.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-300 text-sm">
              © 2025 Congreso Filosofía. Created for free using WordPress and{" "}
              <Link
                href="https://kubiobuilder.com"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-300"
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
