$(function () {
  //store hover시 QR 나타나기
  $(".side_QR").css({ display: "none" });
  $(".side_btn")
    .find("a")
    .eq(1)
    .hover(function () {
      $(".side_QR").css({ display: "block" });
    });
  $(".Xbox").click(function () {
    $(".side_QR").css({ display: "none" });
  });
  //

  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 50,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  });
  $(".owl-dot").css({ display: "none" });
  //lush_value_list hover 할때
  $(".main_value li").css({ opacity: "0" });

  $(".lush_value_list li").hover(
    function () {
      let i = $(this).index();
      console.log(i);
      $(".main_value li").eq(i).siblings().css({ opacity: "0" });
      $(".main_value li").eq(i).css({ opacity: "1" });
      $(".lush_value_list li").eq(i).siblings().addClass("on");
    },
    function () {
      $(".main_value li").css({ opacity: "0" });
      $(".lush_value_list li").removeClass("on");
    }
  );
});
