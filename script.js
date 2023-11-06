document.addEventListener("DOMContentLoaded", function () {
    const cuisineLink = document.querySelector('a[href="#cuisine"]');
  
    cuisineLink.addEventListener("click", function (event) {
      event.preventDefault(); 
  
      const cuisineSection = document.getElementById("cuisine");
  
      cuisineSection.scrollIntoView({ behavior: "smooth" });
      
    });
  });
  
  
  const images = [
    "../images/image1.jpg",
    "../images/image2.jpg",
    "../images/image3.jpg",
];
document.addEventListener("DOMContentLoaded", function () {
  const theatreLink = document.querySelector('a[href="#theatre"]');

  theatreLink.addEventListener("click", function (event) {
    event.preventDefault(); 

    const theatreSection = document.getElementById("theatre");

    theatreSection.scrollIntoView({ behavior: "smooth" });
    
  });
});document.addEventListener("DOMContentLoaded", function () {
  const visuLink = document.querySelector('a[href="#visu"]');

  visuLink.addEventListener("click", function (event) {
    event.preventDefault(); 

    const visuSection = document.getElementById("visu");

    visuSection.scrollIntoView({ behavior: "smooth" });
    
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const livreLink = document.querySelector('a[href="#livre"]');

  livreLink.addEventListener("click", function (event) {
    event.preventDefault(); 

    const livreSection = document.getElementById("livre");

    livreSection.scrollIntoView({ behavior: "smooth" });
    
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const musicaLink = document.querySelector('a[href="#musica"]');

  musicaLink.addEventListener("click", function (event) {
    event.preventDefault(); 

    const musicaSection = document.getElementById("musica");

    musicaSection.scrollIntoView({ behavior: "smooth" });
    
  });
});

let currentImageIndex = 0;
const banniereDyn = document.querySelector(".banniereDyn");
const imgElement = banniereDyn.querySelector("img");

function changeImage() {
    imgElement.src = images[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imgElement.style.animation= "fade 10s infinite";
}


setInterval(changeImage, 10000);

