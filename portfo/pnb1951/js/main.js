let site = true;
let languge = document.querySelector(".language_list");
let languge2 = document.querySelector(".language p");

document.querySelector(".language").onclick = function () {
  if (site) {
    languge.style.display = "block";
    languge2.classList.add("active");
  } else {
    languge.style.display = "none";
    languge2.classList.remove("active");
  }
  site = !site;
  console.log(site);
};

$(".owl-carousel").owlCarousel({
  items: 1,
  loop: true,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

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
