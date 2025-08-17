<?php
/**
 * Funciones del tema Congreso Filosofía
 */

// Enqueue styles and scripts
function congreso_filosofia_scripts() {
    // Tailwind CSS (puedes usar CDN o compilar localmente)
    wp_enqueue_style('tailwind-css', 'https://cdn.tailwindcss.com');
    
    // Custom styles
    wp_enqueue_style('congreso-style', get_template_directory_uri() . '/style.css', array(), '1.0.0');
    
    // Custom JavaScript
    wp_enqueue_script('congreso-script', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'congreso_filosofia_scripts');

// Theme support
function congreso_filosofia_setup() {
    // Add theme support for post thumbnails
    add_theme_support('post-thumbnails');
    
    // Add theme support for menus
    add_theme_support('menus');
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'congreso-filosofia'),
    ));
}
add_action('after_setup_theme', 'congreso_filosofia_setup');

// Custom Post Type para Ponencias
function create_ponencias_post_type() {
    register_post_type('ponencias',
        array(
            'labels' => array(
                'name' => __('Ponencias'),
                'singular_name' => __('Ponencia')
            ),
            'public' => true,
            'has_archive' => true,
            'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
            'menu_icon' => 'dashicons-groups',
        )
    );
}
add_action('init', 'create_ponencias_post_type');

// Custom Post Type para Galería
function create_galeria_post_type() {
    register_post_type('galeria',
        array(
            'labels' => array(
                'name' => __('Galería'),
                'singular_name' => __('Imagen')
            ),
            'public' => true,
            'has_archive' => true,
            'supports' => array('title', 'thumbnail', 'custom-fields'),
            'menu_icon' => 'dashicons-format-gallery',
        )
    );
}
add_action('init', 'create_galeria_post_type');

// Agregar campos personalizados para ponencias
function add_ponencias_meta_boxes() {
    add_meta_box(
        'ponencia_details',
        'Detalles de la Ponencia',
        'ponencia_details_callback',
        'ponencias'
    );
}
add_action('add_meta_boxes', 'add_ponencias_meta_boxes');

function ponencia_details_callback($post) {
    wp_nonce_field('save_ponencia_details', 'ponencia_details_nonce');
    
    $student_name = get_post_meta($post->ID, '_student_name', true);
    $category = get_post_meta($post->ID, '_category', true);
    $redirect_url = get_post_meta($post->ID, '_redirect_url', true);
    
    echo '<table class="form-table">';
    echo '<tr><th><label for="student_name">Nombre del Estudiante:</label></th>';
    echo '<td><input type="text" id="student_name" name="student_name" value="' . esc_attr($student_name) . '" size="50" /></td></tr>';
    
    echo '<tr><th><label for="category">Categoría:</label></th>';
    echo '<td><select id="category" name="category">';
    echo '<option value="11-1"' . selected($category, '11-1', false) . '>11-1</option>';
    echo '<option value="11-2"' . selected($category, '11-2', false) . '>11-2</option>';
    echo '<option value="11-3"' . selected($category, '11-3', false) . '>11-3</option>';
    echo '<option value="invitados"' . selected($category, 'invitados', false) . '>Invitados</option>';
    echo '</select></td></tr>';
    
    echo '<tr><th><label for="redirect_url">URL de Redirección:</label></th>';
    echo '<td><input type="url" id="redirect_url" name="redirect_url" value="' . esc_attr($redirect_url) . '" size="50" /></td></tr>';
    echo '</table>';
}

function save_ponencia_details($post_id) {
    if (!isset($_POST['ponencia_details_nonce']) || !wp_verify_nonce($_POST['ponencia_details_nonce'], 'save_ponencia_details')) {
        return;
    }
    
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }
    
    if (isset($_POST['student_name'])) {
        update_post_meta($post_id, '_student_name', sanitize_text_field($_POST['student_name']));
    }
    
    if (isset($_POST['category'])) {
        update_post_meta($post_id, '_category', sanitize_text_field($_POST['category']));
    }
    
    if (isset($_POST['redirect_url'])) {
        update_post_meta($post_id, '_redirect_url', esc_url_raw($_POST['redirect_url']));
    }
}
add_action('save_post', 'save_ponencia_details');

// AJAX para cargar ponencias por categoría
function load_ponencias_by_category() {
    $category = sanitize_text_field($_POST['category']);
    
    $args = array(
        'post_type' => 'ponencias',
        'posts_per_page' => -1,
        'meta_query' => array(
            array(
                'key' => '_category',
                'value' => $category,
                'compare' => '='
            )
        )
    );
    
    $ponencias = get_posts($args);
    $html = '';
    
    foreach($ponencias as $ponencia) {
        $student_name = get_post_meta($ponencia->ID, '_student_name', true);
        $redirect_url = get_post_meta($ponencia->ID, '_redirect_url', true);
        $image = get_the_post_thumbnail_url($ponencia->ID, 'medium');
        
        $html .= '<div class="group">';
        $html .= '<div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer" onclick="window.open(\'' . esc_url($redirect_url) . '\', \'_blank\')">';
        $html .= '<div class="relative aspect-square overflow-hidden">';
        $html .= '<img src="' . esc_url($image) . '" alt="' . esc_attr($student_name) . '" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">';
        $html .= '</div>';
        $html .= '<div class="p-3">';
        $html .= '<h3 class="font-semibold text-sm text-gray-800 mb-1">' . esc_html($student_name) . '</h3>';
        $html .= '<p class="text-xs text-gray-600 line-clamp-2">' . esc_html($ponencia->post_title) . '</p>';
        $html .= '</div>';
        $html .= '</div>';
        $html .= '</div>';
    }
    
    wp_send_json_success($html);
}
add_action('wp_ajax_load_ponencias', 'load_ponencias_by_category');
add_action('wp_ajax_nopriv_load_ponencias', 'load_ponencias_by_category');
?>
