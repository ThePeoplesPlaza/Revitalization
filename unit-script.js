
function toggleGallery() {
  const moreImages = document.querySelector('.more-images');
  const button = document.querySelector('.toggle-btn');
  if (moreImages.classList.contains('hidden')) {
    moreImages.classList.remove('hidden');
    button.textContent = "Show Fewer";
  } else {
    moreImages.classList.add('hidden');
    button.textContent = "Show All Photos";
  }
}

function openLightbox(imgElement) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightbox.style.display = "block";
  lightboxImg.src = imgElement.src;
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = "none";
}
