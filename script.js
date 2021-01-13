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
        window.print();
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
