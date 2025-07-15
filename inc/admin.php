<?php
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Register settings and add menu page
 */
function fab_register_settings() {
    register_setting( 'fab_settings_group', 'fab_settings', [
        'sanitize_callback' => 'fab_sanitize_settings',
        'default' => []
    ]);
}
add_action( 'admin_init', 'fab_register_settings' );

function fab_add_settings_page() {
    add_options_page(
        __( 'Floating Buttons', 'floating-action-buttons' ),
        __( 'Floating Buttons', 'floating-action-buttons' ),
        'manage_options',
        'floating-action-buttons',
        'fab_render_settings_page'
    );
}
add_action( 'admin_menu', 'fab_add_settings_page' );

/**
 * Settings Page
 */
function fab_render_settings_page() {
    $fab_settings = get_option('fab_settings', []);
    if ( empty($fab_settings) ) $fab_settings = fab_default_settings();
    wp_enqueue_style( 'wp-color-picker' );
    wp_enqueue_script( 'jquery-ui-sortable' );
    wp_enqueue_style( 'fab-admin', FAB_URL . 'assets/admin.css', [], FAB_VER );
    wp_enqueue_script( 'fab-admin', FAB_URL . 'assets/admin.js', ['jquery','wp-color-picker','jquery-ui-sortable'], FAB_VER, true );
    ?>
    <div class="wrap fab-settings">
        <h1><?php esc_html_e('Floating Action Buttons', 'floating-action-buttons'); ?></h1>
        <form method="post" action="options.php" id="fab-settings-form">
            <?php 
            settings_fields('fab_settings_group'); 
            wp_nonce_field('fab_settings_action', 'fab_settings_nonce');
            ?>
            <input type="hidden" id="fab-default-icon" value="fas fa-magic">
            <div class="fab-global-settings">
                <h2><?php esc_html_e('Global Settings', 'floating-action-buttons'); ?></h2>
                <label>
                    <input type="checkbox" name="fab_settings[enabled]" value="1" <?php checked( !empty($fab_settings['enabled']) ); ?> />
                    <?php esc_html_e('Enable Floating Buttons', 'floating-action-buttons'); ?>
                </label>
                <div>
                    <label>
                        <?php esc_html_e('Layout Direction:', 'floating-action-buttons'); ?>
                        <select name="fab_settings[layout_direction]">
                            <option value="vertical" <?php selected($fab_settings['layout_direction'] ?? '', 'vertical'); ?>><?php esc_html_e('Vertical', 'floating-action-buttons'); ?></option>
                            <option value="horizontal" <?php selected($fab_settings['layout_direction'] ?? '', 'horizontal'); ?>><?php esc_html_e('Horizontal', 'floating-action-buttons'); ?></option>
                        </select>
                    </label>
                    <label>
                        <?php esc_html_e('Button Spacing (px):', 'floating-action-buttons'); ?>
                        <input type="number" min="0" name="fab_settings[spacing]" value="<?php echo esc_attr($fab_settings['spacing'] ?? 12); ?>" style="width:70px;">
                    </label>
                    <label>
                        <?php esc_html_e('Position:', 'floating-action-buttons'); ?>
                        <select name="fab_settings[position]">
                            <option value="bottom-right" <?php selected($fab_settings['position'] ?? '', 'bottom-right'); ?>><?php esc_html_e('Bottom Right', 'floating-action-buttons'); ?></option>
                            <option value="bottom-left" <?php selected($fab_settings['position'] ?? '', 'bottom-left'); ?>><?php esc_html_e('Bottom Left', 'floating-action-buttons'); ?></option>
                            <option value="top-right" <?php selected($fab_settings['position'] ?? '', 'top-right'); ?>><?php esc_html_e('Top Right', 'floating-action-buttons'); ?></option>
                            <option value="top-left" <?php selected($fab_settings['position'] ?? '', 'top-left'); ?>><?php esc_html_e('Top Left', 'floating-action-buttons'); ?></option>
                        </select>
                    </label>
                </div>
            </div>
            <hr>
            <h2><?php esc_html_e('Buttons', 'floating-action-buttons'); ?></h2>
            <div id="fab-buttons-list">
                <?php
                $buttons = $fab_settings['buttons'] ?? [];
                if ( empty($buttons) ) $buttons = [ fab_default_button() ];
                foreach ( $buttons as $i => $button ) {
                    fab_render_button_fields( $button, $i );
                }
                ?>
            </div>
            <button type="button" class="button" id="fab-add-button"><?php esc_html_e('Add Button', 'floating-action-buttons'); ?></button>
            <input type="hidden" id="fab-buttons-count" name="fab_settings[buttons_count]" value="<?php echo esc_attr( count($buttons) ); ?>">
            <?php submit_button(); ?>
        </form>
        <template id="fab-button-template">
            <?php fab_render_button_fields( fab_default_button(), '__INDEX__' ); ?>
        </template>
    </div>
    <?php
}

/**
 * Render Repeatable Button Fields
 */
