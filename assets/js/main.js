// STICKY
var stickable = $("header");
$(document).on( 'scroll', function(){
    if ($(this).scrollTop() > 100) {
        stickable.addClass("sticky");
    } else {
        stickable.removeClass("sticky");
    }
});