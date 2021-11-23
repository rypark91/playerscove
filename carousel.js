$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            }
        }
    });
  });
  //source cited:
  //-https://codepen.io/gatoledo1/pen/MWKpLNY