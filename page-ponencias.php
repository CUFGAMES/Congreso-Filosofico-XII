<?php
/**
 * Template Name: Ponencias
 * Description: Página de ponencias del congreso
 */

get_header(); ?>

<div class="min-h-screen">
    <!-- Navigation positioned absolutely over hero -->
    <div class="absolute top-0 left-0 right-0 z-50">
        <nav class="flex items-center justify-between px-5 py-5">
            <div class="flex items-center">
                <a href="<?php echo home_url(); ?>" class="text-white font-bold text-2xl">Congreso Filosofía</a>
            </div>
            <div class="hidden md:flex items-center space-x-12">
                <a href="<?php echo home_url(); ?>" class="text-white hover:text-blue-300 transition-colors text-sm">Inicio</a>
                <a href="<?php echo home_url('/ponencias'); ?>" class="text-white hover:text-blue-300 transition-colors text-sm border-b border-white">Ponencias</a>
                <a href="<?php echo home_url('/galeria'); ?>" class="text-white hover:text-blue-300 transition-colors text-sm">Galería</a>
                <a href="<?php echo home_url('/creditos'); ?>" class="text-white hover:text-blue-300 transition-colors text-sm">Créditos</a>
            </div>
        </nav>
    </div>

    <!-- Fullscreen centered selection -->
    <section class="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center" 
             style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/images/philosophy-conference-hall.png'); background-position: 49% 60%;">
        
        <div class="absolute inset-0 bg-black opacity-60"></div>

        <!-- Centered Selection Options -->
        <div class="relative z-10 text-center text-white">
            <h1 class="text-4xl md:text-5xl font-bold mb-8">Ponencias</h1>
            <p class="text-lg mb-12">Selecciona una categoría para ver las ponencias</p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto px-6">
                <?php
                $categorias = array(
                    array('id' => '11-1', 'title' => '11 - 1', 'description' => 'Primera categoría (32 ponencias)', 'count' => 32),
                    array('id' => '11-2', 'title' => '11 - 2', 'description' => 'Segunda categoría (30 ponencias)', 'count' => 30),
                    array('id' => '11-3', 'title' => '11 - 3', 'description' => 'Tercera categoría (33 ponencias)', 'count' => 33),
                    array('id' => 'invitados', 'title' => 'INVITADOS', 'description' => 'Ponencias especiales (30 ponencias)', 'count' => 30)
                );

                foreach($categorias as $categoria): ?>
                <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden cursor-pointer hover:bg-white hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2 border border-white border-opacity-20"
                     onclick="showCategory('<?php echo $categoria['id']; ?>')">
                    <div class="relative aspect-square overflow-hidden">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/categoria-<?php echo $categoria['id']; ?>.png" 
                             alt="<?php echo $categoria['title']; ?>" 
                             class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                        <div class="absolute inset-0 bg-gradient-to-t from-black from-opacity-60 to-transparent flex items-end">
                            <div class="p-4 text-white">
                                <h3 class="text-xl font-bold"><?php echo $categoria['title']; ?></h3>
                                <p class="text-sm opacity-90"><?php echo $categoria['description']; ?></p>
                                <span class="inline-block bg-white bg-opacity-20 px-2 py-1 rounded-full text-xs mt-2">
                                    <?php echo $categoria['count']; ?> ponencias
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Gallery view (hidden by default, shown via JavaScript) -->
    <div id="gallery-view" class="pt-20 hidden">
        <section class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-6">
                <div class="text-center mb-16">
                    <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Ponencias</h1>
                    <p id="category-info" class="text-lg text-gray-600">Categoría seleccionada</p>
                </div>

                <div class="flex items-center justify-between mb-8">
                    <button onclick="showCategories()" class="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                        ← Volver a categorías
                    </button>
                    <h2 id="category-title" class="text-2xl font-bold text-gray-900">Categoría</h2>
                </div>

                <div id="presentations-grid" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    <!-- Presentations will be loaded here via JavaScript/AJAX -->
                </div>
            </div>
        </section>
    </div>
</div>

<script>
// JavaScript para manejar la navegación entre categorías y ponencias
function showCategory(categoryId) {
    document.querySelector('section').style.display = 'none';
    document.getElementById('gallery-view').classList.remove('hidden');
    
    // Aquí cargarías las ponencias via AJAX o PHP
    loadPresentations(categoryId);
}

function showCategories() {
    document.querySelector('section').style.display = 'flex';
    document.getElementById('gallery-view').classList.add('hidden');
}

function loadPresentations(categoryId) {
    // Esta función cargaría las ponencias desde la base de datos
    // Por ahora solo actualiza el título
    document.getElementById('category-title').textContent = 'Categoría: ' + categoryId.toUpperCase();
    document.getElementById('category-info').textContent = 'Categoría: ' + categoryId.toUpperCase();
}
</script>

<?php get_footer(); ?>
