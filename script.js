document.addEventListener("DOMContentLoaded", function () {
    const contactLink = document.querySelector('a[href="#contact"]');
  
    contactLink.addEventListener("click", function (event) {
      event.preventDefault(); 
  
      const contactSection = document.getElementById("contact");
  
      contactSection.scrollIntoView({ behavior: "smooth" });
    });
  });
  
  const images = [
    "../images/image1.jpg",
    "../images/image2.jpg",
    "../images/image3.jpg",
];

let currentImageIndex = 0;
const banniereDyn = document.querySelector(".banniereDyn");
const imgElement = banniereDyn.querySelector("img");

function changeImage() {
    imgElement.src = images[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imgElement.style.animation= "fade 10s infinite";
}


setInterval(changeImage, 10000);
