function PathLoader(el) {
    this.el = el;
    this.strokeLength = el.getTotalLength();

    // set dash offset to 0
    this.el.style.strokeDasharray =
        this.el.style.strokeDashoffset = this.strokeLength;
}

PathLoader.prototype._draw = function (val) {
    this.el.style.strokeDashoffset = this.strokeLength * (1 - val);
};

PathLoader.prototype.setProgress = function (val, cb) {
    this._draw(val);
    if(cb && typeof cb === 'function') cb();
};

PathLoader.prototype.setProgressFn = function (fn) {
    if(typeof fn === 'function') fn(this);
};

function successHTML(title, message) {
    var strVar="";
    strVar += "<div class=\"success-message\">";
    strVar += "    <svg viewBox=\"0 0 76 76\" class=\"success-message__icon icon-checkmark\">";
    strVar += "        <circle cx=\"38\" cy=\"38\" r=\"36\"\/>";
    strVar += "        <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"M17.7,40.9l10.9,10.9l28.7-28.7\"\/>";
    strVar += "    <\/svg>";
    strVar += "    <h3 class=\"success-message__title\">"+title+"<\/h3>";
    strVar += "    <div class=\"success-message__content\">";
    strVar += "        <p>"+message+"<\/p>";
    strVar += "    <\/div>";
    strVar += "<\/div>";
    return strVar;
}


function toggleSucessHTML() {
    var svg = document.querySelector('svg path');
    svg = new PathLoader(svg);
    if(document.body.classList.contains('active')) {
        document.body.classList.remove('active');
        svg.setProgress(0);
        return;
    }
    document.body.classList.add('active');
    svg.setProgress(1);
}

