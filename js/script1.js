
        $(document).ready(function () {
            var storage = window.localStorage;

            var tabNav = $(".page-search-tabs");
            tabNav.find(" > div").on("click", function () {
                var index = $(this).index();
                var id = $(this).attr("id");
                $(this).addClass("active").siblings().removeClass("active");
                tabNav.next().find(" > div").eq(index).show(200).siblings().hide();
                storage.setItem("lastActiveTabIndex", index);
                if(id === "flights-tab") {

                    if(window.airports.length === 0) {
                        activeFlightAutocomplete();
                    }

                }
            });

            window.setTimeout(function () {
                if(storage.getItem("lastActiveTabIndex")) {
                    var index = storage.getItem("lastActiveTabIndex");
                    tabNav.find(" > div").eq(index).trigger("click");
                }
            }, 100);

        })

    