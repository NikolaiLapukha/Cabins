new Swiper('.materials__slider',{
      loop: true,
      pagination:{
            el: '.swiper-pagination',
            clickable: true,
      },
      autoplay:{
            delay: 2000,
            disableOnInteraction:true,
      },
});
