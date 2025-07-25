
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
  function generatePastelColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 85%)`;
  }
  const pastelColor = generatePastelColor();
  document.querySelector('.nav-bar').style.backgroundColor = pastelColor;
  document.querySelector('footer').style.backgroundColor = pastelColor;

  const carousel = document.querySelector('.carousel');

  const units = [
    { title: "A1", price: 1700, viewLink: "unit-a1.html", applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSeFgBE2i5baAcGrmPqayblZnQNrXJPpLK30LYcIPcEWDMPm-Q/viewform?usp=dialog" },
    { title: "A7", price: 2700, viewLink: "unit-a7.html"},
    { title: "B12", price: 770, viewLink: "unit-b12.html"},
    { title: "C34", price: 1265, viewLink: "unit-c34.html"},
    { title: "C35", price: 1210, viewLink: "unit-c35.html"},
    { title: "C36", price: 1100, viewLink: "https://www.loopnet.com/Listing/4545-Georgetown-Pl-Stockton-CA/36377178/"},
    { title: "E25", price: 2950, viewLink: "unit-e25.html"},
    { title: "E26", price: 2375, viewLink: "unit-e26.html"},
    { title: "F41", price: 1600, viewLink: "unit-f41.html"},
    { title: "F42", price: 1600, viewLink: "unit-f42.html"},
  ];

  units.forEach((unit, index) => {
    const card = document.createElement('div');
    card.className = 'unit-card';
    card.innerHTML = `
      <img src="Unit${index + 1}.png" alt="Unit ${unit.title}" />
      <h3>${unit.title}</h3>
      <p>$${unit.price.toLocaleString()}/mo • Retail/Office</p>
      <div class="card-buttons">
        <a class="view-btn" href="${unit.viewLink}" target="_blank">View Listing</a>
        <a class="schedule-btn" href="https://app.usemotion.com/meet/matias-heredia/showing" target="_blank">Schedule Showing</a>
      </div>
    `;
    carousel.appendChild(card);
  });

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
