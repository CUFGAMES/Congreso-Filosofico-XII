# 📚 Guía para Modificar las Ponencias

## 🎯 Cómo Agregar/Modificar Imágenes y Enlaces

### 1. Ubicación del Código
Archivo: `app/ponencias/page.tsx`
Busca la sección que dice: `CONFIGURACIÓN DE IMÁGENES - AQUÍ PUEDES HACER MODIFICACIONES`

### 2. Formato para Cada Imagen
\`\`\`javascript
{
  id: 1,                                    // Número único (no cambiar)
  title: "Nombre de tu ponencia",           // Título que aparece al hacer hover
  image: "/ruta/a/tu/imagen.jpg",          // 🔴 AQUÍ VA TU IMAGEN
  redirectUrl: "https://tu-sitio.com"      // 🔴 AQUÍ VA TU ENLACE
}
\`\`\`

### 3. Ejemplo Práctico
\`\`\`javascript
// Cambiar esto:
{ id: 1, title: "Ponencia 1", image: "/placeholder.svg", redirectUrl: "https://google.com" }

// Por esto:
{ id: 1, title: "Ética en IA", image: "/imagenes/etica-ia.jpg", redirectUrl: "https://mi-universidad.edu/ponencia-etica" }
\`\`\`

### 4. Pasos para Modificar:

#### Paso 1: Subir tu imagen
- Coloca tu imagen en la carpeta `public/` del proyecto
- Ejemplo: `public/imagenes/mi-ponencia.jpg`

#### Paso 2: Modificar el código
\`\`\`javascript
const imagenes = [
  {
    id: 1,
    title: "Mi Ponencia Increíble",
    image: "/imagenes/mi-ponencia.jpg",        // Ruta desde public/
    redirectUrl: "https://mi-sitio-web.com"   // Tu enlace
  },
  // Más imágenes...
]
\`\`\`

#### Paso 3: Guardar y probar
- Guarda el archivo
- Recarga la página
- Haz clic en una categoría y luego en tu imagen

### 5. Consejos Importantes:

✅ **SÍ hacer:**
- Usar imágenes cuadradas (300x300px recomendado)
- Usar formatos JPG, PNG, WebP
- Verificar que las URLs funcionen
- Usar títulos descriptivos

❌ **NO hacer:**
- Cambiar los `id` (deben ser únicos)
- Usar imágenes muy pesadas (>2MB)
- Dejar URLs rotas
- Usar caracteres especiales en nombres de archivo

### 6. Estructura de Carpetas Recomendada:
\`\`\`
public/
├── imagenes/
│   ├── ponencias/
│   │   ├── categoria-12-1/
│   │   ├── categoria-12-2/
│   │   ├── categoria-12-3/
│   │   └── invitados/
\`\`\`

### 7. Solución de Problemas:

**Problema:** La imagen no aparece
- ✅ Verifica que esté en la carpeta `public/`
- ✅ Revisa que la ruta sea correcta
- ✅ Asegúrate de que el nombre no tenga espacios

**Problema:** El enlace no funciona
- ✅ Verifica que la URL esté completa (con https://)
- ✅ Prueba el enlace en otra pestaña

**Problema:** Cambios no se ven
- ✅ Guarda el archivo
- ✅ Recarga la página completamente (Ctrl+F5)

### 8. Contacto
Si necesitas ayuda, busca en el código los comentarios que empiezan con `// ` para encontrar las secciones modificables.
