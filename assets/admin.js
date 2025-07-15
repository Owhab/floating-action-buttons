jQuery(function ($) {
  // Font Awesome Icons Database
  const faIcons = {
    'Communication': [
      { class: 'fas fa-phone', name: 'Phone' },
      { class: 'fas fa-envelope', name: 'Email' },
      { class: 'fab fa-whatsapp', name: 'WhatsApp' },
      { class: 'fab fa-telegram', name: 'Telegram' },
      { class: 'fas fa-comments', name: 'Chat' },
      { class: 'fas fa-comment', name: 'Comment' },
      { class: 'fab fa-skype', name: 'Skype' },
      { class: 'fab fa-discord', name: 'Discord' },
      { class: 'fas fa-video', name: 'Video Call' },
      { class: 'fas fa-microphone', name: 'Microphone' }
    ],
    'Social Media': [
      { class: 'fab fa-facebook', name: 'Facebook' },
      { class: 'fab fa-twitter', name: 'Twitter' },
      { class: 'fab fa-instagram', name: 'Instagram' },
      { class: 'fab fa-linkedin', name: 'LinkedIn' },
      { class: 'fab fa-youtube', name: 'YouTube' },
      { class: 'fab fa-tiktok', name: 'TikTok' },
      { class: 'fab fa-pinterest', name: 'Pinterest' },
      { class: 'fab fa-snapchat', name: 'Snapchat' },
      { class: 'fab fa-reddit', name: 'Reddit' },
      { class: 'fab fa-tumblr', name: 'Tumblr' }
    ],
    'Business': [
      { class: 'fas fa-briefcase', name: 'Business' },
      { class: 'fas fa-handshake', name: 'Partnership' },
      { class: 'fas fa-chart-line', name: 'Analytics' },
      { class: 'fas fa-dollar-sign', name: 'Sales' },
      { class: 'fas fa-building', name: 'Company' },
      { class: 'fas fa-users', name: 'Team' },
      { class: 'fas fa-user-tie', name: 'Professional' },
      { class: 'fas fa-calendar', name: 'Schedule' },
      { class: 'fas fa-clock', name: 'Time' },
      { class: 'fas fa-cog', name: 'Settings' }
    ],
    'E-commerce': [
      { class: 'fas fa-shopping-cart', name: 'Cart' },
      { class: 'fas fa-store', name: 'Store' },
      { class: 'fas fa-credit-card', name: 'Payment' },
      { class: 'fas fa-gift', name: 'Gift' },
      { class: 'fas fa-tag', name: 'Price Tag' },
      { class: 'fas fa-shipping-fast', name: 'Shipping' },
      { class: 'fas fa-receipt', name: 'Receipt' },
      { class: 'fas fa-wallet', name: 'Wallet' },
      { class: 'fas fa-box', name: 'Package' },
      { class: 'fas fa-star', name: 'Rating' }
    ],
    'Support': [
      { class: 'fas fa-question-circle', name: 'Help' },
      { class: 'fas fa-life-ring', name: 'Support' },
      { class: 'fas fa-headset', name: 'Customer Service' },
      { class: 'fas fa-tools', name: 'Technical Support' },
      { class: 'fas fa-book', name: 'Documentation' },
      { class: 'fas fa-lightbulb', name: 'Ideas' },
      { class: 'fas fa-exclamation-circle', name: 'Alert' },
      { class: 'fas fa-info-circle', name: 'Information' },
      { class: 'fas fa-bug', name: 'Report Bug' },
      { class: 'fas fa-rocket', name: 'Feature Request' }
    ],
    'General': [
      { class: 'fas fa-home', name: 'Home' },
      { class: 'fas fa-heart', name: 'Like' },
      { class: 'fas fa-share', name: 'Share' },
      { class: 'fas fa-download', name: 'Download' },
      { class: 'fas fa-upload', name: 'Upload' },
      { class: 'fas fa-search', name: 'Search' },
      { class: 'fas fa-plus', name: 'Add' },
      { class: 'fas fa-minus', name: 'Remove' },
      { class: 'fas fa-edit', name: 'Edit' },
      { class: 'fas fa-trash', name: 'Delete' },
      { class: 'fas fa-eye', name: 'View' },
      { class: 'fas fa-print', name: 'Print' },
      { class: 'fas fa-magic', name: 'Magic' },
      { class: 'fas fa-fire', name: 'Popular' },
      { class: 'fas fa-thumbs-up', name: 'Approve' }
    ]
  };

  // Color Picker
  $(".fab-color-picker").wpColorPicker();

  // Icon Picker Modal
  function createIconPickerModal() {
    if ($('#fab-icon-picker-modal').length) return;
    
    let modalHtml = `
      <div id="fab-icon-picker-modal" class="fab-modal">
        <div class="fab-modal-content">
          <div class="fab-modal-header">
            <h3>Choose an Icon</h3>
            <span class="fab-modal-close">&times;</span>
          </div>
          <div class="fab-modal-body">
            <div class="fab-icon-search">
              <input type="text" id="fab-icon-search" placeholder="Search icons..." />
            </div>
            <div class="fab-icon-categories">
              <button class="fab-category-btn active" data-category="all">All</button>
              ${Object.keys(faIcons).map(cat => 
                `<button class="fab-category-btn" data-category="${cat}">${cat}</button>`
              ).join('')}
            </div>
            <div class="fab-icon-grid" id="fab-icon-grid">
              <!-- Icons will be populated here -->
            </div>
          </div>
        </div>
      </div>
    `;
    $('body').append(modalHtml);
  }

  function populateIconGrid(category = 'all', searchTerm = '') {
    const $grid = $('#fab-icon-grid');
    $grid.empty();
    
    let iconsToShow = [];
    if (category === 'all') {
      Object.values(faIcons).forEach(icons => iconsToShow.push(...icons));
    } else {
      iconsToShow = faIcons[category] || [];
    }
    
    if (searchTerm) {
      iconsToShow = iconsToShow.filter(icon => 
        icon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        icon.class.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    iconsToShow.forEach(icon => {
      $grid.append(`
        <div class="fab-icon-item" data-class="${icon.class}" title="${icon.name}">
          <i class="${icon.class}"></i>
          <span>${icon.name}</span>
        </div>
      `);
    });
  }

  // Create modal on page load
  createIconPickerModal();
  populateIconGrid();

  // Icon picker button click
  $(document).on('click', '.fab-icon-picker-btn', function() {
    const $input = $(this).siblings('.fab-icon-input');
    $('#fab-icon-picker-modal').data('target-input', $input).fadeIn();
  });

  // Modal close
  $(document).on('click', '.fab-modal-close, .fab-modal', function(e) {
    if (e.target === this) {
      $('#fab-icon-picker-modal').fadeOut();
    }
  });

  // Category filter
  $(document).on('click', '.fab-category-btn', function() {
    $('.fab-category-btn').removeClass('active');
    $(this).addClass('active');
    const category = $(this).data('category');
    const searchTerm = $('#fab-icon-search').val();
    populateIconGrid(category, searchTerm);
  });

  // Search functionality
  $(document).on('input', '#fab-icon-search', function() {
    const searchTerm = $(this).val();
    const activeCategory = $('.fab-category-btn.active').data('category');
    populateIconGrid(activeCategory, searchTerm);
  });

  // Icon selection
  $(document).on('click', '.fab-icon-item', function() {
    const iconClass = $(this).data('class');
    const $targetInput = $('#fab-icon-picker-modal').data('target-input');
    $targetInput.val(iconClass).trigger('input');
    $('#fab-icon-picker-modal').fadeOut();
  });

  // Add Button
  $("#fab-add-button").on("click", function () {
    let $tmpl = $($("#fab-button-template").html());
    let idx = $("#fab-buttons-list .fab-button-item").length;
    $tmpl.find("input,select").each(function () {
      let name = $(this).attr("name");
      if (name) $(this).attr("name", name.replace("__INDEX__", idx));
    });
    $tmpl.attr("data-index", idx);
    $("#fab-buttons-list").append($tmpl);
    $tmpl.find(".fab-color-picker").wpColorPicker();
    $("#fab-buttons-count").val(idx + 1);
  });

  // Remove Button
  $("#fab-buttons-list").on("click", ".fab-remove", function () {
    if ($("#fab-buttons-list .fab-button-item").length <= 1) return;
    $(this).closest(".fab-button-item").remove();
    $("#fab-buttons-count").val($("#fab-buttons-list .fab-button-item").length);
  });

  // Drag & Drop Sortable
  $("#fab-buttons-list").sortable({
    handle: ".fab-sort-handle",
    stop: function () {
      // Update names to reflect new order (index)
      $("#fab-buttons-list .fab-button-item").each(function (i) {
        $(this).attr("data-index", i);
        $(this)
          .find("input,select")
          .each(function () {
            let name = $(this).attr("name");
            name = name.replace(/buttons\]\[\d+\]/, "buttons][" + i + "]");
            $(this).attr("name", name);
          });
      });
    },
  });

  // Live Icon Preview
  $("#fab-buttons-list").on("input", ".fab-icon-input", function () {
    let val = $(this).val();
    let $preview = $(this).siblings(".fab-icon-preview");
    $preview.html('<i class="' + val + '"></i>');
  });
});
