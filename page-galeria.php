<?php
/**
 * Template Name: Galería
 * Description: Página de galería del congreso
 */

get_header(); ?>

<div class="min-h-screen bg-gray-50">
    <!-- Hero Section with Navigation -->
    <div class="relative h-64 bg-cover bg-center" 
         style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/images/philosophy-conference-hall.png');">
        <div class="absolute inset-0 bg-black opacity-70"></div>

        <!-- Navigation -->
        <div class="absolute top-0 left-0 right-0 z-50">
            <nav class="flex items-center justify-between p-6">
                <a href="<?php echo home_url(); ?>" class="text-white text-xl font-bold">Congreso Filosofía</a>
                <div class="hidden md:flex space-x-8">
                    <a href="<?php echo home_url(); ?>" class="text-white hover:text-gray-300 transition-colors">Inicio</a>
                    <a href="<?php echo home_url('/ponencias'); ?>" class="text-white hover:text-gray-300 transition-colors">Ponencias</a>
                    <a href="<?php echo home_url('/galeria'); ?>" class="text-white font-semibold">Galería</a>
                    <a href="<?php echo home_url('/creditos'); ?>" class="text-white hover:text-gray-300 transition-colors">Créditos</a>
                </div>
            </nav>
        </div>

        <!-- Page Title -->
        <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center text-white">
                <h1 class="text-4xl md:text-5xl font-bold mb-4">Galería del Congreso</h1>
                <p class="text-lg opacity-90">Momentos destacados del XII Congreso de Filosofía</p>
            </div>
        </div>
    </div>

    <!-- Back Button -->
    <div class="max-w-7xl mx-auto px-6 py-6">
        <a href="<?php echo home_url(); ?>" class="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors">
            ← Volver al inicio
        </a>
    </div>

    <!-- Gallery Grid -->
    <div class="max-w-7xl mx-auto px-6 pb-16">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <?php
            // Aquí obtendrías las imágenes desde la base de datos o ACF
            $galeria_imagenes = array(
                array('id' => 1, 'title' => 'Foto grupal del congreso', 'image' => 'foto-grupal.jpg'),
                array('id' => 2, 'title' => 'Presentación magistral', 'image' => 'presentacion-magistral.jpg'),
                array('id' => 3, 'title' => 'Estudiantes participantes', 'image' => 'estudiantes.jpg'),
                // Agregar más imágenes...
            );

            foreach($galeria_imagenes as $imagen): ?>
            <div class="group">
                <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                     onclick="openLightbox(<?php echo $imagen['id']; ?>)">
                    <div class="relative aspect-square overflow-hidden">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/galeria/<?php echo $imagen['image']; ?>" 
                             alt="<?php echo $imagen['title']; ?>" 
                             class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                        <div class="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div class="text-white text-center p-2">
                                <div class="text-sm font-medium">Ver imagen</div>
                            </div>
                        </div>
                    </div>
                    <div class="p-4">
                        <h3 class="text-sm font-medium text-gray-800 text-center"><?php echo $imagen['title']; ?></h3>
                    </div>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>

    <!-- Lightbox Modal (manejado con JavaScript) -->
    <div id="lightbox" class="fixed inset-0 bg-black bg-opacity-90 z-50 hidden items-center justify-center p-4">
        <div class="relative max-w-4xl max-h-full">
            <button onclick="closeLightbox()" class="absolute top-4 right-4 text-white hover:text-gray-300 z-10">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
            <img id="lightbox-image" src="/placeholder.svg" alt="" class="max-w-full max-h-full object-contain">
            <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                <h3 id="lightbox-title" class="text-lg font-medium"></h3>
            </div>
        </div>
    </div>
</div>

<script>
function openLightbox(imageId) {
    // Implementar lógica del lightbox
    document.getElementById('lightbox').classList.remove('hidden');
    document.getElementById('lightbox').classList.add('flex');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.add('hidden');
    document.getElementById('lightbox').classList.remove('flex');
}
</script>

<?php get_footer(); ?>
