<?php
/**
 * Template Name: Congreso Filosofía - Página Principal
 * Description: Template principal para el XII Congreso de Filosofía
 */

get_header(); ?>

<div class="min-h-screen">
    <!-- Hero Section with Background Image -->
    <section class="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center" 
             style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/images/philosophy-conference-hall.png'); background-position: 49% 60%;">
        
        <div class="absolute inset-0 bg-black opacity-70"></div>

        <!-- Navigation positioned absolutely over hero -->
        <div class="absolute top-0 left-0 right-0 z-50">
            <nav class="flex items-center justify-between px-5 py-5">
                <!-- Logo -->
                <div class="flex items-center">
                    <a href="<?php echo home_url(); ?>" class="text-white font-bold text-2xl">
                        Congreso Filosofía
                    </a>
                </div>

                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center space-x-12">
                    <a href="<?php echo home_url(); ?>" class="text-white hover:text-blue-300 transition-colors text-sm">Inicio</a>
                    <a href="<?php echo home_url('/ponencias'); ?>" class="text-white hover:text-blue-300 transition-colors text-sm">Ponencias</a>
                    <a href="<?php echo home_url('/galeria'); ?>" class="text-white hover:text-blue-300 transition-colors text-sm">Galería</a>
                    <a href="<?php echo home_url('/creditos'); ?>" class="text-white hover:text-blue-300 transition-colors text-sm">Créditos</a>
                </div>

                <!-- Mobile Menu Button -->
                <button class="md:hidden text-white">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </nav>
        </div>

        <!-- Hero Content -->
        <div class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
                XII CONGRESO FILOSOFÍA:<br>
                RAZONAMIENTO VS<br>
                INTELIGENCIA ARTIFICIAL
            </h1>

            <p class="text-lg md:text-xl mb-8 font-light max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                Encuentra en este lugar el proceso de pensar pensamientos,<br>
                el paso a paso de la construcción de nuestras ponencias para el<br>
                XII CONGRESO DE FILOSOFÍA 2025 JOSÉ CELESTINO MUTIS
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="<?php echo home_url('/ponencias'); ?>" 
                   class="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 font-semibold transition-all duration-300 text-sm uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105">
                    PONENCIAS
                </a>
                <a href="<?php echo home_url('/creditos'); ?>" 
                   class="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 font-semibold transition-all duration-300 text-sm uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105">
                    CRÉDITOS
                </a>
            </div>
        </div>
    </section>

    <!-- Main Content Section -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-6">
            <!-- Breadcrumb Navigation -->
            <div class="flex justify-center mb-16">
                <div class="flex items-center space-x-6 text-sm">
                    <span class="text-blue-700 bg-gradient-to-r from-blue-100 to-blue-200 px-6 py-3 rounded-full flex items-center gap-2 shadow-md border border-blue-200 font-medium">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-16 0 9 9 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                        </svg>
                        PONENCIAS
                    </span>
                    <span class="text-purple-700 bg-gradient-to-r from-purple-100 to-purple-200 px-6 py-3 rounded-full flex items-center gap-2 shadow-md border border-purple-200 font-medium">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                        </svg>
                        RAZONAMIENTO
                    </span>
                    <span class="text-green-700 bg-gradient-to-r from-green-100 to-green-200 px-6 py-3 rounded-full flex items-center gap-2 shadow-md border border-green-200 font-medium">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                        INTELIGENCIA ARTIFICIAL
                    </span>
                </div>
            </div>

            <!-- Content Sections -->
            <div class="flex flex-col lg:flex-row items-center gap-12 mb-20">
                <div class="lg:w-1/2">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/congreso-poster.png" 
                         alt="XII Congreso Filosofía Poster" 
                         class="w-full max-w-md mx-auto shadow-lg rounded-lg">
                </div>
                <div class="lg:w-1/2">
                    <h3 class="text-3xl font-bold mb-6 text-gray-800">Estuvimos en:</h3>
                    <p class="text-gray-700 leading-relaxed text-lg">
                        Compartimos nuestra experiencia en el XII Congreso de Filosofía, donde exploramos las intersecciones
                        entre el razonamiento humano y la inteligencia artificial en el contexto filosófico contemporáneo.
                    </p>
                </div>
            </div>

            <!-- More content sections... -->
            
        </div>
    </section>

    <!-- Credits Section -->
    <section class="relative py-20 bg-cover bg-center" 
             style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/images/students-background.png');">
        <div class="absolute inset-0 bg-black opacity-60"></div>
        <div class="relative z-10 text-center">
            <div class="bg-white bg-opacity-95 backdrop-blur-md max-w-lg mx-auto p-10 rounded-xl shadow-2xl border border-white border-opacity-20">
                <h3 class="text-3xl font-bold mb-6 text-gray-900">Créditos</h3>
                <p class="text-gray-700 mb-8 text-lg leading-relaxed">
                    Conoce más sobre los estudiantes, docentes y colaboradores que hicieron posible este proyecto académico.
                </p>
                <a href="<?php echo home_url('/creditos'); ?>" 
                   class="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-sm shadow-lg hover:shadow-xl transform hover:scale-105">
                    Ver Créditos
                </a>
            </div>
        </div>
    </section>

    <!-- Team Section -->
    <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-6">
            <h3 class="text-4xl font-bold text-center mb-16 text-gray-800">Realizado por:</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div class="bg-white p-8 shadow-xl text-center rounded-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/maria-ines.png" 
                         alt="María Inés Castellanos" 
                         class="w-36 h-36 mx-auto mb-6 object-cover rounded-full border-4 border-pink-100">
                    <h4 class="font-bold text-xl text-gray-800 mb-2">María Inés Castellanos</h4>
                    <p class="text-gray-600 text-base">Estudiante de Filosofía</p>
                </div>
                <div class="bg-white p-8 shadow-xl text-center rounded-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/nulak-logo.png" 
                         alt="NULAK" 
                         class="w-36 h-36 mx-auto mb-6 object-cover rounded-full border-4 border-blue-100">
                    <h4 class="font-bold text-xl text-gray-800 mb-2">NULAK</h4>
                    <p class="text-gray-600 text-base">Institución Académica</p>
                </div>
                <div class="bg-white p-8 shadow-xl text-center rounded-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/jose-celestino.png" 
                         alt="Dr. José Celestino Mutis" 
                         class="w-36 h-36 mx-auto mb-6 object-cover rounded-full border-4 border-green-100">
                    <h4 class="font-bold text-xl text-gray-800 mb-2">Dr. José Celestino Mutis</h4>
                    <p class="text-gray-600 text-base">Director Académico</p>
                </div>
            </div>
        </div>
    </section>
</div>

<?php get_footer(); ?>
