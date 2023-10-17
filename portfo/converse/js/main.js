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
      //$(".submenu").css("display", "none");
      $("body").css("overflow", "hidden");
    } else {
      $(".nav").css("top", "75px");
      $(".search").css("width", "250px");
      $(".search p").css("display", "block");
      $(".search>img").css("display", "block");
      $(".top_btn_on").css("display", "none");
      $(".SEARCH_BOX").css("left", "-100%");
      $("body").css("overflow", "visible");
    }
    menu = !menu;
  });

  //서브메뉴

  let Submenu = true;

  $(".nav_left > ul > li").click(function () {
    if (Submenu) {
      let i = $(this).index();
      console.log(i);
      $(".Lnb>div").css("left", "-100% ");
      $(".Lnb>div").eq(i).css({ left: "0", zIndex: "999" });
    } else {
      $(".Lnb>div").css("left", "-100% ");
    }

    Submenu = !Submenu;
  });

  //서브메뉴 끝

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

  let x_posi = 0;
  let y_posi = 0;
  let x_current = -50;
  let y_current = -50;
  let masksize = 50;
  let size_current = 0;
  let acc = 0.09;
  //acc 속도값
  let acc2 = 0.09;

  $(document).mousemove(function (e) {
    x_posi = e.clientX;
    console.log(x_posi);
    y_posi = e.clientY;
    calEase();
  });
  function calEase() {
    x_current = x_current + (x_posi - x_current) * acc;
    // 마우스 움직일때 따라다니는 동그라미의 x좌표 속도
    y_current = y_current + (y_posi - y_current) * acc;
    size_current = size_current + (masksize - size_current) * acc2;
    $(".maskLayer").css({
      "--mask-size": size_current + "px",
      "--mask-x": x_current + "px",
      "--mask-y": y_current + "px",
    });
  }

  $(".hoverLayer").hover(
    function () {
      masksize = 150;
    },
    function () {
      masksize = 50;
    }
  );

  let Hrart = true;
  $(".hrart").click(function () {
    if (Hrart) {
      $(this).find("img:last-child").css("display", "block");
      $(this).find("img:first-child").css("display", "none");
    } else {
      $(this).find("img:last-child").css("display", "none");
      $(this).find("img:first-child").css("display", "block");
    }
    Hrart = !Hrart;
  });
  $(".X_BTN").click(function () {
    $(".submenu").css("left", "-100%");
  });
});
