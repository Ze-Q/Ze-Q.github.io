$(document).ready(function () {

    $('#main').transition('fade up in', 2000);

    $("#learnMore").click(function () {
        $('html, body').animate({
            scrollTop: $("#info").offset().top
        }, 1000);
    });
    
    if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
        skrollr.init({
            forceHeight: false,
            smoothScrolling: true
        });
    } else {
        $('#learnMore').remove();
    }
    
    var html5_audiotypes = {
        mp3: "audio/mpeg",
        mp4: "audio/mp4",
        ogg: "audio/ogg",
        wav: "audio/wav"
    };
    
    function createsoundbite(d) {
        var b = document.createElement("audio");
        if (b.canPlayType) {
            for (var c = 0; c < arguments.length; c++) {
                var a = document.createElement("source");
                a.setAttribute("src", arguments[c]);
                if (arguments[c].match(/\.(\w+)$/i)) {
                    a.setAttribute("type", html5_audiotypes[RegExp.$1])
                }
                b.appendChild(a)
            }
            b.load();
            b.playclip = function() {
                b.pause();
                b.currentTime = 0;
                b.play()
            }
            ;
            return b
        } else {
            return {
                playclip: function() {
                    throw new Error("Your browser doesn't support HTML5 audio!")
                }
            }
        }
    }
    var name = createsoundbite("./files/Ze.mp3");

    $("#short-name").click(function () {
        name.playclip();
    });
});
