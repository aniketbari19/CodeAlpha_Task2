
const images = ["Image/1.jpg", "Image/2.jpg", "Image/3.jpg","Image/4.jpg","Image/5.jpg","Image/6.jpg","Image/7.jpg","Image/8.jpg","Image/9.jpg","Image/10.jpg","Image/11.jpg"];
let currentIndex = 0;

function openModal(imageSrc) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImg.src = imageSrc;
}

function showImage(index) {
    const img = document.getElementById("modalImage");
    img.src = images[index];
  }

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1 + images.length) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function openMenu(){
  const menu = document.getElementById("sidebarMenu");
  menu.style.display='block';
}

function closeMenu(){
  const menu = document.getElementById("sidebarMenu");
  menu.style.display='none';
  
}

function openMain(){
  const main = document.getElementById("dec");
  main.style.display='grid'; 
  const menu = document.getElementById("sidebarMenu");
  menu.style.display='none';
}
