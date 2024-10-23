ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2000,
    delay: 400
});

ScrollReveal().reveal('.bg-image', { delay: 400, origin: 'top'});
ScrollReveal().reveal('.about-image', { delay: 500 });
ScrollReveal().reveal('.text-box', { delay: 550 });
ScrollReveal().reveal('#map', { delay: 400, origin: 'left'});

let slideIndex = 1;
showSlides();

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
}
