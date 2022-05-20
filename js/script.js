$(document).ready(function () {
    var array = [];
    $("#buildBtn").click(
        function () {
            let length = random(10, 35);
            $("#length").text(length);
            for (let i = 0; i < length; i++) {
                array[i] = random(-100, 100);
            }
            $("#array").text(array.join(" | "));
        });

    $("#minBtn").click(function () { $("#min").text(Math.min.apply(null, array)); });

    $("#maxBtn").click(function () { $("#max").text(Math.max.apply(null, array)); });

    function random(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});