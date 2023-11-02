document.addEventListener("DOMContentLoaded", function () {
    const contactLink = document.querySelector('a[href="#contact"]');
  
    contactLink.addEventListener("click", function (event) {
      event.preventDefault(); 
  
      const contactSection = document.getElementById("contact");
  
      contactSection.scrollIntoView({ behavior: "smooth" });
    });
  });
  
  const images = [
    "../Pictures/tunis.jpg",
    "../Pictures/jamaalafna.webp",
    "../Pictures/mauritanie.webp",
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

function maps(pays){
  switch (pays) {
    case 'maroc':
      document.getElementById ("mapmaroc").style.display='block' ;
      break;
    case 'mauritanie':
      document.getElementById ("mapmauritanie").style.display = 'block'
      break;
    case 'algerie':
      document.getElementById ("mapalgerie").style.display = 'block'
      break;
    case 'tunisie':
      document.getElementById ("maptunisie").style.display = 'block'
      break;
    case 'libye':
      document.getElementById ("maplibye").style.display = 'block'
      break;
  
    default:
      document.getElementById ("mapmaroc").style.display = 'none'

      break;
  }
}
