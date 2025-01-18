var $about = $("#about");
var $contact = $("#contact");
var $nav1 = $("#nav-item-home");
var $nav2 = $("#nav-item-about");
var $nav3 = $("#nav-item-contact");


function isScrolledIntoView(elem){
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) || (elemTop >= docViewTop));
}

function topIsInView(elem){
    var docViewTop = $(window).scrollTop();
    var elemTop = $(elem).offset().top;

    return (elemTop >= docViewTop);

}

function bottomIsOutOfView(elem){
    var elemBottom = elemTop + $(elem).height();
    var docViewBottom = docViewTop + $(window).height();

    return (elemBottom <= docViewBottom);

}

function check(str){
    var elem = document.querySelector(str);
    var elDistanceToTop = window.pageYOffset + elem.getBoundingClientRect().top
    // var elDistanceToTop = window.pageYOffset + $('#about')[0].getBoundingClientRect().top
    var navbar = document.querySelector('.navbar');
    var navDistanceToTop = window.pageYOffset + navbar.getBoundingClientRect().top
    // var elemTop = $(elem).offset().top;
    // var navbarTop = $(navbar).offset().top;


    return (elDistanceToTop-38<= (navDistanceToTop));
}

// $($nav1).hover(function(){
//     if(check('#about')){
//         $nav1.css("background-color", "#222");
//     }
// })

$(document).on('ready', function () {
    setTimeout(function () {
        $('.letter').addClass('loaded');
        $('.reg-text').addClass('loaded');
    }, 1000);
});


$(document).on("scroll", function () {
    // if (topIsInView($('#about'))) {
    //     $nav1.addClass("nav-item2");
    //     $nav2.addClass("nav-item2");
    //     $nav3.addClass("nav-item2");
    //     console.log("in view");

    // }else if(bottomIsOutOfView($('#about'))){
    //     $nav1.removeClass("nav-item2");
    //     $nav2.removeClass("nav-item2");
    //     $nav3.removeClass("nav-item2");
    //     // console.log("not in view");
    //     // $contact1.removeClass("animation1");
    // }
    // console.log(isScrolledIntoView($('#about'), $(window)));

    if(check('#about')){
        $nav1.addClass("nav-item2");
        $nav2.addClass("nav-item2");
        $nav3.addClass("nav-item2");
        // $('nav-line').css("color", "#"); 
        // $nav1.css("color: #222"); 
        // $nav2.css("color: #222"); 
        // $nav3.css("color: #222"); 


    }else{
        $nav1.removeClass("nav-item2");
            $nav2.removeClass("nav-item2");
            $nav3.removeClass("nav-item2");

    }

});




$.getJSON("data.json", function(json) {
    console.log(json[0]);
});

// $(function () {
//     $(document).scroll(function () {
//       var $nav = $(".navbar-fixed-top");
//       $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//     });
//   });

// var $cursor = $(".cursor")
// // const cursor = document.querySelector('.cursor');
// $(document).on("mousemove", function(e){
//     $(".cursor").css({
//          "top": (e.pageY - 20)+"px",
//          "left": (e.pageX - 20)+"px"
//     })
//     // $cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
// })

// jQuery(document).ready(function($){
//     $('a.scroll-link').click(function(e){
//         e.preventDefault();
//         $id = $(this).attr('href');
//         $('body,html').animate({
//             scrollTop: $($id).offset().top -20
//         }, 750);
//     });
// });





// var $whitescreen1 = $("#about")
// var $whitescreen2 = $("#contact")
// var $nav = $(".nav-item1")

// $(document).on("scroll", function(){
//     if(isScrolledIntoView($whitescreen1, $window)){
//         // $cursor.css({
//         //     "border": "1px solid black"
//         // })
//         $nav.css({
//             "color": "black"
//         })

//     }
//     else if(isScrolledIntoView($whitescreen2, $window)){
//         // $cursor.css({
//         //     "border": "1px solid black"
//         // })
//         $nav.css({
//             "color": "black"
//         })
//     }else{
//         // $cursor.css({
//         //     "border": "1px solid white"
//         // })
//         $nav.css({
//             "color": "white"
//         })
//     }
// });



// jQuery(document).ready(function() {
//   var mouseX = 0, mouseY = 0;
//   var xp = 0, yp = 0;
   
//   $(document).mousemove(function(e){
//     mouseX = e.pageX - 30;
//     mouseY = e.pageY - 30; 
//   });
    
//   setInterval(function(){
//     xp += ((mouseX - xp)/6);
//     yp += ((mouseY - yp)/6);
//     $(".cursor").css({left: xp +'px', top: yp +'px'});
//   }, 20);
// });