$(document).ready(function ($) {

    if($.fn.inputmask) {
        $("[data-inputmask]").inputmask();
    }

    var myLazyLoad = new LazyLoad({
        elements_selector: '.llbgimg'
    });

    var clientInfoForm = $("#client-info-form");
    clientInfoForm.on("submit", function (e) {
        e.preventDefault();

        var formDataAsArray = clientInfoForm.serializeArray();

        var formData = {};

        formDataAsArray.map(function (input) {
            formData[input.name] = input.value
        });

        $.ajax({
            type: "POST",
            url: "/api/client-info.php",
            dataType: "json",
            data: JSON.stringify(formData),
            contentType: "application/json",
            success: function (response) {
                console.log(response);
                if(response.success) {
                    clientInfoForm.html(successHTML("Thank you for your request", "We will get in touch asap"));
                    window.setTimeout(function () {
                        toggleSucessHTML();
                        $('html, body').animate({
                            scrollTop: 170
                        }, 200);
                    }, 300);
                }
            }
        });
    });

    var tourOrderForm = $("#tour-order-form");
    tourOrderForm.on("submit", function (e) {
        e.preventDefault();

        var formDataAsArray = tourOrderForm.serializeArray();

        var formData = {};

        formDataAsArray.map(function (input) {
            formData[input.name] = input.value
        });

        $.ajax({
            type: "POST",
            url: "/api/tour-requests.php",
            dataType: "json",
            data: JSON.stringify(formData),
            contentType: "application/json",
            success: function (response) {
                console.log(response);
                if(response.success) {
                    tourOrderForm.html(successHTML("Thank you for your request", "We will get in touch asap"));
                    window.setTimeout(function () {
                        toggleSucessHTML();
                        $('html, body').animate({
                            scrollTop: 170
                        }, 200);
                    }, 300);
                }
            }
        });
    });


    var hotelOrderForm = $("#hotel-order-form");
    hotelOrderForm.on("submit", function (e) {
        e.preventDefault();

        var formDataAsArray = hotelOrderForm.serializeArray();

        var formData = {};

        formDataAsArray.map(function (input) {
            formData[input.name] = input.value
        });

        $.ajax({
            type: "POST",
            url: "/api/hotel-requests.php",
            dataType: "json",
            data: JSON.stringify(formData),
            contentType: "application/json",
            success: function (response) {
                console.log(response);
                if(response.success) {
                    hotelOrderForm.html(successHTML("Thank you for your request", "We will get in touch asap"));
                    window.setTimeout(function () {
                        toggleSucessHTML();
                        $('html, body').animate({
                            scrollTop: 170
                        }, 200);
                    }, 300);
                }
            }
        });
    });





    var bookFlightForm = $("#book-flight-form");
    bookFlightForm.on("submit", function (e) {
        e.preventDefault();

        var formDataAsArray = bookFlightForm.serializeArray();

        var formData = {};

        formDataAsArray.map(function (input) {
            formData[input.name] = input.value
        });

        $.ajax({
            type: "POST",
            url: "/api/flight-requests.php",
            dataType: "json",
            data: JSON.stringify(bookFlightForm.serializeJSON()),
            contentType: "application/json",
            success: function (response) {
                console.log(response);
                if(response.success) {
                    bookFlightForm.html(successHTML("Thank you for your request", "We will get in touch asap"));
                    window.setTimeout(function () {
                        toggleSucessHTML();
                        $('html, body').animate({
                            scrollTop: 170
                        }, 200);
                    }, 300);
                }
            }
        });
    });


    $('[data-toggle="datepicker"]').datepicker({
        autoclose: true,
        startDate: new Date(),
        orientation: "bottom"
    });


    $('[data-toggle="birthday"]').datepicker({
        autoclose: true,
        orientation: "bottom"
    });

    $(".input-group-btn").find("button").on("click", function (e) {
        e.preventDefault();
        $(this).parent().prev("[data-toggle='datepicker']").datepicker("show");
        $(this).parent().prev("[data-toggle='birthday']").datepicker("show");
    });

    var msc = $(".main-slider-content");

    msc.hide();
    msc.first().fadeIn();

    var transms = 600;
    var mscl = msc.length;
    var c = 1;
    window.setInterval(function () {

        if(c == 0) {
            msc.last().fadeOut(transms);
        } else {
            msc.eq(c).prev().fadeOut(transms);
        }
        msc.eq(c).fadeIn(transms);

        if(mscl - 1 == c) {
            c = 0;
        } else {
            c++;
        }

    }, 5000);


    $(".mn-d-selected").on("click", function (event) {
        event.stopPropagation();

        var next = $(this).next();
        next.slideToggle(220);
        window.setTimeout(function () {
            $(document).one("click", function () {
                next.slideUp(200);
            })
        }, 250);
    });


    $(".mn-tabs").each(function () {
        var $tabs = $(this);
        var $pane = $tabs.find(".tab-pane");
        var $content = $tabs.find(".tab-content");

        $pane.eq(0).addClass("active").siblings().removeClass("active");
        $content.eq(0).show().siblings().hide();

        $pane.on("click", function () {
            var $index = $(this).index();
            $(this).addClass("active").siblings().removeClass("active");
            $content.eq($index).show().siblings().hide();
        })
    });

    if ($(window).width() < 768) {
        $(".top-nav").find("a").on("click", function (e) {
            if($(this).next().get(0).tagName == "UL") {
                e.preventDefault();
            }
        });
    }

    $(".top-nav").find(".sandwich").on("click", function (event) {
        event.stopPropagation();

        var next = $(this).next();

        next.slideToggle(220);
        window.setTimeout(function () {
            $(document).on("click", function (e) {
                if(!$(e.target).closest(".top-nav ul").length) {
                    next.slideUp(200);
                }
            })
        }, 250);
    })


    var loadMoreButton = $('#load-more-button');
    loadMoreButton.height(loadMoreButton.height()).width(loadMoreButton.width());

    loadMoreButton.on("click", function (e) {
        e.preventDefault();

        var t = $(this);
        t.addClass("show-loader");

        window.setTimeout(function () {
            var lastVisibleTour = $('.tour-element:visible:last');
            var next9 = lastVisibleTour.nextAll().slice(0, 9);

            next9.show();
            if(next9.length < 9) {
                t.hide();
            } else {
                t.removeClass("show-loader");
            }

            $('html, body').animate({
                scrollTop: next9.first().offset().top - 100
            }, 650);
        }, 800);

    })


    //
    // var opts = { language: "en", pathPrefix: "/assets/translations" };
    // $("[data-localize]").localize("translations", opts)


});