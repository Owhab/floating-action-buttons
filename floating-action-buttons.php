<?php
/**
 * Plugin Name: Floating Action Buttons
 * Description: Add customizable floating action buttons with animated icons to your WordPress site.
 * Plugin URI:  https://github.com/Owhab/floating-action-buttons
 * Author:      Abdul Owhab
 * Version:     1.1.1
 * Text Domain: floating-action-buttons
 */

if ( ! defined( 'ABSPATH' ) ) exit;

define( 'FAB_VER', '1.1.1' );
define( 'FAB_DIR', plugin_dir_path(__FILE__) );
define( 'FAB_URL', plugin_dir_url(__FILE__) );

require_once FAB_DIR . 'inc/admin.php';
require_once FAB_DIR . 'inc/frontend.php';