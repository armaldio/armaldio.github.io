/**
 * Created by goinau_q on 20/06/17.
 */

$(document).ready(() => {
    $('.progress').progress();

    $('.dropdown').dropdown({
        action: 'hide'
    });

    var theme = "night";

    $('#theme-toggle').on("click", function () {
        if (theme === "light") {
            document.getElementById('theme-toggle').innerHTML = 'Lights off';
            document.getElementById("theme").href = "theme/dark.css";
            theme = "dark";
        }
        else {
            document.getElementById('theme-toggle').innerHTML = "Lights on";
            document.getElementById("theme").href = "";
            theme = "light";
        }
        return false;
    });

    $(".open-modal").on("click", function (el) {
        var target = el.target;
        var modal = $(target).data("modal");

        console.log(modal);

        $(".weuk.modal").modal('show');
    });

//AOS.init();

    if ("serviceWorker" in navigator)
    {
        navigator.serviceWorker.register('./sw.js').then((registration) => {
            console.log("Service worker registered");
        }, () => {
            console.log("Service worker failed to register");
        })
    }

});
