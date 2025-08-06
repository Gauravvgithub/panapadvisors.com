(function($) {
    "use strict";
    $(window).on("scroll", function() {
        if ($('#no-sticky-header').length) {
            return;
        }

        if ($("header").length) {
            var headerScrollPos = 300;
            var stricky = $(".main-header");

            if ($(window).scrollTop() > headerScrollPos) {
                setTimeout(function() {
                    stricky.addClass("sticky-fixed");
                });
                stricky.addClass("sticky-header--cloned");
            } else if ($(this).scrollTop() <= headerScrollPos) {
                stricky.removeClass("sticky-fixed");
                stricky.removeClass("sticky-header--cloned");
            }
        }
    });

    if ($(".preloader").length) {
        //Preloader
        $(window).on('load', function() {
            if ($('.preloader').length) {
                $('.preloader').delay(2500).fadeOut(100);
            }
        });
    }

    if ($('.main-header').length) {
        // search popup
        $('.search-btn').on('click', function() {
            $('body').addClass('search-active');
        });
        $(' .close-search').on('click', function() {
            $('body').removeClass('search-active');
        });
    }
    if ($('.header-menu-collaps').length) {
        // mobail nav
        $(".header-menu-collaps").click(function() {
            $(".mobile-nav-wrapper").addClass("expanded");
        });
        $(".mobile-nav-toggler").click(function() {
            $(".mobile-nav-wrapper").removeClass("expanded");
        });
        $(".header-menu-collaps").click(function() {
            $("body").addClass("locked");
        });
        $(".mobile-nav-toggler").click(function() {
            $("body").removeClass("locked");
        });

    }
    if ($('.header-side-menu').length) {
        // side menu
        $(".header-side-menu").click(function() {
            $(".side-menu-wrapper").addClass("expanded");
        });
        $(".side-menu-toggler").click(function() {
            $(".side-menu-wrapper").removeClass("expanded");
        });
        $(".header-side-menu").click(function() {
            $("body").addClass("locked");
        });
        $(".side-menu-toggler").click(function() {
            $("body").removeClass("locked");
        });

    }
    if ($(".mobile-nav-container .mobile-menu-list").length) {
        // mobaile nav bar 
        let dropdownAnchor = $(
            ".mobile-nav-container .mobile-menu-list .dropdown > a"
        );
        dropdownAnchor.each(function() {
            let self = $(this);
            let toggleBtn = document.createElement("BUTTON");
            toggleBtn.setAttribute("aria-label", "dropdown toggler");
            toggleBtn.innerHTML = "<i class='fa-solid fa-angle-right'></i>";
            self.append(function() {
                return toggleBtn;
            });
            self.find("button").on("click", function(e) {
                e.preventDefault();
                let self = $(this);
                self.toggleClass("expanded");
                self.parent().toggleClass("expanded");
                self.parent().parent().children("ul").slideToggle();
            });
        });
    }
    if ($('.banner-silder-one').length) {
        // banner-one slider
        var $slider = $('.banner-silder-one');
        $slider.slick({
            dots: true,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 6000,
            slidesToShow: 1,
            fade: true,
            cssEase: 'ease',
            arrows: false,
            slidesToScroll: 1
        });

        function updateSliderInfo() {
            var currentSlide = $slider.slick('slickCurrentSlide') + 1;
            var totalSlides = $slider.slick('getSlick').slideCount;
            $('#slider-info').text('Slide ' + currentSlide + ' / ' + totalSlides);
        }

        updateSliderInfo();

        $slider.on('afterChange', function(event, slick, currentSlide) {
            updateSliderInfo();
        });
    }
    if ($('.banner-slider-five').length) {
        // banner-five slider
        var $slider = $('.banner-slider-five');
        $slider.slick({
            dots: true,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 6000,
            slidesToShow: 1,
            fade: true,
            cssEase: 'ease',
            arrows: false,
            slidesToScroll: 1
        });

        function updateSliderInfo() {
            var currentSlide = $slider.slick('slickCurrentSlide') + 1;
            var totalSlides = $slider.slick('getSlick').slideCount;
            $('#slider-info-2').text('Slide ' + currentSlide + ' / ' + totalSlides);
        }

        updateSliderInfo();

        $slider.on('afterChange', function(event, slick, currentSlide) {
            updateSliderInfo();
        });
    }
    if ($('.patner-slider-one').length) {
        // partner-one slider
        $('.patner-slider-one').slick({
            speed: 5000,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            responsive: [{
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        })
    }

    if ($('.patner-slider-two').length) {
        // partner-two slider
        $('.patner-slider-two').slick({
            speed: 5000,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        })
    }
    if ($('.patner-slider-four').length) {
        // partner-four slider
        $('.patner-slider-four').slick({
            speed: 5000,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            responsive: [{
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        })
    }

    // wow animation
    if ($(".wow").length) {
        var wow = new WOW({
            boxClass: "wow",
            animateClass: "animated",
            mobile: true,
            live: true
        });
        wow.init();
    }
    $(window).on('scroll', function() {
        //  .service-icon-one  avg animation
        $('.service-icon-one, .service-left-one, .about-right-one, .work-left-one, .service-icon-two, .why-choose-box-two, .nav-link, .about-icon-three, .service-box-three, .why-choose-box-three, .benefit-box-four, .counter-one, .banner-box-icon-five ').each(function() {
            var $this = $(this);
            var position = $this.offset().top;
            var windowHeight = $(window).height();
            var scrollTop = $(window).scrollTop();

            if (position <= scrollTop + windowHeight && position + $this.height() >= scrollTop) {
                $this.find('svg').addClass('animated-svg');
            } else {
                $this.find('svg').removeClass('animated-svg');
            }
            if (position <= scrollTop + windowHeight && position + $this.height() >= scrollTop) {
                $this.find('.service-left-details-one , .about-details-one, .work-details-one, .counter-box-one').addClass('active');
            } else {
                $this.find('.service-left-details-one, .about-details-one, .work-details-one ').removeClass('active');
            }
        });
    });

    if ($('.testimonial-slider-one').length) {
        // testimonial-one slider
        $('.testimonial-slider-one').slick({
            speed: 500,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="assets/images/svg/aerrow-pre.svg" alt="icon">PREW</button>',
            nextArrow: '<button type="button" class="slick-next">Next<img src="assets/images/svg/aerrow-next.svg" alt="icon"></button>'
        })
    }

    if ($('.testimonial-section-two').length) {
        // testimonial-one slider
        $('.testimonial-slider-two').slick({
            speed: 500,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            asNavFor: '.testimonial-slider-thumb',
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="assets/images/svg/arrow-left.svg" alt="icon"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="assets/images/svg/arrow-right.svg" alt="icon"></button>'
        })
        $('.testimonial-slider-thumb').slick({
            speed: 500,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            dots: false,
            asNavFor: '.testimonial-slider-two',
            arrows: false
        })
    }

    if ($('.portfolio-slider-two').length) {
        // portfolio-two slider
        $('.portfolio-slider-two').slick({
            speed: 1500,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            dots: false,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="assets/images/svg/Next.svg" alt="icon"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="assets/images/svg/Next-2.svg" alt="icon"></button>'
        })

    }
    if ($('.testimonial-slider-four').length) {
        // testimonial-four slider
        $('.testimonial-slider-four').slick({
            speed: 500,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="assets/images/svg/arrow-left.svg" alt="icon"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="assets/images/svg/arrow-right.svg" alt="icon"></button>'
        })
    }
    if ($('.testimonial-slider-three').length) {
        // testimonial three slider
        $('.testimonial-slider-three-2').slick({
            speed: 500,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            dots: false,
            asNavFor: '.testimonial-slider-three-1',
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="assets/images/svg/aerrow-pre.svg" alt="icon"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="assets/images/svg/aerrow-next.svg" alt="icon"></button>'
        })
        $('.testimonial-slider-three-1').slick({
            speed: 500,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            dots: false,
            asNavFor: '.testimonial-slider-three-2',
            arrows: false
        })
    }

    // ---------------video-popup
    if ($(".video-play-one,.why-choose-play-btn").length) {
        $('.video-play-one a ,.why-choose-play-btn').YouTubePopUp();
    }

    if ($('.why-choose-section-one').length) {
        // why choose image animation effect
        window.addEventListener('scroll', function() {
            const elementsToAnimate = document.querySelectorAll('.why-choose-background-image-one img');

            elementsToAnimate.forEach((element) => {
                let winPos = window.pageYOffset;
                let targetPos = winPos * 0.05;
                element.style.transition = 'transform 0.8s ease-out';
                element.style.transform = `translateY(${targetPos}px) scale(1.2)`;
            });
        });
    }

    $(window).on('scroll', function() {
        // counter animation
        $('.counter-one, .about-counter-two, .about-counter-four, .why-choose-left-four').each(function() {
            var $this = $(this);
            var position = $this.offset().top;
            var windowHeight = $(window).height();
            var scrollTop = $(window).scrollTop();

            if (position <= scrollTop + windowHeight && position + $this.height() >= scrollTop) {
                if (!$this.hasClass('counter-animated')) {
                    $this.addClass('counter-animated');
                    $('.counter').each(function() {
                        $(this).prop('Counter', 0).animate({
                            Counter: $(this).text()
                        }, {
                            duration: 4000,
                            easing: 'swing',
                            step: function(now) {
                                $(this).text(Math.ceil(now));
                            }
                        });
                    });
                }
            }
        });
    });

    if ($('.blog-one-slider').length) {
        // blog-one slider
        $('.blog-one-slider').slick({
            speed: 500,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            dots: false,
            arrows: false,
            responsive: [{
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 479,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: '0px',
                    }
                }
            ]
        })
    }

    // banner curved-circle
    function loan_cuved_circle() {
        let circleTypeElm = $(".curved-circle--item");
        if (circleTypeElm.length) {
            circleTypeElm.each(function() {
                let elm = $(this);
                let options = elm.data("circle-text-options");
                elm.circleType(
                    "object" === typeof options ? options : JSON.parse(options)
                );
            });
        }

        let thmcircleGraphic = $(".circleGraphic");
        //protfolio circle
        if (thmcircleGraphic.length) {
            thmcircleGraphic.each(function() {
                let elm = $(this);
                elm.appear(function() {
                    let options = elm.data("circle-options");
                    let thmcircleGraphic = elm.circleGraphic(
                        "object" === typeof options ? options : JSON.parse(options)
                    );
                });
            });
        }
    }
    $(window).on("load", function() {
        loan_cuved_circle();
    });


    if ($('.portfolio-slider-three').length) {
        // text-one slider
        $('.portfolio-slider-three').slick({
            speed: 8000,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            slidesToScroll: 1,
            variableWidth: true,
            dots: false,
            arrows: false,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        })
    }

    if ($('.portfolio-section-four').length) {
        //portfolio image cheng on hover
        $('.portfolio-box-four').hover(function() {
            var imgSrc = $(this).find('.portfolio-image-four > img').attr('src');

            $('.portfolio-background').css('background-image', 'url(' + imgSrc + ')');
        });
    }

    if ($('.service-slider-five').length) {
        // service-slider five
        $('.service-slider-five').slick({
            speed: 500,
            autoplay: true,
            autoplaySpeed: 5000,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            variableWidth: true
        })
    }

    if ($('.testimonial-slider-five').length) {
        // testimonial-five slider
        $('.testimonial-slider-five').slick({
            speed: 500,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="assets/images/testimonial/testimonial-five-pre.svg" alt="icon"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="assets/images/testimonial/testimonial-five-next.svg" alt="icon"></button>'
        })
    }



    // pricing monthly and yaerly
    if ($('.sweech-box-pricing-one').length) {
        $('.monthly-pricing').addClass('active');
        $('.monthly-box-one').show();
        $('.yearly-box-one').hide();
    }
    $('.sweech-box-pricing-one').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.yearly-pricing').addClass('active');
            $('.monthly-pricing').removeClass('active');

            $('.yearly-box-one').show();
            $('.monthly-box-one').hide();
        } else {
            $('.monthly-pricing').addClass('active');
            $('.yearly-pricing').removeClass('active');

            $('.monthly-box-one').show();
            $('.yearly-box-one').hide();
        }
    });

    if ($('.partner-slider-five').length) {
        // partner-five slider
        $('.partner-slider-five').slick({
            speed: 5000,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        })
    }

    if ($('.work-process-one').length) {
        // work section one fill line 
        function checkScroll() {
            $('.work-process-one').each(function() {
                var sectionTop = $(this).offset().top;
                var sectionBottom = sectionTop + $(this).outerHeight();
                var viewportTop = $(window).scrollTop();
                var viewportBottom = viewportTop + $(window).height();

                if (sectionBottom > viewportTop && sectionTop < viewportBottom) {
                    var pValue = $(this).find('.work-process-text').text().trim();

                    if (pValue.endsWith('%')) {
                        var percentage = pValue.replace('%', '');
                        $(this).find('.work-processing > span').css('width', percentage + '%');
                    }
                }
            });
        }

        checkScroll();

        $(window).on('scroll', function() {
            checkScroll();
        });
    }

    if ($('.btn-theme').length) {
        $('.btn-theme').each(function() {
            var text = $(this).text();
            var newContent = '';
            var spaceAdded = false;

            for (var i = 0; i < text.length; i++) {
                var char = text.charAt(i);

                if (char === ' ') {
                    if (!spaceAdded) {
                        newContent += '<span class="space"></span>';
                        spaceAdded = true;
                    }
                } else {
                    newContent += '<span>' + char + '</span>';
                    spaceAdded = false;
                }
            }

            $(this).html(newContent);
        });
    }
    // scroll up
    if ($('.prgoress_indicator path').length) {
        var progressPath = document.querySelector('.prgoress_indicator path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function() {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).on('scroll', updateProgress);
        var offset = 250;
        var duration = 550;
        jQuery(window).on('scroll', function() {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.prgoress_indicator').addClass('active-progress');
            } else {
                jQuery('.prgoress_indicator').removeClass('active-progress');
            }
        });
        jQuery('.prgoress_indicator').on('click', function(event) {
            event.preventDefault();
            jQuery('html, body').animate({
                scrollTop: 0
            }, duration);
            return false;
        });
    }

    if ($('.fillter-option').length) {
        $('.fillter-option').select2();
    }

    if ($('.fillter-widget').length) {
        const $sliderBar = $('#fillter-rang');
        const $sliderHandle = $('#fillter-rang-handle');
        const $maxPrice = $('#max-price');

        const minPrice = 100;
        const maxPrice = 1500;
        const sliderWidth = $sliderBar.width();

        function updatePrice(position) {
            const value = Math.round((position / sliderWidth) * (maxPrice - minPrice) + minPrice);
            $maxPrice.text(`$${value}`);
            $sliderHandle.css('left', position);
        }

        updatePrice(300);

        $sliderBar.on('click', function(event) {
            const offset = $(this).offset();
            const position = event.pageX - offset.left;
            if (position >= 0 && position <= sliderWidth) {
                updatePrice(position);
            }
        });

        let isDragging = false;

        $sliderHandle.on('mousedown', function(e) {
            isDragging = true;

            $(document).on('mousemove', function(e) {
                if (isDragging) {
                    const offset = $sliderBar.offset();
                    let position = e.pageX - offset.left;

                    if (position < 0) position = 0;
                    if (position > sliderWidth) position = sliderWidth;

                    updatePrice(position);
                }
            });

            $(document).on('mouseup', function() {
                isDragging = false;
                $(document).off('mousemove mouseup');
            });
        });
    }

    if ($('.shop-details-section').length) {
        // product-slider
        $('.product-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.product-thumb-slider'
        })
        $('.product-thumb-slider').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.product-slider',
            dots: false,
            variableWidth: true,
            focusOnSelect: true
        })
        const zoom = 2;
        $('.product-slide-item').each(function() {
            const magnifier = $(this).find('.magnifier');
            const img = $(this).find('img');

            img.on('mousemove', function(e) {
                magnifier.show();

                const rect = img[0].getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                magnifier.css({
                    'left': x - magnifier.width() / 2 + 'px',
                    'top': y - magnifier.height() / 2 + 'px',
                    'background-image': 'url(' + img.attr('src') + ')',
                    'background-size': img.width() * zoom + 'px ' + img.height() * zoom + 'px',
                    'background-position': `-${x * zoom - magnifier.width() / 2}px -${y * zoom - magnifier.height() / 2}px`
                });
            });

            img.on('mouseleave', function() {
                magnifier.hide();
            });
        });
    }

    if ($('.product-cart-info-box').length) {
        // product cart count
        $('.product-cart-info-box .plus').on('click', function() {
            var totalGuestsElement = $(this).siblings('.product-item-count');
            var currentCount = parseInt(totalGuestsElement.text(), 10);
            totalGuestsElement.text(currentCount + 1);
        });
        $('.product-cart-info-box .minus').on('click', function() {
            var totalGuestsElement = $(this).siblings('.product-item-count');
            var currentCount = parseInt(totalGuestsElement.text(), 10);
            if (currentCount > 0) {
                totalGuestsElement.text(currentCount - 1);
            }
        });
    }

    /*------custom-cursor-----*/
    if ($(".custom-cursor").length) {
        var cursor = document.querySelector(".custom-cursor-one");
        var cursorinner = document.querySelector(".custom-cursor-two");
        var a = document.querySelectorAll("a");

        document.addEventListener("mousemove", function(e) {
            var x = e.clientX;
            var y = e.clientY;
            cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
        });

        document.addEventListener("mousemove", function(e) {
            var x = e.clientX;
            var y = e.clientY;
            cursorinner.style.left = x + "px";
            cursorinner.style.top = y + "px";
        });

        document.addEventListener("mousedown", function() {
            cursor.classList.add("click");
            cursorinner.classList.add("custom-cursor-innerhover");
        });

        document.addEventListener("mouseup", function() {
            cursor.classList.remove("click");
            cursorinner.classList.remove("custom-cursor-innerhover");
        });

        a.forEach((item) => {
            item.addEventListener("mouseover", () => {
                cursor.classList.add("custom-cursor-hover");
            });
            item.addEventListener("mouseleave", () => {
                cursor.classList.remove("custom-cursor-hover");
            });
        });
    }


    // menu four 
    $('.header-four ul.main-menu-list>li').click(function() {
        // Toggle the 'active' class on the clicked item
        $(this).toggleClass('active');

        // Remove 'active' class from all other list items
        $('.header-four ul.main-menu-list>li').not(this).removeClass('active');
    });

})
(window.jQuery);