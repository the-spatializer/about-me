$(document).ready(function(){
    // transition top
    $("#btn").click(function(){
        $("#card").fadeOut("fast");
        $("#details").fadeIn("fast");
    });
    $("#back").click(function(){
        $("#details").fadeOut("fast");
        $("#card").fadeIn("fast");
    });
    // transition top
});