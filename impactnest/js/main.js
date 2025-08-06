/**
 *
 * preloader
 * headerSticky
 * footer
 * changeValue
 * video
 * btnSearch
 * infiniteScroll
 * textRotate
 * counter
 * progresslevel
 * totalNumberVariant
 * deleteFile
 * datePicker
 * autoPopup
 * ajaxContactForm
 * goTop
 * preloader
 *
 **/

(function ($) {
    ("use strict");

    var headerSticky = function () {
        let lastScrollTop = 0;
        let delta = 5;
        let navbarHeight = $(".header-sticky").outerHeight();
        let didScroll = false;

        $(window).scroll(function () {
            didScroll = true;
        });

        setInterval(function () {
            if (didScroll) {
                let st = $(window).scrollTop();
                navbarHeight = $(".header-sticky").outerHeight();

                if (st > navbarHeight) {
                    if (st > lastScrollTop + delta) {
                        $(".header-sticky").css("top", `-${navbarHeight}px`);
                    } else if (st < lastScrollTop - delta) {
                        $(".header-sticky").css("top", "0");
                        // $(".header-sticky").addClass("header-bg");
                    }
                } else {
                    $(".header-sticky").css("top", "unset");
                    $(".header-sticky").removeClass("header-bg");
                }
                lastScrollTop = st;
                didScroll = false;
            }
        }, 250);
    };

    var headerFixed = function () {
        if ($(".header-fixed").length) {
            const $header = $(".header-fixed");
            const navbarHeight = $header.outerHeight();
            const scrollThreshold = $header.data("scroll-threshold")
            $(window).on("scroll", function () {
                const scrollTop = $(this).scrollTop();
                $header.toggleClass("is-fixed", scrollTop >= scrollThreshold);
            });
        }

        $(".inner-link").click(function () {
            $(this)
                .closest(".navigation")
                .find("li.inner-link")
                .removeClass("current-menu");
            $(this).addClass("current-menu");
        });

        window.addEventListener("scroll", function () {
            let current = "";
            const sections = document.querySelectorAll(".section-one-page");
            const navLinks = document.querySelectorAll(".inner-link ");

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.pageYOffset >= sectionTop - 180) {
                    current = section.getAttribute("id");
                }
            });

            navLinks.forEach((link) => {
                link.classList.remove("current-menu");
                if (
                    link.querySelector("a").getAttribute("href") ===
                    `#${current}`
                ) {
                    link.classList.add("current-menu");
                }
            });
        });
    };

    var footer = function () {
        function checkScreenSize() {
            if (window.matchMedia("(max-width: 550px)").matches) {
                $(".tf-collapse-content").css("display", "none");
            } else {
                $(".footer-menu-list").siblings().removeClass("open");
                $(".tf-collapse-content").css("display", "unset");
            }
        }
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        var args = { duration: 250 };
        $(".title-mobile").on("click", function () {
            $(this).parent(".footer-col-block").toggleClass("open");
            if (!$(this).parent(".footer-col-block").is(".open")) {
                $(this).next().slideUp(args);
            } else {
                $(this).next().slideDown(args);
            }
        });
    };

    var changeValue = function () {
        if ($(".tf-dropdown-sort").length > 0) {
            $(".select-item").click(function (event) {
                $(this)
                    .closest(".tf-dropdown-sort")
                    .find(".text-sort-value")
                    .text($(this).find(".text-value-item").text());

                $(this)
                    .closest(".dropdown-menu")
                    .find(".select-item.active")
                    .removeClass("active");

                $(this).addClass("active");

                var color = $(this).data("value-color");
                $(this)
                    .closest(".tf-dropdown-sort")
                    .find(".btn-select")
                    .find(".current-color")
                    .css("background", color);
            });
        }
    };

    var video = function () {
        if (
            $("div").hasClass("wg-video") ||
            $("div").hasClass("post-format-video") ||
            $("div").hasClass("wg-curve-text")
        ) {
            $(".popup-youtube, .wg-curve-text-video").magnificPopup({
                type: "iframe",
            });
        }
    };

    var btnSearch = function () {
        $(document).on("click", function (e) {
            if (!$(e.target).closest(".search-btn, .form-search").length) {
                $(".top-search, .search-btn").removeClass("active");
                $("body").removeClass("no-scroll");
            }
        });

        $(".search-btn").on("click", function (e) {
            e.stopPropagation();
            $(".top-search, .search-btn").toggleClass("active");

            if ($(".top-search").hasClass("active")) {
                $("body").addClass("no-scroll");
            } else {
                $("body").removeClass("no-scroll");
            }
        });

        $(".form-search").on("click", function (e) {
            e.stopPropagation();
        });

        $(".button-close").on("click", function () {
            $(".top-search, .search-btn").removeClass("active");
            $("body").removeClass("no-scroll");
        });
    };

    var infiniteScroll = function () {
        if ($("body").hasClass("loadmore")) {
            $(".fl-item").slice(0, 9).show();
            $(".fl-item-1").slice(0, 6).show();
            $(".fl-item-2").slice(0, 9).show();
            $(".fl-item-3").slice(0, 9).show();
            $(".fl-item-4").slice(0, 9).show();
            $(".fl-item-5").slice(0, 12).show();
            if ($(".scroll-loadmore").length > 0) {
                $(window).scroll(function () {
                    if (
                        $(window).scrollTop() >=
                        $(document).height() - $(window).height()
                    ) {
                        setTimeout(() => {
                            $(".fl-item:hidden").slice(0, 4).show();
                            if ($(".fl-item:hidden").length == 0) {
                                $(".view-more-button").hide();
                            }
                        });
                    }
                });
            }
            if ($(".loadmore-item").length > 0) {
                $(".btn-loadmore").on("click", function () {
                    setTimeout(() => {
                        $(".fl-item:hidden").slice(0, 3).show();
                        if ($(".fl-item:hidden").length == 0) {
                            $(".view-more-button").hide();
                        }
                    }, 600);
                });
            }
            if ($(".loadmore-item-1").length > 0) {
                $(".btn-loadmore-1").on("click", function () {
                    setTimeout(() => {
                        $(".fl-item-1:hidden").slice(0, 3).show();
                        if ($(".fl-item-1:hidden").length == 0) {
                            $(".view-more-button-1").hide();
                        }
                    }, 600);
                });
            }
            if ($(".loadmore-item-2").length > 0) {
                $(".btn-loadmore-2").on("click", function () {
                    setTimeout(() => {
                        $(".fl-item-2:hidden").slice(0, 3).show();
                        if ($(".fl-item-2:hidden").length == 0) {
                            $(".view-more-button-2").hide();
                        }
                    }, 600);
                });
            }
            if ($(".loadmore-item-3").length > 0) {
                $(".btn-loadmore-3").on("click", function () {
                    setTimeout(() => {
                        $(".fl-item-3:hidden").slice(0, 3).show();
                        if ($(".fl-item-3:hidden").length == 0) {
                            $(".view-more-button-3").hide();
                        }
                    }, 600);
                });
            }
            if ($(".loadmore-item-4").length > 0) {
                $(".btn-loadmore-4").on("click", function () {
                    setTimeout(() => {
                        $(".fl-item-4:hidden").slice(0, 3).show();
                        if ($(".fl-item-4:hidden").length == 0) {
                            $(".view-more-button-4").hide();
                        }
                    }, 600);
                });
            }
            if ($(".loadmore-item-5").length > 0) {
                $(".btn-loadmore-5").on("click", function () {
                    setTimeout(() => {
                        $(".fl-item-5:hidden").slice(0, 3).show();
                        if ($(".fl-item-5:hidden").length == 0) {
                            $(".view-more-button-5").hide();
                        }
                    }, 600);
                });
            }
        }
    };

    var textRotate = function () {
        if ($(".wg-curve-text").length > 0) {
            if ($(".text-rotate").length > 0) {
                const text = "It Consuling * It Consuling * It Consuling *";
                const chars = text.split("");
                const degree = 360 / chars.length;

                $(".text-rotate .text").each(function () {
                    const $circularText = $(this);
                    $circularText.empty();
                    chars.forEach((char, i) => {
                        const $span = $("<span></span>")
                            .text(char)
                            .css({
                                transform: `rotate(${i * degree}deg)`,
                            });
                        $circularText.append($span);
                    });
                });
            }
        }
    };

    var counter = function () {
        if ($(document.body).hasClass("counter-scroll")) {
            const observer = new IntersectionObserver(
                (entries, observer) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const element = $(entry.target);

                            if (!element.hasClass("odometer-activated")) {
                                const to = element.data("to");
                                element.addClass("odometer-activated");

                                element.html(to);
                            }

                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.5 }
            );

            $(".counter .number").each(function () {
                observer.observe(this);
            });
        }
    };

    var progresslevel = function () {
        if ($("div").hasClass("progress-bars")) {
            var bars = document.querySelectorAll(".progress-bars-line > div");
            setInterval(function () {
                bars.forEach(function (bar) {
                    var t1 = parseFloat(bar.dataset.progress);
                    var t2 = parseFloat(bar.dataset.max);
                    var getWidth = (t1 / t2) * 100;
                    bar.style.width = getWidth + "%";
                });
            }, 500);
        }
    };

    var totalNumberVariant = function () {
        $(".tf-product-info-wrap,.tf-cart-item").each(function () {
            var productItem = $(this);
            var quantityInput = productItem.find(".quantity-product");
            var quantityEl = productItem.find(".quantity-product-2");
            var priceEl = productItem.find(".cart-price");
            var totalEl = productItem.find(".cart-total");

            var updateTotalPrice = function () {
                var currentQuantity = parseInt(quantityInput.val());
                var price = parseFloat(priceEl.text().replace("$", ""));
                var totalPrice = (currentQuantity * price).toFixed(2);
                totalEl.text("$" + totalPrice);
                console.log(totalPrice);
            };

            productItem.find(".btn-increase").on("click", function () {
                var currentQuantity = parseInt(quantityInput.val());
                quantityInput.val(currentQuantity + 1);
                quantityEl.val(currentQuantity + 1);
                updateTotalPrice();
            });

            productItem.find(".btn-decrease").on("click", function () {
                var currentQuantity = parseInt(quantityInput.val());
                if (currentQuantity > 1) {
                    quantityInput.val(currentQuantity - 1);
                    quantityEl.val(currentQuantity - 1);
                    updateTotalPrice();
                }
            });
        });
    };

    var deleteFile = function (e) {
        $(".remove").on("click", function (e) {
            e.preventDefault();
            var $this = $(this);
            $this.closest(".file-delete").remove();
        });
        $(".clear-file-delete").on("click", function (e) {
            e.preventDefault();
            $(this).closest(".list-file-delete").find(".file-delete").remove();
        });
    };

    var datePicker = function () {
        if ($("#datepicker").length > 0) {
            $("#datepicker").datepicker({
                firstDay: 1,
                dateFormat: "dd/mm/yy",
            });
        }
        if ($("#datepicker2").length > 0) {
            $("#datepicker2").datepicker({
                firstDay: 1,
                dateFormat: "dd/mm/yy",
            });
        }
        if ($("#datepicker3").length > 0) {
            $("#datepicker3").datepicker({
                firstDay: 1,
                dateFormat: "dd/mm/yy",
            });
        }
    };

    var autoPopup = function () {
        if ($("body").hasClass("popup-loader")) {
            if ($(".auto-popup").length > 0) {
                let showPopup = sessionStorage.getItem("showPopup");
                if (!JSON.parse(showPopup)) {
                    setTimeout(function () {
                        $(".auto-popup").modal("show");
                    }, 3000);
                }
            }
            $(".btn-hide-popup").on("click", function () {
                sessionStorage.setItem("showPopup", true);
            });
        }
    };

    var ajaxContactForm = function () {
        $("#contactform,#commentform").each(function () {
            $(this).validate({
                submitHandler: function (form) {
                    var $form = $(form),
                        str = $form.serialize(),
                        loading = $("<div />", { class: "loading" });

                    $.ajax({
                        type: "POST",
                        url: $form.attr("action"),
                        data: str,
                        beforeSend: function () {
                            $form.find(".send-wrap").append(loading);
                        },
                        success: function (msg) {
                            var result, cls;
                            if (msg === "Success") {
                                result = "Message Sent Successfully To Email Administrator";
                                cls = "msg-success";
                            } else {
                                result = "Error sending email.";
                                cls = "msg-error";
                            }

                            $form.prepend(
                                $("<div />", {
                                    class: "flat-alert mb-20 " + cls,
                                    text: result,
                                }).append(
                                    $(
                                        '<a class="close mt-0" href="#"><i class="fa fa-close"></i></a>'
                                    )
                                )
                            );

                            $form.find(":input").not(".submit").val("");
                        },
                        complete: function (xhr, status, error_thrown) {
                            $form.find(".loading").remove();
                        },
                    });
                },
            });
        });
    };

    var optimizedTabsHandle = function () {
        var toggleSwitch = document.getElementById("toggleSwitch");
        var monthlyPlan = document.getElementById("monthlyPlan");
        var yearlyPlan = document.getElementById("yearlyPlan");
        var monthlyLabel = document.getElementById("monthlyLabel");
        var yearlyLabel = document.getElementById("yearlyLabel");

        if (!toggleSwitch) return;

        function togglePricing() {
            toggleSwitch.classList.toggle("is-active");
            monthlyPlan.classList.toggle("is-active");
            yearlyPlan.classList.toggle("is-active");

            if (monthlyPlan.classList.contains("is-active")) {
                monthlyLabel.classList.add("is-active");
                yearlyLabel.classList.remove("is-active");
            } else {
                monthlyLabel.classList.remove("is-active");
                yearlyLabel.classList.add("is-active");
            }
        }

        toggleSwitch.addEventListener("click", togglePricing);
    };

    var handleProgress = function () {
        $(".progress-cart").each(function () {
            var progressValue = $(this).find(".value").data("progress");
            if (progressValue !== undefined) {
                $(this)
                    .find(".value")
                    .css("width", progressValue + "%");
            }
        });
        if ($(".modal-shopping-cart").length > 0) {
            $(".modal-shopping-cart").on("hide.bs.modal", function () {
                $(".tf-progress-bar .value").css("width", "0%");
            });
            $(".modal-shopping-cart").on("show.bs.modal", function () {
                setTimeout(function () {
                    var progressValue = $(".tf-progress-bar .value").data("progress");
                    $(".tf-progress-bar .value").css("width", progressValue + "%");
                }, 600);
            });
        }
    };

    var activeStep = function () {
        if ($(".hover-active-step").length) {
            $(document).ready(function () {
                $(".hover-active-step .step-hover").hover(function () {
                    let hoveredIndex = $(".hover-active-step .step-hover").index(this);

                    $(".hover-active-step .step-hover").each(function (index) {
                        if (index <= hoveredIndex && !$(this).hasClass("active")) {
                            let $item = $(this);
                            setTimeout(function () {
                                $item.addClass("active");
                            }, index * 300);
                        }
                    });
                });
            });
        }
    };

    var RTL = function () {
        if (localStorage.getItem("dir") === "rtl") {
            $("html").attr("dir", "rtl");
            $("body").addClass("rtl");
            $("#toggle-rtl").text("ltr");
            $(
                ".tf-slideshow .tf-btn,.view-all-demo .tf-btn, .pagination-link, .pagination-item, .tf-breadcrumb-list,.tf-list-categories.style-1, .tf-list-categories .categories-item"
            )
                .find(".icon-arrRight")
                .removeClass("icon-arrRight")
                .addClass("icon-arrLeft");
        } else {
            $("html").attr("dir", "ltr");
            $("body").removeClass("rtl");
            $("#toggle-rtl").text("rtl");
        }
        $("#toggle-rtl").on("click", function () {
            if ($("html").attr("dir") === "rtl") {
                localStorage.setItem("dir", "ltr");
                $("#toggle-rtl").text("rtl");
            } else {
                localStorage.setItem("dir", "rtl");
                $("#toggle-rtl").text("ltr");
            }
            location.reload();
        });
    };

    var hoverProject = function () {
        var projectItems = document.querySelectorAll(".project-item");
        var imageProjects = document.querySelectorAll(".image-project");

        projectItems.forEach((item, index) => {
            item.addEventListener("mouseenter", function () {
                projectItems.forEach((el) => el.classList.remove("active"));
                imageProjects.forEach((el) => el.classList.remove("active"));

                projectItems[index].classList.add("active");
                imageProjects[index].classList.add("active");
            });

            item.addEventListener("click", function () {
                projectItems.forEach((el) => el.classList.remove("active"));
                imageProjects.forEach((el) => el.classList.remove("active"));

                projectItems[index].classList.add("active");
                imageProjects[index].classList.add("active");
            });
        });
    };

    var gotop = function () {
        if ($("div").hasClass("progress-wrap")) {
            var progressPath = document.querySelector(".progress-wrap path");
            var pathLength = progressPath.getTotalLength();
            progressPath.style.transition = progressPath.style.WebkitTransition =
                "none";
            progressPath.style.strokeDasharray = pathLength + " " + pathLength;
            progressPath.style.strokeDashoffset = pathLength;
            progressPath.getBoundingClientRect();
            progressPath.style.transition = progressPath.style.WebkitTransition =
                "stroke-dashoffset 10ms linear";
            var updateprogress = function () {
                var scroll = $(window).scrollTop();
                var height = $(document).height() - $(window).height();
                var progress = pathLength - (scroll * pathLength) / height;
                progressPath.style.strokeDashoffset = progress;
            };
            updateprogress();
            $(window).scroll(updateprogress);
            var offset = 0;
            var duration = 0;
            jQuery(window).on("scroll", function () {
                if (jQuery(this).scrollTop() > offset) {
                    jQuery(".progress-wrap").addClass("active-progress");
                } else {
                    jQuery(".progress-wrap").removeClass("active-progress");
                }
            });
            jQuery(".progress-wrap").on("click", function (event) {
                event.preventDefault();
                jQuery("html, body").animate({ scrollTop: 0 }, duration);
                return false;
            });
        }
    };

    var preloader = function () {
        setTimeout(function () {
            $(".preload-container").fadeOut("slow", function () {
                $(this).remove();
            });
        }, 400);
    };

    // Dom Ready
    $(function () {
        headerSticky();
        headerFixed();
        footer();
        changeValue();
        video();
        btnSearch();
        infiniteScroll();
        textRotate();
        counter();
        progresslevel();
        totalNumberVariant();
        deleteFile();
        datePicker();
        autoPopup();
        ajaxContactForm();
        optimizedTabsHandle();
        handleProgress();
        activeStep();
        RTL();
        hoverProject();
        gotop();
        preloader();
    });
})(jQuery);
