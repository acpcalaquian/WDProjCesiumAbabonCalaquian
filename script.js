let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].className = slides[i].className.replace(" ghost-in", ""); 
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  slides[slideIndex-1].className += " ghost-in";
  dots[slideIndex-1].className += " active";
  
  setTimeout(showSlides, 2000);
}

/* SHOWCASE CAROUSEL */

const showcaseImages = [
  "/public/assets/showcase/showcase1.png",
  "/public/assets/showcase/showcase2.png",
  "/public/assets/showcase/showcase3.png"
];

let showcaseIndex = 0;

function updateShowcase() {
  const img = document.getElementById("showcaseImage");
  if (img) {
    img.src = showcaseImages[showcaseIndex];
  }
}

function nextShowcase() {
  showcaseIndex = (showcaseIndex + 1) % showcaseImages.length;
  updateShowcase();
}

function prevShowcase() {
  showcaseIndex = (showcaseIndex - 1 + showcaseImages.length) % showcaseImages.length;
  updateShowcase();
}

/* BACK TO TOP BUTTON */
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (topBtn) {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
