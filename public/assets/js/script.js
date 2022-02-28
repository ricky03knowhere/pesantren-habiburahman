    // Smooth Scrolling
    // >> Handler
    function smoothScroll(e, dest) {
      $('html , body').animate({
        scrollTop: dest.offset().top - 90
      }, 600);

      e.preventDefault();
    }

    // >> Desktop Navbar
    $('#navigation li a').on('click', function (e) {
      let dest = $($(this).attr('href'));
      smoothScroll(e, dest)
    })

    //  >> Explore btn
    $('#carousel .btn-explore').on('click', function (e) {
      let dest = $($(this).attr('href'));
      smoothScroll(e, dest)
    })

    // >> Mobile Navbar
    $('.slicknav_nav .submenu a').on('click', function (e) {
      let dest = $($(this).attr('href'));
      smoothScroll(e, dest)
    })

    //  >> Mobile Home Navbar
    $('.slicknav_nav li:first-child a').on('click', function (e) {
      let dest = $($(this).attr('href'));
      smoothScroll(e, dest)
    })


    // Navbar Collapse
    $('.slicknav_nav .slicknav_parent').on('click', function () {

      $(this).parent().find('.submenu').slideUp()

      if ($(this).hasClass('slicknav_collapsed')) {
        $('.slicknav_nav .slicknav_parent').removeClass('slicknav_open')
        $('.slicknav_nav .slicknav_parent').addClass('slicknav_collapsed')
        console.log('ok');
        $(this).removeClass('slicknav_open')
        $(this).addClass('slicknav_collapsed')
        // $(this).parent().children('.submenu').slideToggle()
      } else {
        // $('.slicknav_nav .slicknav_parent').addClass('slicknav_open')
        $('.slicknav_nav .slicknav_parent').addClass('slicknav_collapsed')
        $(this).removeClass('slicknav_collapsed')
        $(this).addClass('slicknav_open')

      }

    })

    // Owl Carousel Options
    $('.owl-carousel').owlCarousel({
      autoplay: true,
      autoplayHoverPause: true,
      items: 5,
      loop: true,
      nav: true,
      margin: 10,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 4
        }
      }
    })

    // Owl Carousel Tooltips
    $(".owl-carousel .item .profile-card").tooltip({
      title: 'Click for detail',
      delay: 200,
      offset: 10,
      template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
    })

    // <<--- Copyright Year --->>
    let year = new Date().getFullYear()
    $('#footer .year').html(year)