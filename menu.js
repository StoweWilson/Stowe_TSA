let slideIndex = 1;
showSlides(slideIndex);
showSlidesLunch(slideIndex)

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  

}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("breakfast_slide");
  let dots = document.getElementsByClassName("dot");
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
// Next/previous controls
function plusSlides(n) {
    showSlidesLunch(slideIndex += n);
  }
  
  // Thumbnail image controls
function currentSlide(n) {
    showSlidesLunch(slideIndex = n);
  
  }
function showSlidesLunch(n) {
    let i;
    let slides = document.getElementsByClassName("lunch_slide");
    let dots = document.getElementsByClassName("lunch_dot");
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
  