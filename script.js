// Select all images in the order they appear in the gallery
let images = Array.from(document.querySelectorAll('.gallery-item img'));

// Keep images in the same order as in the HTML (No Sorting)
let currentIndex = 0;

// Function to open modal when clicking an image
function openModal(element) {
  let modal = document.getElementById("imageModal");
  let modalImg = document.getElementById("modalImage");
  let captionText = document.getElementById("caption");

  // Get the index of the clicked image based on the gallery order
  currentIndex = images.indexOf(element);

  modal.style.display = "flex";
  modalImg.src = element.src;
  captionText.innerHTML = element.alt;
}

// Function to close modal
function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

// Function to navigate images in gallery order
function changeImage(step) {
  currentIndex += step;

  // Wrap around when reaching first/last image
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  // Update modal with new image
  let modalImg = document.getElementById("modalImage");
  let captionText = document.getElementById("caption");

  modalImg.src = images[currentIndex].src;
  captionText.innerHTML = images[currentIndex].alt;
}

// Attach event listeners to images
images.forEach(img => {
  img.addEventListener('click', function() {
    openModal(this);
  });
});
