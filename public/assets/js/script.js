// Smooth Scrolling
// >> Handler
$(document).ready(() => {
  "use strict";

  function smoothScroll(e, dest) {
    $("html , body").animate({
        scrollTop: dest.offset().top - 90,
      },
      600
    );

    e.preventDefault();
  }

  // >> Desktop Navbar
  $("#navigation li a").on("click", function (e) {
    let link = $(this).attr("href").split("\/")
    let dest = $('#' + link[2]);
    console.log(link[2]);
    smoothScroll(e, dest);
  });

  //  >> Explore btn
  $("#carousel .btn-explore").on("click", function (e) {
    let dest = $($(this).attr("href"));
    console.log(dest);
    smoothScroll(e, dest);
  });

  // >> Mobile Navbar
  $(".slicknav_nav .submenu a").on("click", function (e) {
    let dest = $($(this).attr("href"));
    smoothScroll(e, dest);
  });

  //  >> Mobile Home Navbar
  $(".slicknav_nav li:first-child a").on("click", function (e) {
    let dest = $($(this).attr("href"));
    smoothScroll(e, dest);
  });

  // Navbar Collapse
  $(".slicknav_nav .slicknav_parent").on("click", function () {
    $(this).parent().find(".submenu").slideUp();

    if ($(this).hasClass("slicknav_collapsed")) {
      $(".slicknav_nav .slicknav_parent").removeClass("slicknav_open");
      $(".slicknav_nav .slicknav_parent").addClass("slicknav_collapsed");
      console.log("ok");
      $(this).removeClass("slicknav_open");
      $(this).addClass("slicknav_collapsed");
      // $(this).parent().children('.submenu').slideToggle()
    } else {
      // $('.slicknav_nav .slicknav_parent').addClass('slicknav_open')
      $(".slicknav_nav .slicknav_parent").addClass("slicknav_collapsed");
      $(this).removeClass("slicknav_collapsed");
      $(this).addClass("slicknav_open");
    }
  });

  // Owl Carousel Options
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    items: 5,
    loop: true,
    nav: true,
    dots: true,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });

  $(".owl-carousel .owl-nav").removeClass("disabled");
  $(".owl-carousel .owl-dots").removeClass("disabled");

  // Profile Pegngajar Tooltips
  $(".owl-carousel .item .profile-card").tooltip({
    title: "Click for detail",
    delay: 200,
    offset: 10,
    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
  });
  
  // Kitab Tooltips
  $("#kitab .col-md-3 .card").tooltip({
    title: "Click for detail",
    delay: 200,
    offset: 10,
    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
  });
  
  // Form Santri Tooltips
  $("#santriRegister .row .education").tooltip({
    title: "Instansi : tahun masuk ~ tahun lulus",
    delay: 200,
    offset: 10,
    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
  });

  // Detail Pembayaran Tooltips
  $("#pembayaran .row #infoPem").tooltip({
    title: "Click for detail",
    // delay: 200,
    // offset: 10,
    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
  });

  // Verification Pembayaran Tooltips
  $("#pembayaran .row #verificatePem").tooltip({
    title: "Click for verification",
    // delay: 200,
    // offset: 10,
    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
  });

});