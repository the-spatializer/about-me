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
        var password = prompt("Please enter the password");
        if (password == "Smoke 'em out 777") {
            $("#prnt-warning").removeClass("d-print-block");
            $("#prnt-warning").addClass("d-print-none");
            $("#prnt").removeClass("d-print-none");
            $("#prnt").addClass("d-print-block");
            window.print();
            $("#prnt").removeClass("d-print-block");
            $("#prnt").addClass("d-print-none");
            $("#prnt-warning").removeClass("d-print-none");
            $("#prnt-warning").addClass("d-print-block");
        }
        else {
            alert("Please enter the correct password")
        };
    });
    $(document).on("keydown", function(e) { 
        if((e.ctrlKey || e.metaKey) && (e.key == "p" || e.charCode == 16 || e.charCode == 112 || e.keyCode == 80) ){
            alert("Please use the print button to print");
            e.cancelBubble = true;
            e.preventDefault();
    
            e.stopImmediatePropagation();
        }  
    });
    // printing bottom
    // disable top
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

    $(document).on("keydown", function(x) {
        if (x.ctrlKey && 
                (x.keyCode === 67 || 
                 x.keyCode === 86 || 
                 x.keyCode === 85 || 
                 x.keyCode === 117)) {
            alert("Sorry, It's not allowed");
            return false;
        } 
        else {
            return true;
        };
    });
    // disable bottom
});
