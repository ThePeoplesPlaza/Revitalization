document.addEventListener('DOMContentLoaded', () => {
  const pastelColors = [
    '#a7c7e7', '#fbc4ab', '#cdb4db',
    '#b5ead7', '#ffd6a5', '#f8edeb', '#e2f0cb'
  ];
  const randomColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];
  const header = document.querySelector('.dark-header');
  if (header) {
    header.style.backgroundColor = randomColor;
  }

  const swiper = new Swiper('.main-swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
});

function toggleGallery() {
  const moreImages = document.querySelector('.more-images');
  const button = document.querySelector('.toggle-btn');
  moreImages.classList.toggle('hidden');
  button.textContent = moreImages.classList.contains('hidden') ? 'Show All Photos' : 'Hide Photos';
}

function toggleDetails() {
  const section = document.getElementById('unit-details');
  section.classList.toggle('hidden');
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

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});
