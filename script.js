$(document).ready(function() {
    // transition top
    $("#btn").click(function() {
        $("#card").fadeOut("fast");
        $("#details").fadeIn("fast");
    });
    $("#btn-back").click(function() {
        $("#details").fadeOut("fast");
        $("#card").fadeIn("fast");
    });
    // transition bottom
    // printing top
    $("#btn-prnt").click(function() {
        var password = prompt("Please Enter The Password");
        if (password == "Smoke 'em out 777") {
            $("#prnt-warning").removeClass("d-print-block");
            $("#prnt-warning").addClass("d-print-none");
            $("#prnt").removeClass("d-print-none");
            $("#prnt").addClass("d-print-block");
            window.print();
            $("#prnt").removeClass("d-print-block");
            $("#prnt").addClass("d-print-none");
            $("#prnt").removeClass("d-print-none");
            $("#prnt").addClass("d-print-block");
        }
        else {
            alert("Please Enter The Correct Password")
        };
    });
    // printing bottom
    // disable selection top
    function disableSelection(target) {
        if (typeof target.onselectstart != 'undefined') //IE route
            target.onselectstart = function() {return false}
        else if (typeof target.style.MozUserSelect != 'undefined') //Firefox route
            target.style.MozUserSelect = 'none'
        else //All other route (ie: Opera)
            target.onmousedown = function() {return false}
        target.style.cursor = 'default'
    };
    disableSelection(document.body);
    // disable selection bottom
});
