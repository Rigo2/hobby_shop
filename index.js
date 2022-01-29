



var PageSlideIndex = 1;
PageShowSlides(PageSlideIndex);

function PagePlusSlides(n) {
    PageShowSlides(PageSlideIndex += n);
}

function PageCurrentSlide(n) {
    PageShowSlides(PageSlideIndex = n);
}

function PageShowSlides(n) {
  var i;
  var PageSlides = document.getElementsByClassName("PageSlides");
  var PageSelector = document.getElementsByClassName("PageSelector");
  if (n > PageSlides.length) {PageSlideIndex = 1}    
  if (n < 1) {PageSlideIndex = PageSlides.length}
  for (i = 0; i < PageSlides.length; i++) {
    PageSlides[i].style.display = "none";  
  }
  for (i = 0; i < PageSelector.length; i++) {
    PageSelector[i].className = PageSelector[i].className.replace(" active", "");
  }
  PageSlides[PageSlideIndex-1].style.display = "block";  
  PageSelector[PageSlideIndex-1].className += " active";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}