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


document.addEventListener('DOMContentLoaded', () => {
  const pastelColors = [
    '#a7c7e7', // pastel blue
    '#fbc4ab', // pastel peach
    '#cdb4db', // pastel purple
    '#b5ead7', // pastel mint
    '#ffd6a5', // pastel orange
    '#f8edeb', // pastel pink
    '#e2f0cb'  // pastel green
  ];

  const randomColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];
  const header = document.querySelector('.dark-header');
  if (header) {
    header.style.backgroundColor = randomColor;
  }
});
