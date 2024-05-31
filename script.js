function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Adding zoom image on click for work experience

// Get the modal
var modal = document.getElementById("myModal");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  modalImg.alt = this.alt;
  captionText.innerHTML = this.alt;
};
// When the user clicks on <span> (x), close the modal
modal.onclick = function () {
  img01.className += " out";
  setTimeout(function () {
    modal.style.display = "none";
    img01.className = "modal-content";
  }, 400);
};

var modal1 = document.getElementById("myModal1");
var img1 = document.getElementById("myImg1");
var modalImg1 = document.getElementById("img02");
var captionText1 = document.getElementById("caption1");
img1.onclick = function () {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  modalImg1.alt = this.alt;
  captionText1.innerHTML = this.alt;
};
modal1.onclick = function () {
  img02.className += " out";
  setTimeout(function () {
    modal1.style.display = "none";
    img02.className = "modal-content";
  }, 400);
};
