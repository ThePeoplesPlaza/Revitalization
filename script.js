
function scrollCarousel(direction) {
  const carousel = document.querySelector('.carousel');
  const scrollAmount = 300;
  carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

function showDetail(phase) {
  const detailBox = document.getElementById('timeline-detail');
  let detailText = '';
  switch (phase) {
    case 'design':
      detailText = 'The beginning of the concept creation, vision, 3d Model, and Building Rendering. Work towards revitalizing plaza starts.';
      break;
    case 'demolition':
      detailText = 'New upgraded electrical panels installed, wood rot and building framing repairs.';
      break;
    case 'interior':
      detailText = 'New coats of exterior paint, with the color scheme inspired by buildings from La Boca in Argentina, as well as painting the fencing around the building. Landscaping work to freshen up the place.';
      break;
    case 'finishing':
      detailText = 'Seating, speakers, and any final landscaping decorations.';
      break;
  }
  detailBox.textContent = detailText;
}
window.showDetail = showDetail;

document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const unitTitles = ["B12", "B13", "C34", "C35", "E25", "E26", "F41", "F42"];

  unitTitles.forEach((title, index) => {
    const card = document.createElement('div');
    card.className = 'unit-card';
    card.innerHTML = `
      <img src="Unit${index + 1}.png" alt="Unit ${title}"/>
      <h3>${title}</h3>
      <p>$${1000 + (index + 1) * 25}/mo • Retail/Office</p>
      <div class="card-buttons">
        <a class="view-btn" href="#">View</a>
        <a class="apply-btn" href="#">Apply</a>
      </div>
    `;
    carousel.appendChild(card);
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const galleryImages = document.querySelectorAll('.gallery-grid img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.lightbox-close');

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
      lightboxImg.src = '';
    }
  });
});
