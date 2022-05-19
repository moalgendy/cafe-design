window.onscroll = function () {
  myFunction();
};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//change navbar color function
var toggler = document.getElementById("nav-toggler");
var togglerLinks = document.getElementById("navbarText");
var logo = document.getElementById("logo");
var open = false;
var hamburger = document.getElementById("navbar-toggler-icon");
toggler.addEventListener("click", function () {
  open = !open;
  console.log(logo);
  if (open) {
    logo.src = "images/about/logo2.svg";
    hamburger.classList.add("nav-toggler-alt");
    togglerLinks.classList.add("show-nav");
  } else {
    logo.src = "images/about/logo.svg";
    hamburger.classList.remove("nav-toggler-alt");
    togglerLinks.classList.remove("show-nav");
  }
});

// slider function
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (slides.length && dots.length) {
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active-dot";
    setTimeout(showSlides, 7000); // Change image every 7 seconds
  }
}
