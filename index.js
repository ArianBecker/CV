var title = $("h1"); 
$(".title h4").hide(); 

title.text("Hello").hide().fadeIn(1000).fadeOut(1500); 
setTimeout(function () {
    title.text("Welcome to my CV"); 
}, 2500); 
title.fadeIn(1000).fadeOut(1500); 

setTimeout(function () {
    title.text("Curriculum vitae"); 
}, 5000);
title.fadeIn(); 

setTimeout(function () {
    $(".title h4").text("Arian L. Becker").fadeIn(); 
}, 5500); 

setTimeout(function () {
    $(".title").addClass("grad")
}, 6000);