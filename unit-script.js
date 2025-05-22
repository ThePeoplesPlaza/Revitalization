function toggleGallery() {
  const moreImages = document.querySelector('.more-images');
  const button = document.querySelector('.toggle-btn');
  moreImages.classList.toggle('hidden');
  button.textContent = moreImages.classList.contains('hidden') ? 'Show All Photos' : 'Hide Photos';
}

function openLightbox(img) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightbox.style.display = 'block';
  lightboxImg.src = img.src;
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}