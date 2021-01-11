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
    //printing bottom
});
