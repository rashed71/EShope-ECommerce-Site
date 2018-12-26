$(document).ready(function(){
 
      /* Owl Carousel (Home - Fashion, Electronics) */
      $('.fashion_slide, .electronics_slide').owlCarousel({
        items: 4,
        autoplay: true,
        loop: true,
        dots:true,
        mouseDrag:true,
        autoplayHoverPause:true,
        nav:false,
        /*navText:['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],*/
        smartSpeed:700,
        transitionStyle:"fade",
        animateIn: 'fadeIn',
        animateOut: 'fadeOutLeft'
        
    })

      /* Owl Carousel (Home - Brand Categories Tab Pane List) */
      $('.nav_brand').owlCarousel({
        loop:true,
        margin:1,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:8
            }
        }
    })

      /* Owl Carousel (Home - Brand Categories Product Items) */
      $('.brand_product_slide').owlCarousel({
        loop:true,
        margin:1,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })

      /* Owl Carousel (Home - Testimonials) */
      $('#home-testimonial').owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        dots:false,
        mouseDrag:true,
        autoplayHoverPause:true,
        nav:false,
        /*navText:['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],*/
        smartSpeed:700,
        transitionStyle:"fade",
        animateIn: 'fadeIn',
        animateOut: 'fadeOutLeft'
        
    })
});