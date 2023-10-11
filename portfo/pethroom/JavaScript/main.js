// header 애니메이션 롤링
//자동슬라이드 베너
$(function () {
  setInterval(function () {
    $(".full_img_data").animate({ marginLeft: "-100%" }, 1000, function () {
      $(".full_img_data li").eq(0).appendTo(".full_img_data");
      $(".full_img_data").css({ marginLeft: "0" });
    });
  }, 8000);

  //상품 자동슬라이드

  const swiper = new Swiper(".swiper", {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      speed: 1000,
      pauseOnMouseEnter: true,
    },
  });

  // If we need pagination

  // 엘레베이터 버튼

  $(".light_btn li").eq(0).addClass("on");
  $(".light_btn li").eq(0).find("a").addClass("on");
  let arr = [
    $("#B").offset().top,
    $("#5F").offset().top + 10,
    $("#4F").offset().top + 100,
    $("#3F").offset().top + 100,
    $("#2F").offset().top + 100,
    $("#1F").offset().top + 100,
  ];

  $(".light_btn li").click(function (e) {
    e.preventDefault();
    let i = $(this).index();
    $("html, body").animate({ scrollTop: arr[i] }, 700, "swing");
    $(".light_btn li").removeClass("on");
    $(".light_btn li").find("a").removeClass("on");
    $(".light_btn li").eq(i).addClass("on");
    $(".light_btn li").eq(i).find("a").addClass("on");
  });
  //console.log(arr);
  let ht = $(window).scrollTop();
  console.log(ht);
  $(window).scroll(function () {
    let ht = $(window).scrollTop();
    console.log(ht);
    if (ht <= arr[0]) {
      $(".light_btn li").removeClass();
      $(".light_btn li").eq(0).addClass("on");
      $(".light_btn li a").removeClass();
      $(".light_btn li").eq(0).find("a").addClass("on");
    } else if (ht > arr[0] && ht <= arr[1]) {
      $(".light_btn li").removeClass();
      $(".light_btn li").eq(1).addClass("on");
      $(".light_btn li a").removeClass();
      $(".light_btn li").eq(1).find("a").addClass("on");
    } else if (ht > arr[1] && ht <= arr[2]) {
      $(".light_btn li").removeClass();
      $(".light_btn li").eq(2).addClass("on");
      $(".light_btn li a").removeClass();
      $(".light_btn li").eq(2).find("a").addClass("on");
    } else if (ht > arr[2] && ht <= arr[3]) {
      $(".light_btn li").removeClass();
      $(".light_btn li").eq(3).addClass("on");
      $(".light_btn li a").removeClass();
      $(".light_btn li").eq(3).find("a").addClass("on");
    } else if (ht > arr[3] && ht <= arr[4]) {
      $(".light_btn li").removeClass();
      $(".light_btn li").eq(4).addClass("on");
      $(".light_btn li a").removeClass();
      $(".light_btn li").eq(4).find("a").addClass("on");
    } else if (ht > arr[4] && ht <= arr[5]) {
      $(".light_btn li").removeClass();
      $(".light_btn li").eq(5).addClass("on");
      $(".light_btn li a").removeClass();
      $(".light_btn li").eq(5).find("a").addClass("on");
    }
  });
  $(".light_btn_updown li:first").click(function () {
    $(".light_btn li").each(function (index) {
      if ($(this).hasClass("on")) {
        let i = $(this).index();

        if (i == 0) {
          return false;
        } else {
          i--;
          $(".light_btn li").eq(i).trigger("click");
        }
      }
    });
  });
  $(".light_btn_updown li:last").click(function () {
    $(".light_btn li").each(function (index) {
      if ($(this).hasClass("on")) {
        let i = $(this).index();

        if (i == 5) {
          return false;
        } else {
          i++;
          $(".light_btn li").eq(i).trigger("click");
          return false;
        }
      }
    });
  });
  //popup창 하루안보기

  var myPopup = document.querySelector(".popupbox"),
    checkbox = document.querySelector("#popup"),
    popupClose = document.querySelector(".close");
  //쿠키생성
  function setCookie(name, value, day) {
    var date = new Date(); //현재 날짜 지정

    date.setDate(date.getDate() + day);
    var mycookie = "";
    mycookie += name + "=" + value + ";";
    mycookie += "Expires=" + date.toUTCString();
    document.cookie = mycookie; // 새로운 쿠키 설정, 생성
  }

  //쿠키 삭제

  function delCookie(name) {
    var date = new Date();

    date.setDate(date.getDate() - 1);

    var setCookie = "";

    setCookie += name + "=Main;";
    setCookie += "Expires=" + date.toUTCString();

    document.cookie = setCookie;
  }

  //쿠키 확인

  function checkCookie(name) {
    var cookies = document.cookie.split(";");
    console.log(cookies);
    var visited = false; //방문 거짓

    for (var i in cookies) {
      if (cookies[i].indexOf(name) > -1) {
        visited = true;
        console.log(visited);
      }
    }

    console.log(visited);
    if (visited) {
      // visited == true 생략 (재방문)
      myPopup.style.display = "none";
    } else {
      //신규방문
      myPopup.style.display = "block";
    }
  }

  checkCookie("pethroom.com");

  popupClose.addEventListener("click", function () {
    //a.checked ture false
    if (checkbox.checked) {
      //팝업을 다시 안보겠다. 팝업 닫고, 쿠키생성
      setCookie("pethroom.com", "Main", 1);
      myPopup.style.display = "none";
    } else {
      //팝업을 계속 본다. 팝업 닫고, 쿠키제거
      myPopup.style.display = "none";
      delCookie("pethroom.com");
    }
  });
});
