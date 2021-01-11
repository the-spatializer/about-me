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
    //button right top
    w = screen.width;
    if (w <= 768) {
        $("#btn-back, #btn-prnt").addClass("btn-right");
    };
    //button bottom
    // printing top
    $("#btn-prnt").click(function(){
        $("#card").hide();
        $("#details").hide();
        window.print();
        $("#details").show();
    });
    //printing bottom
});
