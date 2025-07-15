<?php
if ( ! defined( 'ABSPATH' ) ) exit;

function fab_enqueue_assets() {
    $fab_settings = get_option('fab_settings', []);
    if ( empty($fab_settings['enabled']) ) return;
    wp_enqueue_style( 'fab-fontawesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css', [], '6.5.2' );
    wp_enqueue_style( 'fab-frontend', FAB_URL . 'assets/frontend.css', [], FAB_VER );
    wp_enqueue_script( 'fab-frontend', FAB_URL . 'assets/frontend.js', [], FAB_VER, true );
    wp_localize_script( 'fab-frontend', 'fabSettings', [
        'position' => $fab_settings['position'] ?? 'bottom-right',
        'direction'=> $fab_settings['layout_direction'] ?? 'vertical',
        'spacing'  => $fab_settings['spacing'] ?? 12,
    ]);
}
add_action( 'wp_enqueue_scripts', 'fab_enqueue_assets' );

function fab_render_floating_buttons() {
    $fab_settings = get_option('fab_settings', []);
    if ( empty($fab_settings['enabled']) ) return;
    $buttons = $fab_settings['buttons'] ?? [];
    if ( empty($buttons) ) return;

    $direction = $fab_settings['layout_direction'] ?? 'vertical';
    $spacing   = intval($fab_settings['spacing'] ?? 12);
    $position  = $fab_settings['position'] ?? 'bottom-right';

    $container_classes = [
        'fab-container',
        'fab-' . esc_attr($direction),
        'fab-' . esc_attr($position),
    ];
    ?>
    <div class="<?php echo esc_attr(implode(' ', $container_classes)); ?>" style="--fab-spacing:<?php echo esc_attr($spacing); ?>px;">
        <?php foreach ( $buttons as $i => $btn ):
            $icon_class = esc_attr($btn['icon'] ?? 'fas fa-magic');
            $label      = esc_html($btn['label'] ?? '');
            $url        = esc_url($btn['url'] ?? '');
            $bg_color   = esc_attr($btn['bg_color'] ?? '#0d6efd');
            $icon_color = esc_attr($btn['icon_color'] ?? '#fff');
            $visibility = esc_attr($btn['visibility'] ?? 'all');
            $shape      = esc_attr($btn['shape'] ?? 'circle');
            $icon_anim  = esc_attr($btn['icon_animation'] ?? 'none');
            $btn_anim   = esc_attr($btn['button_animation'] ?? 'fade');
            $tooltip    = !empty($btn['tooltip']);
            $delay      = intval($btn['delay'] ?? 0);

            $vis_class = '';
            if ( $visibility === 'mobile' ) $vis_class = 'fab-mobile-only';
            elseif ( $visibility === 'desktop' ) $vis_class = 'fab-desktop-only';

            $icon_anim_class = $icon_anim !== 'none' ? 'fab-anim-icon-' . $icon_anim : '';
            $btn_anim_class  = 'fab-anim-btn-' . $btn_anim;
            $shape_class = $shape === 'rounded' ? 'fab-shape-rounded' : 'fab-shape-circle';
            $tooltip_attr = $tooltip ? 'data-tooltip="' . esc_attr($label) . '"' : '';
            $delay_style = $delay > 0 ? 'animation-delay:'.($delay/1000).'s; transition-delay:'.($delay/1000).'s;' : '';
        ?>
        <a href="<?php echo $url; ?>"
           class="fab-btn <?php echo $vis_class . ' ' . $shape_class . ' ' . $icon_anim_class . ' ' . $btn_anim_class; ?>"
           style="background:<?php echo $bg_color; ?>;<?php echo $delay_style; ?>"
           target="_blank" rel="noopener"
           <?php echo $tooltip_attr; ?>>
            <span class="fab-icon" style="color:<?php echo $icon_color; ?>;">
                <i class="<?php echo $icon_class; ?>"></i>
            </span>
        </a>
        <?php endforeach; ?>
    </div>
    <?php
}
add_action( 'wp_footer', 'fab_render_floating_buttons', 99 );