function fab_render_button_fields( $button, $i ) {
    $icon      = esc_attr($button['icon'] ?? 'fas fa-magic');
    $label     = esc_attr($button['label'] ?? '');
    $url       = esc_url_raw($button['url'] ?? '');
    $bg_color  = esc_attr($button['bg_color'] ?? '#0d6efd');
    $icon_color= esc_attr($button['icon_color'] ?? '#fff');
    $visibility= esc_attr($button['visibility'] ?? 'all');
    $shape     = esc_attr($button['shape'] ?? 'circle');
    $icon_anim = esc_attr($button['icon_animation'] ?? 'none');
    $btn_anim  = esc_attr($button['button_animation'] ?? 'fade');
    $tooltip   = !empty($button['tooltip']) ? 1 : 0;
    $delay     = esc_attr($button['delay'] ?? '0');
    ?>
    <div class="fab-button-item" data-index="<?php echo esc_attr($i); ?>">
        <span class="fab-sort-handle dashicons dashicons-move"></span>
        <button type="button" class="fab-remove dashicons dashicons-trash" title="<?php esc_attr_e('Remove','floating-action-buttons');?>"></button>
        <div class="fab-fields-row">
            <div>
                <label><?php esc_html_e('FontAwesome Icon', 'floating-action-buttons'); ?></label>
                <div class="fab-icon-picker-container">
                    <div class="fab-icon-input-wrapper">
                        <input type="text" name="fab_settings[buttons][<?php echo esc_attr($i); ?>][icon]" class="fab-icon-input" value="<?php echo $icon; ?>" placeholder="<?php esc_attr_e('Use picker or enter class like: fas fa-phone', 'floating-action-buttons'); ?>" />
                    </div>
                    <button type="button" class="fab-icon-picker-btn" title="<?php esc_attr_e('Choose from icon library', 'floating-action-buttons'); ?>"><?php esc_html_e('Choose Icon', 'floating-action-buttons'); ?></button>
                    <span class="fab-icon-preview"><i class="<?php echo $icon; ?>"></i></span>
                </div>
                <small style="color: #666; font-style: italic;"><?php esc_html_e('Click "Choose Icon" for visual selection or manually enter Font Awesome class', 'floating-action-buttons'); ?></small>
            </div>
            <div>
                <label><?php esc_html_e('Label', 'floating-action-buttons'); ?></label>
                <input type="text" name="fab_settings[buttons][<?php echo esc_attr($i); ?>][label]" value="<?php echo $label; ?>" />
            </div>
            <div>
                <label><?php esc_html_e('Action URL', 'floating-action-buttons'); ?></label>
                <input type="url" name="fab_settings[buttons][<?php echo esc_attr($i); ?>][url]" value="<?php echo $url; ?>" placeholder="tel:123456789 or https://wa.me/..." />
            </div>
            <div>
                <label><?php esc_html_e('Background Color', 'floating-action-buttons'); ?></label>
                <input type="text" class="fab-color-picker" name="fab_settings[buttons][<?php echo esc_attr($i); ?>][bg_color]" value="<?php echo $bg_color; ?>" />
            </div>
            <div>
                <label><?php esc_html_e('Icon Color', 'floating-action-buttons'); ?></label>
                <input type="text" class="fab-color-picker" name="fab_settings[buttons][<?php echo esc_attr($i); ?>][icon_color]" value="<?php echo $icon_color; ?>" />
            </div>
            <div>
                <label><?php esc_html_e('Visibility', 'floating-action-buttons'); ?></label>
                <select name="fab_settings[buttons][<?php echo esc_attr($i); ?>][visibility]">
                    <option value="all" <?php selected($visibility,'all'); ?>><?php esc_html_e('All Devices', 'floating-action-buttons'); ?></option>
                    <option value="mobile" <?php selected($visibility,'mobile'); ?>><?php esc_html_e('Mobile Only', 'floating-action-buttons'); ?></option>
                    <option value="desktop" <?php selected($visibility,'desktop'); ?>><?php esc_html_e('Desktop Only', 'floating-action-buttons'); ?></option>
                </select>
            </div>
            <div>
                <label><?php esc_html_e('Shape', 'floating-action-buttons'); ?></label>
                <select name="fab_settings[buttons][<?php echo esc_attr($i); ?>][shape]">
                    <option value="circle" <?php selected($shape,'circle'); ?>><?php esc_html_e('Circle', 'floating-action-buttons'); ?></option>
                    <option value="rounded" <?php selected($shape,'rounded'); ?>><?php esc_html_e('Rounded', 'floating-action-buttons'); ?></option>
                </select>
            </div>
            <div>
                <label><?php esc_html_e('Icon Animation', 'floating-action-buttons'); ?></label>
                <select name="fab_settings[buttons][<?php echo esc_attr($i); ?>][icon_animation]">
                    <option value="none"><?php esc_html_e('None', 'floating-action-buttons'); ?></option>
                    <option value="pulse" <?php selected($icon_anim,'pulse'); ?>><?php esc_html_e('Pulse', 'floating-action-buttons'); ?></option>
                    <option value="bounce" <?php selected($icon_anim,'bounce'); ?>><?php esc_html_e('Bounce', 'floating-action-buttons'); ?></option>
                    <option value="rotate" <?php selected($icon_anim,'rotate'); ?>><?php esc_html_e('Rotate', 'floating-action-buttons'); ?></option>
                    <option value="flip" <?php selected($icon_anim,'flip'); ?>><?php esc_html_e('Flip', 'floating-action-buttons'); ?></option>
                </select>
            </div>
            <div>
                <label><?php esc_html_e('Button Animation', 'floating-action-buttons'); ?></label>
                <select name="fab_settings[buttons][<?php echo esc_attr($i); ?>][button_animation]">
                    <option value="fade" <?php selected($btn_anim,'fade'); ?>><?php esc_html_e('Fade', 'floating-action-buttons'); ?></option>
                    <option value="slide" <?php selected($btn_anim,'slide'); ?>><?php esc_html_e('Slide', 'floating-action-buttons'); ?></option>
                    <option value="zoom" <?php selected($btn_anim,'zoom'); ?>><?php esc_html_e('Zoom', 'floating-action-buttons'); ?></option>
                </select>
            </div>
            <div>
                <label><?php esc_html_e('Show Tooltip', 'floating-action-buttons'); ?></label>
                <input type="checkbox" name="fab_settings[buttons][<?php echo esc_attr($i); ?>][tooltip]" value="1" <?php checked($tooltip); ?> />
            </div>
            <div>
                <label><?php esc_html_e('Animation Delay (ms)', 'floating-action-buttons'); ?></label>
                <input type="number" min="0" step="50" name="fab_settings[buttons][<?php echo esc_attr($i); ?>][delay]" value="<?php echo $delay; ?>" style="width:80px;" />
            </div>
        </div>
    </div>
    <?php
}

