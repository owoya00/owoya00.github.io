$(function () {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    slidesPerView: 1,
    //centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  let menu = true;
  $(".search").click(function () {
    if (menu) {
      $(".nav").css("top", "0");
      $(".search").css("width", "60px");
      $(".search p").css("display", "none");
      $(".search>img").css("display", "none");
      $(".top_btn_on").css("display", "block");

      $(".SEARCH_BOX").css("left", "0");
    } else {
      $(".nav").css("top", "75px");
      $(".search").css("width", "250px");
      $(".search p").css("display", "block");
      $(".search>img").css("display", "block");
      $(".top_btn_on").css("display", "none");
      $(".SEARCH_BOX").css("left", "-100%");
    }
    menu = !menu;
  });

  $(window).scroll(function () {
    let ht = $(window).scrollTop();
    if (ht >= 70) {
      $(".search").css("width", "60px");
      $(".search p").css("display", "none");
      $(".search>img").css("display", "none");
      $(".top_btn_on").css("display", "block");
    } else {
      $(".search").css("width", "250px");
      $(".search p").css("display", "block");
      $(".search>img").css("display", "block");
      $(".top_btn_on").css("display", "none");
    }
  });
});
