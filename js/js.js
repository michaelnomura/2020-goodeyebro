$('bg').css({
    height: $(window).innerHeight()
});
$(window).resize(function(){
    $('bg').css({
        height:$(window).innerHeight()
    });
});

$('.full-bg-img').css({
    height: $(window).innerHeight()
});
$(window).resize(function(){ // add resize() to adjust to browser
    $('.full-bg-img').css({
        height: $(window).innerHeight()
    });
});

$('.full-height').css({
    height: $(window).innerHeight()
});
$(window).resize(function(){ // add resize() to adjust to browser
    $('.full-height').css({
        height: $(window).innerHeight()
    });
});