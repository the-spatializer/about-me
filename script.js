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
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
    $("#btn-prnt").click(function(e){
        $("#card").hide();
        $("#details").hide();
        e.preventDefault();
        if (isAndroid) {
            var gadget = new cloudprint.Gadget();
            gadget.setPrintDocument("url", $('title').html(), window.location.href, "utf-8");
            gadget.openPrintDialog();
        }
        else {
            window.print();
        }
        $("#details").show();
    });
    //printing bottom
});