/**
 * Default settings and button
 */
function fab_default_settings() {
    return [
        'enabled'         => 1,
        'layout_direction'=> 'vertical',
        'spacing'         => 12,
        'position'        => 'bottom-right',
        'buttons'         => [ fab_default_button() ],
    ];
}
function fab_default_button() {
    return [
        'icon'           => 'fas fa-magic',
        'label'          => 'Contact',
        'url'            => 'mailto:example@email.com',
        'bg_color'       => '#0d6efd',
        'icon_color'     => '#fff',
        'visibility'     => 'all',
        'shape'          => 'circle',
        'icon_animation' => 'none',
        'button_animation'=> 'fade',
        'tooltip'        => 1,
        'delay'          => 0,
    ];
}

/**
 * Sanitize settings
 */
function fab_sanitize_settings( $input ) {
    // Verify nonce for additional security
    if (!wp_verify_nonce($_POST['fab_settings_nonce'] ?? '', 'fab_settings_action')) {
        add_settings_error('fab_settings', 'invalid_nonce', __('Security check failed. Please try again.', 'floating-action-buttons'));
        return get_option('fab_settings', []);
    }
    
    $output = [];
    $output['enabled'] = !empty($input['enabled']) ? 1 : 0;
    $output['layout_direction'] = in_array($input['layout_direction'], ['vertical','horizontal']) ? $input['layout_direction'] : 'vertical';
    $output['spacing'] = max(0, intval($input['spacing'] ?? 12));
    $output['position'] = in_array($input['position'], ['bottom-right','bottom-left','top-right','top-left']) ? $input['position'] : 'bottom-right';
    // Buttons
    $output['buttons'] = [];
    if ( !empty($input['buttons']) && is_array($input['buttons']) ) {
        foreach ( $input['buttons'] as $btn ) {
            $icon = sanitize_text_field( $btn['icon'] ?? 'fas fa-magic' );
            if ( empty($icon) ) $icon = 'fas fa-magic';
            $output['buttons'][] = [
                'icon'           => $icon,
                'label'          => sanitize_text_field($btn['label'] ?? ''),
                'url'            => esc_url_raw($btn['url'] ?? ''),
                'bg_color'       => sanitize_hex_color($btn['bg_color'] ?? '#0d6efd') ?: '#0d6efd',
                'icon_color'     => sanitize_hex_color($btn['icon_color'] ?? '#fff') ?: '#fff',
                'visibility'     => in_array($btn['visibility'] ?? '', ['all','mobile','desktop']) ? $btn['visibility'] : 'all',
                'shape'          => in_array($btn['shape'] ?? '', ['circle','rounded']) ? $btn['shape'] : 'circle',
                'icon_animation' => in_array($btn['icon_animation'] ?? '', ['none','pulse','bounce','rotate','flip']) ? $btn['icon_animation'] : 'none',
                'button_animation' => in_array($btn['button_animation'] ?? '', ['fade','slide','zoom']) ? $btn['button_animation'] : 'fade',
                'tooltip'        => !empty($btn['tooltip']) ? 1 : 0,
                'delay'          => max(0, intval($btn['delay'] ?? 0)),
            ];
        }
    }
    return $output;
}