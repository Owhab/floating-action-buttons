# Changelog

All notable changes to the Floating Action Buttons WordPress plugin will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.1] - 2025-07-16

### Added
- **Visual Font Awesome Icon Picker**: Complete replacement for manual class input
  - 150+ categorized icons across 7 categories
  - Real-time search functionality with debounced input
  - Category filtering (Communication, Social Media, Business, E-commerce, Support, Navigation, General)
  - Visual icon preview in grid layout
  - No results message with helpful guidance
  - Keyboard support (Escape to close)
- **Enhanced User Experience**:
  - Modal interface with smooth animations
  - Icon selection with visual feedback
  - Current icon highlighting in picker
  - Responsive design for mobile and desktop
  - Improved admin field layout with better spacing
- **Security Improvements**:
  - CSRF protection with WordPress nonces
  - Enhanced form validation
  - Better error handling and user feedback

### Changed
- **Admin Interface**:
  - Icon field now includes "Choose Icon" button alongside text input
  - Better field organization and responsive layout
  - Improved visual hierarchy and spacing
  - Enhanced tooltips and help text
- **Code Quality**:
  - Better JavaScript organization with proper event delegation
  - Improved CSS with better browser compatibility
  - Enhanced performance with debounced search
  - More semantic HTML structure

### Fixed
- Version consistency between plugin header and constants
- Improved error handling in icon picker
- Better modal accessibility and keyboard navigation
- Fixed potential XSS vulnerabilities in admin interface

### Technical Details
- Added comprehensive icon database with 150+ Font Awesome icons
- Implemented modal component with fade animations
- Added search and filter functionality with performance optimization
- Enhanced CSS with responsive breakpoints and improved scrollbars
- Improved JavaScript with better event handling and user feedback

## [1.1.1] - 2025-07-15

### Fixed
- **Critical PHP Syntax Error**: Removed erroneous markdown code blocks from admin.php that caused parse errors
- **Version Mismatch**: Updated FAB_VER constant to match plugin header version (1.1.1)
- **File Structure**: Cleaned up admin.php file that incorrectly contained other file contents

### Changed
- Improved code organization and file separation
- Better error handling and validation
- Enhanced sanitization functions

### Security
- Added proper input sanitization
- Improved output escaping
- Better capability checks

## [1.0.0] - 2025-07-14

### Added
- **Initial Release**: Core floating action buttons functionality
- **Button Management**:
  - Add/remove unlimited buttons
  - Drag & drop reordering with sortable interface
  - Individual button customization
- **Styling Options**:
  - Color picker for background and icon colors
  - Shape selection (circle/rounded)
  - Font Awesome icon support with manual class input
- **Animation System**:
  - Icon animations: pulse, bounce, rotate, flip
  - Button animations: fade, slide, zoom
  - Customizable animation delays for staggered effects
- **Layout Controls**:
  - Position selection (4 corners)
  - Layout direction (vertical/horizontal)
  - Adjustable button spacing
- **Responsive Features**:
  - Device visibility controls (all/mobile/desktop)
  - Mobile-optimized interface
  - Responsive CSS design
- **User Experience**:
  - Live icon preview
  - Tooltip support
  - WordPress admin integration
- **Technical Foundation**:
  - WordPress Settings API integration
  - Proper asset enqueuing
  - Security best practices
  - Clean, semantic HTML output

### Technical Specifications
- **WordPress**: 5.0+ compatibility
- **PHP**: 7.4+ requirement
- **Frontend**: Font Awesome 6.5.2 from CDN
- **Admin**: WordPress color picker, jQuery UI sortable
- **Security**: Nonce verification, input sanitization, output escaping

---

## Legend

- 🎉 **Major Release**
- ✨ **New Feature**
- 🔧 **Improvement**
- 🐛 **Bug Fix**
- 🛡️ **Security**
- ⚠️ **Breaking Change**
- 📝 **Documentation**
- 🏗️ **Internal/Technical**
