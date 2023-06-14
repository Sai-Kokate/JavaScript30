function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide(e) {
  sliderImages.forEach((sliderImage) => {
    // console.log("Window Inner Height: ", window.innerHeight);
    // console.log("window.scrollY: ", window.scrollY);
    // console.log("sliderImage.height: ", sliderImage.height);
    // console.log("sliderImage.offsetTop: ", sliderImage.offsetTop);
    // console.log(
    //   window.innerHeight + window.scrollY - sliderImage.height / 2 >
    //     sliderImage.offsetTop
    // );
    // console.log(sliderImage.offsetTop + sliderImage.height > window.scrollY);
    const isHalfWayScrolled =
      window.innerHeight + window.scrollY - sliderImage.height / 2 >
      sliderImage.offsetTop;
    const isNotCompletelyScrolled =
      sliderImage.offsetTop + sliderImage.height > window.scrollY;

    if (isHalfWayScrolled && isNotCompletelyScrolled) {
      sliderImage.classList.add("active");
    } else {
      sliderImage.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlide));
