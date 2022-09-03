//menu
var tombolmenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikmenu(){
    tombolmenu.click(function(){
        menu.toggle();
    });
    menu.click(function(){
        menu.toggle();
    });
}
$(document).ready(function() {
    var width = $(window).width();
    if(width < 990) {
        klikmenu();
    }

}) 

// check lebar
$(window).resiz(function(){
    var width = $(window).width();
    if(width > 989){
        menu.css("display","block");
        //display:block
    }
    else {
        menu.css("display","none");
    }
    klikmenu();
});

