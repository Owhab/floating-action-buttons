<?php
/**
 * Plugin Name: Floating Action Buttons
 * Plugin URI:  https://github.com/Owhab/floating-action-buttons
 * Description: Add customizable floating action buttons with animated icons to your WordPress site. Features visual icon picker, responsive design, and extensive customization options.
 * Version:     1.2.1
 * Author:      Abdul Owhab
 * Author URI:  https://github.com/Owhab
 * License:     GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: floating-action-buttons
 * Domain Path: /languages
 * Requires at least: 5.0
 * Tested up to: 6.6
 * Requires PHP: 7.4
 * Network: false
 * 
 * @package FloatingActionButtons
 * @version 1.2.1
 * @author Abdul Owhab
 * @copyright 2025 Abdul Owhab
 * @license GPL-2.0-or-later
 */

if ( ! defined( 'ABSPATH' ) ) exit;

define( 'FAB_VER', '1.2.1' );
define( 'FAB_DIR', plugin_dir_path(__FILE__) );
define( 'FAB_URL', plugin_dir_url(__FILE__) );

require_once FAB_DIR . 'inc/admin.php';
require_once FAB_DIR . 'inc/frontend.php';