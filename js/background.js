const backImg = document.querySelector("img");
const img = ["img1.jpg", "img2.jpg", "img3.jpg"];
const imgSrc = Math.floor(Math.random() * img.length);
backImg.src = `img/${img[imgSrc]}`;
