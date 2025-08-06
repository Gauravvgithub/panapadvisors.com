(function ($) {
    "use strict";
    var animateText = function () {
        if (window.innerWidth <= 550) {
            let animatedTextElements = document.querySelectorAll(
                ".text-anime-wave, .text-anime-wave-1, .text-anime-wave-2"
            );

            animatedTextElements.forEach((element) => {
                if (element.animation) {
                    element.animation.progress(1).kill();
                }
                gsap.set(element, { clearProps: "all" });
            });

            return;
        }

        if (
            $(".text-anime-wave, .text-anime-wave-1, .text-anime-wave-2").length > 0
        ) {
            let animatedTextElements = document.querySelectorAll(
                ".text-anime-wave, .text-anime-wave-1, .text-anime-wave-2, .text-anime-wave-3"
            );

            animatedTextElements.forEach((element) => {
                if (element.animation) {
                    element.animation.progress(1).kill();
                }

                let origin = "left center";
                let rotateStart = -90;
                let delay = parseFloat(element.getAttribute("data-delay")) || 0;

                if (element.classList.contains("text-anime-wave-1")) {
                    origin = "center center";
                } else if (element.classList.contains("text-anime-wave-2")) {
                    origin = "right center";
                    rotateStart = 90;
                }

                gsap.set(element, {
                    opacity: 0,
                    rotateY: rotateStart,
                    transformOrigin: origin,
                });

                element.animation = gsap.to(element, {
                    scrollTrigger: {
                        trigger: element,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                    opacity: 1,
                    rotateY: 0,
                    duration: 1,
                    delay: delay,
                    ease: "back.out(1.7)",
                });
            });
        }
        if ($(".text-color-change").length) {
            let animatedTextElements =
                document.querySelectorAll(".text-color-change");

            animatedTextElements.forEach((element) => {
                if (element.wordSplit) {
                    element.wordSplit.revert();
                }
                if (element.charSplit) {
                    element.charSplit.revert();
                }

                element.wordSplit = new SplitText(element, {
                    type: "words",
                    wordsClass: "word-wrapper",
                });

                element.charSplit = new SplitText(element.wordSplit.words, {
                    type: "chars",
                    charsClass: "char-wrapper",
                });

                gsap.set(element.charSplit.chars, {
                    color: "#A2A3AB",
                    opacity: 1,
                });

                element.animation = gsap.to(element.charSplit.chars, {
                    scrollTrigger: {
                        trigger: element,
                        start: "top 90%",
                        end: "bottom 35%",
                        toggleActions: "play none none reverse",
                        scrub: true,
                    },
                    color: "#24283E",
                    stagger: {
                        each: 0.05,
                        from: "start",
                    },
                    duration: 0.5,
                    ease: "power2.out",
                });
            });
        }
    };
    
    var animateImgItem = function () {
        const isSmallScreen = window.matchMedia("(max-width: 550px)").matches;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const delay =
                            parseFloat(entry.target.getAttribute("data-delay")) || 0;
                        setTimeout(() => {
                            $(entry.target).addClass("active-animate");
                        }, delay * 1000);
                    }
                });
            },
            {
                threshold: isSmallScreen ? 0.1 : 0.1,
            }
        );

        const elements = $(
            ".tf-animate-1, .tf-animate-2, .tf-animate-3, .tf-animate-4"
        );
        elements.each(function () {
            observer.observe(this);
        });

        const checkVisible = () => {
            elements.each(function () {
                const sectionOffsetTop = $(this).offset().top;
                const sectionHeight = $(this).outerHeight();
                const scrollPosition = $(window).scrollTop();
                const windowHeight = $(window).height();

                if (
                    scrollPosition + windowHeight * 0.9 > sectionOffsetTop &&
                    scrollPosition < sectionOffsetTop + sectionHeight
                ) {
                    const delay = parseFloat($(this).attr("data-delay")) || 0;
                    setTimeout(() => {
                        $(this).addClass("active-animate");
                    }, delay * 1000);
                }
            });
        };

        $(document).ready(checkVisible);
        $(window).on("scroll", checkVisible);
    };

    var animateImgScroll = function () {
        if (window.matchMedia("(min-width: 992px)").matches) {
            if ($("div").hasClass("scroll-tranform")) {
                gsap.to(".scroll-tranform", {
                    y: -100,
                    scrollTrigger: {
                        trigger: ".scroll-tranform-section",
                        start: "top center",
                        end: "bottom top",
                        scrub: 3,
                    },
                });
            }
            if ($("div").hasClass("scroll-tranform-up")) {
                gsap.to(".scroll-tranform-up", {
                    y: 100,
                    scrollTrigger: {
                        trigger: ".scroll-tranform-section",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 3,
                    },
                });
            }
        }
    };

    var animateParalaxImg = function () {
        if (window.matchMedia("(min-width: 768px)").matches) {
            gsap.utils.toArray(".img-paralax").forEach((img) => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: img,
                        scrub: 3,
                        pin: false,
                    },
                });

                tl.fromTo(
                    img,
                    { yPercent: 0, ease: "none" },
                    { yPercent: -10, ease: "none" }
                );
            });
        }
    };

   

    $(window).on("load", function () {
        animateText();
        animateImgItem();
        animateImgScroll();
        animateParalaxImg();
    });
})(jQuery);
