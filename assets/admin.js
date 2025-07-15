jQuery(function ($) {
  // Font Awesome Icons Database
  const faIcons = {
    Communication: [
      { class: "fas fa-phone", name: "Phone" },
      { class: "fas fa-phone-alt", name: "Phone Alt" },
      { class: "fas fa-envelope", name: "Email" },
      { class: "fas fa-envelope-open", name: "Email Open" },
      { class: "fab fa-whatsapp", name: "WhatsApp" },
      { class: "fab fa-telegram", name: "Telegram" },
      { class: "fab fa-telegram-plane", name: "Telegram Plane" },
      { class: "fas fa-comments", name: "Chat" },
      { class: "fas fa-comment", name: "Comment" },
      { class: "fas fa-comment-dots", name: "Comment Dots" },
      { class: "fab fa-skype", name: "Skype" },
      { class: "fab fa-discord", name: "Discord" },
      { class: "fas fa-video", name: "Video Call" },
      { class: "fas fa-microphone", name: "Microphone" },
      { class: "fab fa-viber", name: "Viber" },
      { class: "fab fa-slack", name: "Slack" },
      { class: "fas fa-sms", name: "SMS" },
      { class: "fas fa-paper-plane", name: "Send Message" },
    ],
    "Social Media": [
      { class: "fab fa-facebook", name: "Facebook" },
      { class: "fab fa-facebook-f", name: "Facebook F" },
      { class: "fab fa-twitter", name: "Twitter" },
      { class: "fab fa-instagram", name: "Instagram" },
      { class: "fab fa-linkedin", name: "LinkedIn" },
      { class: "fab fa-linkedin-in", name: "LinkedIn In" },
      { class: "fab fa-youtube", name: "YouTube" },
      { class: "fab fa-tiktok", name: "TikTok" },
      { class: "fab fa-pinterest", name: "Pinterest" },
      { class: "fab fa-pinterest-p", name: "Pinterest P" },
      { class: "fab fa-snapchat", name: "Snapchat" },
      { class: "fab fa-reddit", name: "Reddit" },
      { class: "fab fa-tumblr", name: "Tumblr" },
      { class: "fab fa-github", name: "GitHub" },
      { class: "fab fa-gitlab", name: "GitLab" },
      { class: "fab fa-behance", name: "Behance" },
      { class: "fab fa-dribbble", name: "Dribbble" },
      { class: "fab fa-vimeo", name: "Vimeo" },
    ],
    Business: [
      { class: "fas fa-briefcase", name: "Business" },
      { class: "fas fa-handshake", name: "Partnership" },
      { class: "fas fa-chart-line", name: "Analytics" },
      { class: "fas fa-chart-bar", name: "Bar Chart" },
      { class: "fas fa-chart-pie", name: "Pie Chart" },
      { class: "fas fa-dollar-sign", name: "Sales" },
      { class: "fas fa-euro-sign", name: "Euro" },
      { class: "fas fa-pound-sign", name: "Pound" },
      { class: "fas fa-building", name: "Company" },
      { class: "fas fa-users", name: "Team" },
      { class: "fas fa-user-tie", name: "Professional" },
      { class: "fas fa-calendar", name: "Schedule" },
      { class: "fas fa-clock", name: "Time" },
      { class: "fas fa-cog", name: "Settings" },
      { class: "fas fa-clipboard", name: "Tasks" },
      { class: "fas fa-file-contract", name: "Contract" },
      { class: "fas fa-presentation", name: "Presentation" },
      { class: "fas fa-balance-scale", name: "Legal" },
    ],
    "E-commerce": [
      { class: "fas fa-shopping-cart", name: "Cart" },
      { class: "fas fa-shopping-bag", name: "Shopping Bag" },
      { class: "fas fa-store", name: "Store" },
      { class: "fas fa-credit-card", name: "Payment" },
      { class: "fab fa-paypal", name: "PayPal" },
      { class: "fab fa-stripe", name: "Stripe" },
      { class: "fas fa-gift", name: "Gift" },
      { class: "fas fa-tag", name: "Price Tag" },
      { class: "fas fa-tags", name: "Tags" },
      { class: "fas fa-shipping-fast", name: "Shipping" },
      { class: "fas fa-truck", name: "Delivery" },
      { class: "fas fa-receipt", name: "Receipt" },
      { class: "fas fa-wallet", name: "Wallet" },
      { class: "fas fa-box", name: "Package" },
      { class: "fas fa-star", name: "Rating" },
      { class: "fas fa-percent", name: "Discount" },
      { class: "fas fa-money-bill", name: "Money" },
      { class: "fas fa-coins", name: "Coins" },
    ],
    Support: [
      { class: "fas fa-question-circle", name: "Help" },
      { class: "fas fa-question", name: "Question" },
      { class: "fas fa-life-ring", name: "Support" },
      { class: "fas fa-headset", name: "Customer Service" },
      { class: "fas fa-tools", name: "Technical Support" },
      { class: "fas fa-wrench", name: "Fix" },
      { class: "fas fa-book", name: "Documentation" },
      { class: "fas fa-book-open", name: "Manual" },
      { class: "fas fa-lightbulb", name: "Ideas" },
      { class: "fas fa-exclamation-circle", name: "Alert" },
      { class: "fas fa-exclamation-triangle", name: "Warning" },
      { class: "fas fa-info-circle", name: "Information" },
      { class: "fas fa-bug", name: "Report Bug" },
      { class: "fas fa-rocket", name: "Feature Request" },
      { class: "fas fa-ambulance", name: "Emergency" },
      { class: "fas fa-first-aid", name: "First Aid" },
    ],
    Navigation: [
      { class: "fas fa-home", name: "Home" },
      { class: "fas fa-arrow-up", name: "Up" },
      { class: "fas fa-arrow-down", name: "Down" },
      { class: "fas fa-arrow-left", name: "Left" },
      { class: "fas fa-arrow-right", name: "Right" },
      { class: "fas fa-chevron-up", name: "Chevron Up" },
      { class: "fas fa-chevron-down", name: "Chevron Down" },
      { class: "fas fa-chevron-left", name: "Chevron Left" },
      { class: "fas fa-chevron-right", name: "Chevron Right" },
      { class: "fas fa-angle-up", name: "Angle Up" },
      { class: "fas fa-angle-down", name: "Angle Down" },
      { class: "fas fa-bars", name: "Menu" },
      { class: "fas fa-times", name: "Close" },
      { class: "fas fa-external-link-alt", name: "External Link" },
    ],
    General: [
      { class: "fas fa-heart", name: "Like" },
      { class: "fas fa-thumbs-up", name: "Thumbs Up" },
      { class: "fas fa-thumbs-down", name: "Thumbs Down" },
      { class: "fas fa-share", name: "Share" },
      { class: "fas fa-share-alt", name: "Share Alt" },
      { class: "fas fa-download", name: "Download" },
      { class: "fas fa-upload", name: "Upload" },
      { class: "fas fa-search", name: "Search" },
      { class: "fas fa-plus", name: "Add" },
      { class: "fas fa-minus", name: "Remove" },
      { class: "fas fa-edit", name: "Edit" },
      { class: "fas fa-trash", name: "Delete" },
      { class: "fas fa-eye", name: "View" },
      { class: "fas fa-eye-slash", name: "Hide" },
      { class: "fas fa-print", name: "Print" },
      { class: "fas fa-magic", name: "Magic" },
      { class: "fas fa-fire", name: "Popular" },
      { class: "fas fa-bell", name: "Notification" },
      { class: "fas fa-bookmark", name: "Bookmark" },
      { class: "fas fa-flag", name: "Flag" },
      { class: "fas fa-lock", name: "Lock" },
      { class: "fas fa-unlock", name: "Unlock" },
      { class: "fas fa-key", name: "Key" },
      { class: "fas fa-crown", name: "Premium" },
      { class: "fas fa-gem", name: "Gem" },
    ],
  };

  // Color Picker
  $(".fab-color-picker").wpColorPicker();

  // Icon Picker Modal
  function createIconPickerModal() {
    if ($("#fab-icon-picker-modal").length) return;

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
              ${Object.keys(faIcons)
                .map(
                  (cat) =>
                    `<button class="fab-category-btn" data-category="${cat}">${cat}</button>`
                )
                .join("")}
            </div>
            <div class="fab-icon-grid" id="fab-icon-grid">
              <!-- Icons will be populated here -->
            </div>
          </div>
        </div>
      </div>
    `;
    $("body").append(modalHtml);
  }

  function populateIconGrid(category = "all", searchTerm = "") {
    const $grid = $("#fab-icon-grid");
    $grid.empty();

    let iconsToShow = [];
    if (category === "all") {
      Object.values(faIcons).forEach((icons) => iconsToShow.push(...icons));
    } else {
      iconsToShow = faIcons[category] || [];
    }

    if (searchTerm) {
      iconsToShow = iconsToShow.filter(
        (icon) =>
          icon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          icon.class.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (iconsToShow.length === 0) {
      $grid.append(`
        <div class="fab-no-results">
          <i class="fas fa-search"></i>
          <p>No icons found</p>
          <small>Try a different search term or category</small>
        </div>
      `);
      return;
    }

    iconsToShow.forEach((icon) => {
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
  $(document).on("click", ".fab-icon-picker-btn", function () {
    const $input = $(this)
      .siblings(".fab-icon-input-wrapper")
      .find(".fab-icon-input");
    const currentIcon = $input.val();
    const $modal = $("#fab-icon-picker-modal");

    $modal.data("target-input", $input).addClass("fade-in").fadeIn();

    // Highlight currently selected icon
    setTimeout(() => {
      $(".fab-icon-item").removeClass("selected");
      if (currentIcon) {
        $(`.fab-icon-item[data-class="${currentIcon}"]`).addClass("selected");
      }
    }, 100);
  });

  // Modal close
  $(document).on("click", ".fab-modal-close, .fab-modal", function (e) {
    if (e.target === this) {
      $("#fab-icon-picker-modal").removeClass("fade-in").fadeOut();
    }
  });

  // Close modal with Escape key
  $(document).on("keydown", function (e) {
    if (e.key === "Escape" && $("#fab-icon-picker-modal").is(":visible")) {
      $("#fab-icon-picker-modal").removeClass("fade-in").fadeOut();
    }
  });

  // Category filter
  $(document).on("click", ".fab-category-btn", function () {
    $(".fab-category-btn").removeClass("active");
    $(this).addClass("active");
    const category = $(this).data("category");
    const searchTerm = $("#fab-icon-search").val();
    populateIconGrid(category, searchTerm);
  });

  // Search functionality with debounce
  let searchTimeout;
  $(document).on("input", "#fab-icon-search", function () {
    const searchTerm = $(this).val();
    const activeCategory = $(".fab-category-btn.active").data("category");

    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      populateIconGrid(activeCategory, searchTerm);
    }, 300);
  });

  // Icon selection
  $(document).on("click", ".fab-icon-item", function () {
    const iconClass = $(this).data("class");
    const $targetInput = $("#fab-icon-picker-modal").data("target-input");

    // Add selection visual feedback
    $(".fab-icon-item").removeClass("selected");
    $(this).addClass("selected");

    // Update input and preview
    $targetInput.val(iconClass).trigger("input");

    // Close modal after a short delay for visual feedback
    setTimeout(() => {
      $("#fab-icon-picker-modal").removeClass("fade-in").fadeOut();
    }, 150);
  });

  // Clear search when modal opens
  $(document).on("click", ".fab-icon-picker-btn", function () {
    setTimeout(() => {
      $("#fab-icon-search").val("").focus();
      $('.fab-category-btn[data-category="all"]').click();
    }, 100);
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
