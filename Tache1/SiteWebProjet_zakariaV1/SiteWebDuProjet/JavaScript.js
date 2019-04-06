console.log("bonjor tout le monde ");

// Animations init
//new WOW().init();

var div = document.getElementsByClassName("DivCircle");
$(document).ready(function(){
    $(div).hover(function(){
        $(this).fadeToggle(1000);
        
    })
});


