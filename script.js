let slideDetails = [
  {
    imgSrc: "https://images.pexels.com/photos/33435611/pexels-photo-33435611.jpeg",
    caption: "be like me !",
  },
  {
    imgSrc: "https://images.pexels.com/photos/34104581/pexels-photo-34104581.jpeg",
    caption: "hey this is something to like",
  },
  {
    imgSrc: "https://images.pexels.com/photos/31110329/pexels-photo-31110329.jpeg",
    caption: "ok ",
  },
  {
    imgSrc: "https://images.pexels.com/photos/34006806/pexels-photo-34006806.jpeg",
    caption: "hey",
  },
  {
    imgSrc: "https://images.pexels.com/photos/32265424/pexels-photo-32265424.jpeg",
    caption: "new image",
  },

  {
      imgSrc: "https://images.pexels.com/photos/29123258/pexels-photo-29123258.jpeg", 
      caption: "Karan dangol"
      
    
  },
];
let slideContainer = document.querySelector(".myslide-container");
let dotsContainer = document.querySelector(".dots");

slideDetails.forEach((slideDetail, index) => {
  

 let mySlide = `<div class="myslides ${index === 0 ? "active" : "" }">  
   <img src="${slideDetail.imgSrc}" alt="" />
  <p class="slide-numbering">${index + 1}/${slideDetails.length}</p>
  <p class="caption">${slideDetail.caption}</p>
</div>`;
   let dot = `<div class="dot fade ${index === 0 ? "active" : ""}" data-index=${index}> </div>`

  slideContainer.insertAdjacentHTML("beforeend", mySlide);
  dotsContainer.insertAdjacentHTML("beforeend", dot);
});

let slides = document.querySelectorAll(".myslides");
let currentSlideIndex = 0;
let dots = document.querySelectorAll(".dot");
const nextSlideBtn = () => {
  slides.forEach((slide) => slide.classList.remove("active"));
  currentSlideIndex++;

  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }

  slides[currentSlideIndex].classList.add("active");
    showCurrentDot();
};

const prevSlideBtn = () => {
  slides.forEach((slide) => slide.classList.remove("active"));
  currentSlideIndex--;
  if (currentSlideIndex < 0) currentSlideIndex = slides.length - 1;
  slides[currentSlideIndex].classList.add("active");
    showCurrentDot();
};

const showCurrentDot = () => {

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentSlideIndex].classList.add("active");
};
function showSlide(currentSlideIndex) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentSlideIndex].classList.add("active");
  slides[currentSlideIndex].classList.add("active");
}

addEventListener("keydown", (e) => {
  console.log(e);

  let mouseEvent = e.key;
  switch (mouseEvent) {
    case "ArrowLeft":
      prevSlideBtn();
      break;
    case "ArrowRight":
      nextSlideBtn();
      break;
  }
});

dots.forEach(dot => {
    dot.addEventListener("click", () => {
        let index = parseInt(dot.dataset.index);
        showSlide(index);
    })
})
