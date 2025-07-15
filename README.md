# Floating Action Buttons for WordPress

[![WordPress Plugin Version](https://img.shields.io/badge/WordPress-5.0%2B-blue.svg)](https://wordpress.org/)
[![PHP Version](https://img.shields.io/badge/PHP-7.4%2B-purple.svg)](https://php.net/)
[![License](https://img.shields.io/badge/License-GPL%20v2%20or%20later-green.svg)](https://www.gnu.org/licenses/gpl-2.0.html)

Add customizable floating action buttons with animated icons to your WordPress site. Perfect for contact forms, social media links, customer support, and more.

## 🚀 Features

- **Visual Icon Picker**: Choose from 150+ categorized Font Awesome icons without memorizing class names
- **Multiple Animation Effects**: Icon animations (pulse, bounce, rotate, flip) and button animations (fade, slide, zoom)
- **Responsive Design**: Mobile and desktop optimized with device-specific visibility controls
- **Flexible Positioning**: Choose from 4 corner positions with customizable spacing
- **Layout Options**: Vertical or horizontal button arrangements
- **Custom Styling**: Color picker for background and icon colors, circle or rounded button shapes
- **Animation Delays**: Staggered button appearances with customizable delays
- **Tooltips**: Optional hover tooltips for better user experience
- **Drag & Drop Reordering**: Easy button management with sortable interface
- **Security**: CSRF protection with WordPress nonces and proper data sanitization

## 📦 Installation

### From WordPress Admin (Recommended)
1. Download the plugin ZIP file
2. Go to **Plugins > Add New > Upload Plugin**
3. Choose the ZIP file and click **Install Now**
4. Activate the plugin

### Manual Installation
1. Upload the plugin folder to `/wp-content/plugins/`
2. Activate the plugin through the **Plugins** menu in WordPress

## ⚙️ Configuration

1. Go to **Settings > Floating Buttons** in your WordPress admin
2. Enable the floating buttons
3. Configure global settings:
   - Layout direction (vertical/horizontal)
   - Button spacing
   - Position (bottom-right, bottom-left, top-right, top-left)
4. Add and customize buttons:
   - Click **"Choose Icon"** to select from the visual icon picker
   - Set label and action URL
   - Customize colors and animations
   - Configure device visibility

## 🎨 Icon Categories

The visual icon picker includes icons organized into categories:

- **Communication**: Phone, email, WhatsApp, Telegram, chat, video calls
- **Social Media**: Facebook, Instagram, Twitter, LinkedIn, YouTube, TikTok
- **Business**: Briefcase, analytics, team, calendar, settings
- **E-commerce**: Shopping cart, payments, shipping, store, ratings
- **Support**: Help, customer service, documentation, bug reports
- **Navigation**: Arrows, menu, home, external links
- **General**: Search, download, edit, print, notifications

## 🛠️ Usage Examples

### Contact Buttons
```
Phone: tel:+1234567890
Email: mailto:contact@yoursite.com
WhatsApp: https://wa.me/1234567890
```

### Social Media
```
Facebook: https://facebook.com/yourpage
Instagram: https://instagram.com/youraccount
Twitter: https://twitter.com/youraccount
```

### Support & Help
```
Live Chat: https://your-chat-widget-url
Help Center: https://yoursite.com/help
Contact Form: https://yoursite.com/contact
```

## 🎯 Animation Options

### Icon Animations
- **None**: Static icons
- **Pulse**: Gentle scaling animation
- **Bounce**: Vertical bouncing effect
- **Rotate**: Continuous rotation
- **Flip**: Horizontal flip animation

### Button Animations
- **Fade**: Smooth opacity transition
- **Slide**: Slide in from bottom/side
- **Zoom**: Scale in from center

## 📱 Responsive Features

- **Device Visibility**: Show buttons on all devices, mobile only, or desktop only
- **Responsive Design**: Automatically adapts to screen sizes
- **Touch Friendly**: Optimized button sizes for mobile interaction
- **Accessibility**: Keyboard navigation and screen reader support

## 🔧 Technical Requirements

- **WordPress**: 5.0 or higher
- **PHP**: 7.4 or higher
- **Font Awesome**: Loaded automatically from CDN

## 🏗️ Development

### File Structure
```
floating-action-buttons/
├── assets/
│   ├── admin.css          # Admin interface styles
│   ├── admin.js           # Admin functionality & icon picker
│   ├── frontend.css       # Frontend button styles
│   └── frontend.js        # Frontend interactions
├── inc/
│   ├── admin.php          # Admin settings and forms
│   └── frontend.php       # Frontend rendering
├── floating-action-buttons.php  # Main plugin file
└── README.md              # This file
```

### Hooks and Filters

The plugin uses standard WordPress hooks:
- `admin_init`: Register settings
- `admin_menu`: Add settings page
- `wp_enqueue_scripts`: Load frontend assets
- `wp_footer`: Render buttons

## 🛡️ Security Features

- **Nonce Verification**: CSRF protection for all form submissions
- **Data Sanitization**: All user inputs are properly sanitized
- **Capability Checks**: Admin access required for settings
- **Output Escaping**: All output is properly escaped
- **URL Validation**: Action URLs are validated

## 🆕 Changelog

### Version 1.2.1 (Current)
- ✨ **NEW**: Visual Font Awesome icon picker with 150+ icons
- ✨ **NEW**: Categorized icon selection (Communication, Social Media, Business, etc.)
- ✨ **NEW**: Real-time icon search and filtering
- ✨ **NEW**: Improved admin interface with better UX
- 🔧 **IMPROVED**: Enhanced security with nonce verification
- 🔧 **IMPROVED**: Better responsive design for admin panel
- 🔧 **IMPROVED**: Animation effects and visual feedback
- 🐛 **FIXED**: Version consistency across plugin files

### Version 1.1.1
- 🔧 **IMPROVED**: Code organization and file structure
- 🔧 **IMPROVED**: Better sanitization and validation
- 🐛 **FIXED**: PHP syntax errors in admin interface
- 🐛 **FIXED**: Asset loading and enqueuing issues

### Version 1.0.0
- 🎉 **INITIAL**: First release
- ✨ **NEW**: Basic floating action buttons functionality
- ✨ **NEW**: Color customization options
- ✨ **NEW**: Animation effects
- ✨ **NEW**: Responsive visibility controls
- ✨ **NEW**: Drag & drop button reordering

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Setup
1. Clone the repository
2. Make your changes
3. Test with a local WordPress installation
4. Submit a pull request

## 📄 License

This project is licensed under the GPL v2 or later - see the [LICENSE](https://www.gnu.org/licenses/gpl-2.0.html) for details.

## 👨‍💻 Author

**Abdul Owhab**
- GitHub: [@Owhab](https://github.com/Owhab)
- Plugin URI: [https://github.com/Owhab/floating-action-buttons](https://github.com/Owhab/floating-action-buttons)

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/Owhab/floating-action-buttons/issues) page
2. Create a new issue with detailed information
3. Include your WordPress and PHP versions
4. Provide steps to reproduce the problem

## ⭐ Like this plugin?

If you find this plugin useful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs or issues
- 💡 Suggesting new features
- 🤝 Contributing code improvements

---

*Made with ❤️ for the WordPress community*
