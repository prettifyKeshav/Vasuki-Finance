$(function () {

    if (!$('header').is('.header-fixed')) {

        $(window).on('scroll', function () {

            $(this).scrollTop() > 100 ? $('header').addClass('header-fixed') : $('header').removeClass('header-fixed');

        });

        $(window).scrollTop() > 100 ? $('header').addClass('header-fixed') : $('header').removeClass('header-fixed');

    }



    //



    const formControls = $(".form-control");

    formControls.on('focus input change blur', throttle(handleForm));

    formControls.each(function () {

        handleForm.call(this);

    });



    //



    niceSelect($);

    $('select').niceSelect();



    // Data-animate function call

    handleAnimations()

    //



    adjustWhatsAppUrls();

    $(window).resize(function () {

        adjustWhatsAppUrls();

    });



    //



    startCountAnimation();

    $(window).scroll(function () {

        startCountAnimation();

    })

    // 


    // $(".form-section .form-tab-nav li").on("click", function () {

    //     var tabId = $(this).attr("data-tab");

    //     $(".form-section .form-tab-nav li").removeClass("active");

    //     $(this).addClass("active");



    //     $(".form-section .form-tab-content").attr("data-tab", tabId);

    // });



    $(".form-section .form-tab-nav li").on("click", function () {

        var tabId = $(this).attr("data-tab");

        $(".form-section .form-tab-nav li").removeClass("active");

        $(this).addClass("active");

        $(".form-section .form-tab-content").attr("data-tab", tabId);

        $(".form-section .form-tab-content .form-group").each(function () {

            var showFor = $(this).attr("data-show");

            if (!showFor) {

                $(this).show();

                return;

            }

            var allowedStates = showFor.split(",");

            if (allowedStates.includes(tabId)) {

                $(this).show();

            } else {

                $(this).hide();

            }

        });

    });

    $(".form-section .form-tab-nav li.active").trigger("click");









    //



    document.querySelectorAll('img.svg').forEach(img => {

        fetch(img.src)

            .then(response => response.text())

            .then(data => {

                const svg = new DOMParser().parseFromString(data, 'image/svg+xml').querySelector('svg');

                if (svg) {

                    svg.classList.add('svg');

                    img.replaceWith(svg);

                }

            });

    });



    //

    $(document).on('click', '.tab-nav [data-tab]:not(.disabled-btn)', function () {

        var tab = $(this).addClass('active').siblings().removeClass('active').end().data('tab');

        $('.tab-nav-content >*[data-tab= ' + tab + ']').addClass('active').siblings().removeClass('active');

    });

    //





    // =============== PRODUCT SIFTING =================== //

    // $(document).on('click', '.product-tab-nav [data-attr]:not(.disabled-btn)', function () {

    //     var tab = $(this).addClass('active').siblings().removeClass('active').end().data('tab');

    //     $('.product-tab-nav-content >*[data-attr= ' + tab + ']').addClass('active').siblings().removeClass('active');

    // });

    // =============== PRODUCT SIFTING =================== //





    $(document).on('click', '[data-scrollTo]', function () {

        headerheight = parseInt($(':root').css('--headerfixed')) + parseInt($(':root').css('--headerstripfixed'));

        var section = $(this).attr('data-scrollTo');

        if (section) {

            $('html, body').stop().animate({

                scrollTop: $(section).offset().top - headerheight

            }, 1000);

        }

    });



    //



    $(document).on('click', '[data-model]', function () {

        var model = $(this).attr('data-model');

        openModel(model);

    });



    $(document).on('click', '.overlay,.close', function () {

        closeModel();

    });



    //



    const labelInput = $("input,textarea");

    labelInput.on('change', function () {

        if ($(this).val() !== "") {

            $(this).addClass("valid");

        } else {

            $(this).removeClass("valid");

        }

    });





    $('input[type="file"].form-control').on('change', function () {

        var fileName = $(this).val().replace(/C:\\fakepath\\/i, '');

        if (fileName) {

            $(this).siblings('.file-name').css('--filenameinitial', `"${fileName}"`);

        } else {

            $(this).siblings('.file-name').css('--filenameinitial', 'var(--filename)');

        }

    });



    //

    $(document).on('click', '[data-video]', function () {

        var src = $(this).attr('data-video');

        if (src.includes('youtube.com/embed/')) {

            var videoId = src.split('embed/')[1].split('?')[0];

            src += '&autoplay=1&loop=1&playlist=' + videoId;

            $('#iframe1').attr('src', src);

        }

        else {

            $('#iframe1').attr('src', src);

        }

        $('.video-pop').addClass('is-open');

    });



    $('.close-video').on('click', function () {

        $('#iframe1').attr('src', '');

        $('.video-pop').removeClass('is-open');

        $('.overlay').removeClass('is-open');

        $(`body`).removeClass(`overflow-hidden`);

    });
    //


    // ============ hamburger close on slide- START ================>>>>
    $('#solutionsHamClose').on('click', function () {

        $('.overlay').removeClass('is-open');

        $('.ham-pop').removeClass('is-open');

        $(`body`).removeClass(`overflow-hidden`);

    });



    $('#productHamClose').on('click', function () {

        $('.overlay').removeClass('is-open');

        $('.ham-pop').removeClass('is-open');

        $(`body`).removeClass(`overflow-hidden`);

    });

    // ============ hamburger END ================>>>>





    // ============ SCROLL TO SECTION START ================>>>>

    var headerheight = parseInt($(':root').css('--headerheight'));

    function scrollToSection() {

        var pathname = window.location.hash.slice(1);

        if (pathname) {

            $('html, body').stop().animate({

                scrollTop: $('#' + pathname).offset().top - headerheight

            }, 600); // 600ms animation

        }

    }

    scrollToSection();

    $(window).on('hashchange', function () {

        scrollToSection();

        if (typeof closeModel === "function") {

            closeModel();

        }

    });

    // ============ SCROLL TO SECTION END ================>>>>





    // ============ ABOUT POPUP START ================>>>>

    $(document).on('click', '[data-video]', function () {

        $('.about-pop').addClass('is-open');

    });

    $('.close-about-pop').on('click', function () {

        $('.about-pop').removeClass('is-open');

        $('.overlay').removeClass('is-open');

        $(`body`).removeClass(`overflow-hidden`);



    });

    // ============ ABOUT POPUP END ================>>>>



    // ============ PRODUCT POPUP START ================>>>>

    $(document).on('click', '[data-video]', function () {

        $('.product-pop').addClass('is-open');

    });

    $('.close-product-pop').on('click', function () {

        $('.product-pop').removeClass('is-open');

        $('.overlay').removeClass('is-open');

        $(`body`).removeClass(`overflow-hidden`);



    });

    // ============ PRODUCT POPUP END ================>>>>



    // ============ CONTACT POPUP START ================>>>>

    $(document).on('click', '[data-video]', function () {

        $('.contact-pop').addClass('is-open');

    });

    $('.close-contact-pop').on('click', function () {

        $('.contact-pop').removeClass('is-open');

        $('.overlay').removeClass('is-open');

        $(`body`).removeClass(`overflow-hidden`);



    });

    // ============ CONTACT POPUP END ================>>>>



    $('.summery-detail-content .col:has(article) .title').click(function () {

        var $parentCol = $(this).parent('.col');

        $('.summery-detail-content .col').not($parentCol).find('article').stop().slideUp();

        $('.summery-detail-content .col').not($parentCol).removeClass('active');

        $parentCol.toggleClass('active');

        $(this).siblings('article').stop().slideToggle();

    });



    //convert tab nav to dropdown in mobile



    if ($(window).width() < 991) {

        $('.tab-filter').each(function () {

            var $this = $(this);

            setTimeout(function () {

                var activeText = $this.find('li.active').text();

                $this.find('ul').before(`<span class="tab-filter-span">${activeText}</span>`);

            }, 0);



            $(document).on('click', '.tab-filter-span', function () {

                $(this).siblings('ul').stop().slideToggle();

            })

        });



        $(document).on('click', function (e) {

            if (!$(e.target).closest('.tab-filter-span').length) {

                $('.tab-filter ul').stop().slideUp();

            }

        });

    }



    // ===========================================================================================================

    $('.hasDropdown').click(function (e) {

        e.stopPropagation(); // Prevents event bubbling



        var slideMenu = $(this).find('.dropdown-menu-ham');

        var plusIcon = $(this).find('.plu-ico'); // Get the specific .plu-ico inside clicked .hasDropdown



        // Close other open menus and remove active class

        $('.dropdown-menu-ham').not(slideMenu).slideUp();

        $('.hasDropdown').not(this).removeClass('active');

        $('.plu-ico').not(plusIcon).removeClass('active'); // Remove active from other icons



        // Toggle active class for the clicked menu and icon

        $(this).toggleClass('active');

        plusIcon.toggleClass('active'); // Only add/remove active for the clicked plu-ico



        slideMenu.stop().slideToggle();

    });

    // ===========================================================================================================



    // Home-Swiper==========================>>>>

    new Swiper(".homeSwiper", {

        loop: true,

        pagination: {

            el: ".swiper-pagination",

            clickable: true,

        },

        autoplay: {

            delay: 9000,

            disableOnInteraction: false,

        },

    });

    // Home-Swiper==========================>>>>









    // services-slider start

    const sliders = document.querySelectorAll('.services-slider-slider');

    sliders.forEach((slider) => {

        new Swiper(slider, {

            navigation: {

                prevEl: slider.parentElement.querySelector('.services-slider-prev'),

                nextEl: slider.parentElement.querySelector('.services-slider-next'),

            },

            breakpoints: {

                0: {

                    slidesPerView: 1.2,

                    spaceBetween: 10,

                    speed: 500,

                },

                540: {

                    slidesPerView: 1.2,

                    spaceBetween: 20,

                    speed: 700,

                },

                768: {

                    slidesPerView: 2,

                    spaceBetween: 50,

                    speed: 700,

                },

                991: {

                    slidesPerView: 2,

                    spaceBetween: 20,

                    speed: 700,

                },

                1024: {

                    slidesPerView: 4,

                    spaceBetween: 20,

                    speed: 700,

                }

            }

        });

    });

    // services-slider End





    // MORE SLIDER START ======================>

    new Swiper('.project-detail-slider', {

        loop: false,

        navigation: {

            prevEl: '.project-detail-prev',

            nextEl: '.project-detail-next',

        },

        breakpoints: {

            0: {

                slidesPerView: 1.2,

                spaceBetween: 10,

                speed: 500,

            },

            675: {

                slidesPerView: 2,

                spaceBetween: 12,

                speed: 1000,

            },

            992: {

                slidesPerView: 2,

                spaceBetween: 20,

                speed: 1000,

            }

        }

    });

    // MORE  SLIDER END ======================>



    // LOGOS SWIPER SLIDES =========================================>

    new Swiper(".logo-slider-right", {

        loop: true,

        autoplay: {

            delay: 0,

            disableOnInteraction: false,

            // pauseOnMouseEnter: true,

            reverseDirection: true

        },

        breakpoints: {

            0: {

                slidesPerView: 1.2,

                spaceBetween: 20,

                speed: 2000,

            },

            768: {

                slidesPerView: 2.7,

                spaceBetween: 20,

                speed: 2000,

            },

            1024: {

                slidesPerView: 3.2,

                spaceBetween: 20,

                speed: 2000

            },

            1300: {

                slidesPerView: 5.2,

                spaceBetween: 30,

                speed: 2000

            }

        }

    });



    new Swiper(".logo-slider-left", {

        loop: true,

        autoplay: {

            delay: 0,

            disableOnInteraction: false,

            // pauseOnMouseEnter: true,

            // reverseDirection: true

        },

        breakpoints: {

            0: {

                slidesPerView: 1.2,

                spaceBetween: 20,

                speed: 2000,

            },

            768: {

                slidesPerView: 2.7,

                spaceBetween: 20,

                speed: 2000,

            },

            1024: {

                slidesPerView: 3.2,

                spaceBetween: 20,

                speed: 2000

            },

            1300: {

                slidesPerView: 5.2,

                spaceBetween: 30,

                speed: 2000

            }

        }

    });

    // LOGOS SWIPER SLIDES =========================================>



    // About  SLIDER START ======================>

    new Swiper('.about-slider1', {

        loop: false,

        navigation: {

            prevEl: '.about-prev1',

            nextEl: '.about-next1',

        },

        breakpoints: {

            0: {

                slidesPerView: 1.2,

                spaceBetween: 10,

                speed: 500,

            },

            675: {

                slidesPerView: 2.2,

                spaceBetween: 12,

                speed: 1000,

            },

            992: {

                slidesPerView: 3.6,

                spaceBetween: 20,

                speed: 1000,

            }

        }

    });



    new Swiper('.about-slider2', {

        loop: false,

        navigation: {

            prevEl: '.about-prev2',

            nextEl: '.about-next2',

        },

        breakpoints: {

            0: {

                slidesPerView: 1.2,

                spaceBetween: 10,

                speed: 500,

            },

            675: {

                slidesPerView: 2.2,

                spaceBetween: 12,

                speed: 1000,

            },

            992: {

                slidesPerView: 3.6,

                spaceBetween: 20,

                speed: 1000,

            }

        }

    });

    // About  SLIDER END ======================>





    // MORE BLOG DETAILS PAGE SLIDER START ======================>

    new Swiper('.blog-details-slider', {

        loop: false,

        navigation: {

            prevEl: '.blog-details-prev',

            nextEl: '.blog-details-next',

        },

        breakpoints: {

            0: {

                slidesPerView: 1.2,

                spaceBetween: 10,

                speed: 500,

            },

            675: {

                slidesPerView: 2,

                spaceBetween: 12,

                speed: 1000,

            },

            992: {

                slidesPerView: 4,

                spaceBetween: 20,

                speed: 1000,

            }

        }

    });



    // MORE BLOG DETAILS PAGE SLIDER END ======================>









    // Review Slider Start ====================>

    new Swiper('.review-slider', {

        loop: false,

        navigation: {

            prevEl: '.review-prev',

            nextEl: '.review-next',

        },

        breakpoints: {

            0: {

                slidesPerView: 1.2,

                spaceBetween: 10,

                speed: 500,

            },

            675: {

                slidesPerView: 2.2,

                spaceBetween: 12,

                speed: 1000,

            },

            992: {

                slidesPerView: 3,

                spaceBetween: 20,

                speed: 1000,

            }

        }

    });

    // Review Slider End ====================>





    // center slide START ======================>

    const swiper = new Swiper('.Leadership-slider', {

        loop: true,

        navigation: {

            prevEl: '.Leadership-prev',

            nextEl: '.Leadership-next',

        },

        breakpoints: {

            0: {

                slidesPerView: 1.2,

                // centeredSlides: true,

                spaceBetween: 20,

                speed: 1000,

            },

            992: {

                slidesPerView: 1.6,

                centeredSlides: true,

                spaceBetween: 20,

                speed: 1000,

            }

        },

        on: {

            slideChangeTransitionEnd: function () {

                $('.Leadership-slider .swiper-slide').removeClass('custom-active custom-prev custom-next');

                const activeSlide = this.slides[this.activeIndex];

                const prevSlide = this.slides[this.activeIndex - 1];

                const nextSlide = this.slides[this.activeIndex + 1];

                if (activeSlide) activeSlide.classList.add('custom-active');

                if (prevSlide) prevSlide.classList.add('custom-prev');

                if (nextSlide) nextSlide.classList.add('custom-next');

            },

            init: function () {

                const swiperInstance = this;

                setTimeout(() => {

                    swiperInstance.emit('slideChangeTransitionEnd');

                }, 0);

            }

        }

    });



    $('.Leadership-slider').on('click', '.swiper-slide', function () {

        const index = $(this).index();

        swiper.slideTo(index);

    });

    // center slide START ======================>



    $(document).ready(function () {

        $('.information-slider .swiper-slide .viewprofile').on('click', function () {

            var slide = $(this).closest('.swiper-slide');



            var imageUrl = slide.find('figure img').attr('src');

            var name = slide.find('.user-heading p:first-child').text();

            var degination = slide.find('.user-heading p:last-child').text();

            var text = slide.find('.desc p').text();

            var socialIcons = slide.find('.icon a').html();



            $('.information-pop .user-image img').attr('src', imageUrl);

            $('.information-pop .user-name p').html('<b> ' + name + '</b> ');

            $('.information-pop .degination p').html(degination);

            $('.information-pop .description-text p').text(text);

            $('.information-pop .social-icon').html(socialIcons);

        });

    });



    $(document).ready(function () {

        $('.information-slider-second .swiper-slide a').on('click', function () {

            var slide = $(this).closest('.swiper-slide');



            var imageUrl = slide.find('figure img').attr('src');

            var name = slide.find('figcaption h5').text();

            var degination = slide.find('figcaption p').text();

            var text = slide.find('.desc p').text();

            var socialIcons = slide.find('.icon a').html();



            $('.information-pop .user-image img').attr('src', imageUrl);

            $('.information-pop .user-name p').html('<b> ' + name + '</b> ');

            $('.information-pop .degination p').html(degination);

            $('.information-pop .description-text p').text(text);

            $('.information-pop .social-icon').html(socialIcons);

        });

    });



    // About Us Slider One ===========================->

    new Swiper(".proficiencies-swiper", {

        slidesPerView: 4,

        spaceBetween: 20,

        navigation: {

            nextEl: ".proficiencies-next",

            prevEl: ".proficiencies-prev",

        },

        breakpoints: {

            1024: {

                slidesPerView: 3

            },

            768: {

                slidesPerView: 2

            },

            480: {

                slidesPerView: 1.2

            },

            0: {

                spaceBetween: 20,

                slidesPerView: 1.2

            }

        }

    });





    // home page banner slider

    //

    new Swiper(".proejct-swiper-slider", {

        pagination: {

            el: '.proejct-slider-dots',

            clickable: true,

        },

        loop: true,

        breakpoints: {

            0: {

                slidesPerView: 1,

                spaceBetween: 50,

                speed: 1000,

                centeredSlides: true,

            },

            520: {

                slidesPerView: 1,

                spaceBetween: 50,

                speed: 1000,

                centeredSlides: true,

            },

            769: {

                slidesPerView: 1,

                spaceBetween: 50,

                speed: 1000,

                centeredSlides: true,

            },

            991: {

                slidesPerView: 1,

                spaceBetween: 70,

                speed: 1000,

                centeredSlides: true,

            },

            1100: {

                slidesPerView: 1,

                spaceBetween: 80,

                speed: 1000,

                centeredSlides: true

            }

        }

    });

    // home page banner slider end

    //==============================

    const body = document.querySelector("body");

    const header = document.querySelector("header");



    if (body.classList.contains("home-page") && header.classList.contains("header-fill")) {

        header.classList.remove("header-fill");

    }

    //==============================



    // testimonials slider

    new Swiper(".testimonials-slider", {

        pagination: {

            el: '.testimonials-dots',

            clickable: true,

        },

        loop: true,

        breakpoints: {

            0: {

                slidesPerView: 1,

                spaceBetween: 10,

                speed: 1000,

                centeredSlides: true,

            },

            520: {

                slidesPerView: 1,

                spaceBetween: 10,

                speed: 1000,

                centeredSlides: true,

            },

            769: {

                slidesPerView: 2,

                spaceBetween: 20,

                speed: 1000,

                centeredSlides: true,

            },

            991: {

                slidesPerView: 2.9,

                spaceBetween: 30,

                speed: 1000,

                centeredSlides: true,

            },

            1100: {

                slidesPerView: 2.9,

                spaceBetween: 40,

                speed: 1000,

                centeredSlides: true

            }

        }

    });

    // testimonials end



    //Sliders



    function commonSlider1(containerSelector, prevButtonSelector, nextButtonSelector) {

        return new Swiper(containerSelector, {

            loop: false,

            navigation: {

                prevEl: prevButtonSelector,

                nextEl: nextButtonSelector,

            },

            a11y: {

                enabled: false,

            },

            breakpoints: {

                0: {

                    slidesPerView: 1.2,

                    spaceBetween: 12,

                    speed: 500,

                },

                675: {

                    slidesPerView: 2,

                    spaceBetween: 12,

                    speed: 2000,

                },

                991: {

                    slidesPerView: 3,

                    spaceBetween: 20,

                    speed: 2000,

                },

                1153: {

                    slidesPerView: 4,

                    spaceBetween: 23,

                    speed: 2000,

                }

            }

        });

    }



    commonSlider1('.home-logo-slider', '.home-logo-prev', '.home-logo-next');

    commonSlider1('.more-blog-slider', '.more-blog-prev', '.more-blog-next')

    commonSlider1('.career-gallery-slider', '.career-gallery-prev', '.career-gallery-next')



    new Swiper('.logo-slider', {

        loop: true,

        a11y: {

            enabled: false,

        },

        autoplay: {

            delay: 0,

            disableOnInteraction: false,

        },

        breakpoints: {

            0: {

                slidesPerView: 3,

                spaceBetween: 16,

                speed: 3000,

            },

            521: {

                slidesPerView: 3,

                spaceBetween: 16,

                speed: 3000,

            },

            675: {

                slidesPerView: 3,

                spaceBetween: 16,

                speed: 3000,

            },

            991: {

                slidesPerView: 4,

                spaceBetween: 16,

                speed: 3000,

            },

            1153: {

                slidesPerView: 5,

                spaceBetween: 20,

                speed: 3000,

            }

        }

    });



    new Swiper('.product-preview-slider', {

        loop: false,

        speed: 500,

        slidesPerView: 1,

        spaceBetween: 0,

        navigation: {

            prevEl: '.product-preview-prev',

            nextEl: '.product-preview-next',

        },

        breakpoints: {

            0: {

                slidesPerView: 1,

                spaceBetween: 100,

                speed: 1000,

            },

            675: {

                slidesPerView: 1,

                spaceBetween: 100,

                speed: 1000,

            },

            991: {

                slidesPerView: 1,

                spaceBetween: 100,

                speed: 1000,

            },

            1153: {

                slidesPerView: 1,

                spaceBetween: 100,

                speed: 1000,

            }

        }

    });



    new Swiper('.detail-slider', {

        loop: true,

        speed: 1000,

        slidesPerView: 1,

        spaceBetween: 0,

        pagination: {

            el: ".detail-pagination",

            clickable: true

        },

        breakpoints: {

            0: {

                slidesPerView: 1,

                spaceBetween: 100,

                speed: 1000,

            },

            675: {

                slidesPerView: 1,

                spaceBetween: 100,

                speed: 1000,

            },

            991: {

                slidesPerView: 1,

                spaceBetween: 100,

                speed: 1000,

            },

            1153: {

                slidesPerView: 1,

                spaceBetween: 100,

                speed: 1000,

            }

        }

    });



    // filterswiper('.product-preview-slider', '.product-nav')



    new Swiper('.certificate-slider', {

        loop: true,

        speed: 2000,

        navigation: {

            prevEl: '.certificate-prev',

            nextEl: '.certificate-next',

        },

        autoplay: {

            delay: 2000,

            disableOnInteraction: false,

            pauseOnMouseEnter: true,

        },

        breakpoints: {

            0: {

                slidesPerView: 1.2,

                spaceBetween: 10,

                speed: 1500,

                centeredSlides: true,

                centeredSlidesBounds: true

            },

            768: {

                slidesPerView: 3,

                spaceBetween: 15,

                speed: 1500,

                centeredSlides: true,

            },

            992: {

                slidesPerView: 3,

                spaceBetween: 50,

                speed: 2000,

                centeredSlides: true,

            }

        }

    });



    new Swiper('.more-products-slider', {

        loop: false,

        navigation: {

            prevEl: '.more-products-prev',

            nextEl: '.more-products-next',

        },

        a11y: {

            enabled: false,

        },

        breakpoints: {

            0: {

                slidesPerView: 1.2,

                spaceBetween: 12,

                speed: 500,

            },

            675: {

                slidesPerView: 2,

                spaceBetween: 12,

                speed: 2000,

            },

            991: {

                slidesPerView: 4,

                spaceBetween: 30,

                speed: 2000,

            },

            1153: {

                slidesPerView: 5,

                spaceBetween: 42,

                speed: 2000,

            }

        }

    });





    new Swiper('.about-journey-slider', {

        slidesPerView: 1,

        spaceBetween: 20,

        speed: 1500,

        loop: false,

        pagination: {

            el: '.about-journey-pagination',

            clickable: true,

            bulletClass: `journey-btn`,

            bulletActiveClass: 'active',

            renderBullet: function (index, className) {

                const year = $('.about-journey-slider .swiper-slide').eq(index).attr('data-year');

                return `<button type="button" class="${className}"><span></span><p>${year}</p></button>`;

            }

        },

        on: {

            slideChange: function () {

                const $bullets = $('.about-journey-pagination .journey-btn');

                $bullets.removeClass('prev next');

                $bullets.filter('.journey-btn.active').prevAll().addClass('prev');

                $bullets.filter('.journey-btn.active').nextAll().addClass('next');

            }

        },

        navigation: {

            prevEl: '.about-journey-prev',

            nextEl: '.about-journey-next',

        },

    });



    // Bedge Slider End



});







