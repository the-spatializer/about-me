$(document).ready(function(){
    // transition top
    $("#btn").click(function(){
        $("#card").fadeOut("fast");
        $("#details").fadeIn("fast");
    });
    $("#btn-back").click(function(){
        $("#details").fadeOut("fast");
        $("#card").fadeIn("fast");
    });
    // transition bottom
    // printing top
    $("#btn-prnt").click(function(){
        $("#card").hide();
        $("#details").hide();
        window.print();
        $("#details").show();
    });
    $(document).keydown(function(event) {
        if (event.ctrlKey== true && (event.which == "80")) {
            alert("Sorry, you're not allowed to print using ctrl+p. Please use the print button instead.");
            return false;
        };
    });
    // printing bottom
    // disable selection top
    function disableSelection(target){
        if (typeof target.onselectstart!='undefined') //IE route
            target.onselectstart=function(){return false}
        else if (typeof target.style.MozUserSelect!='undefined') //Firefox route
            target.style.MozUserSelect='none'
        else //All other route (ie: Opera)
            target.onmousedown=function(){return false}
        target.style.cursor = 'default'
    };
    disableSelection(document.body)
    // disable selection bottom
});
