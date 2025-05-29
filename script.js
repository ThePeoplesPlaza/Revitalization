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
  // --- RANDOM PASTEL COLOR THEME ---
  function generatePastelColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 85%)`;
  }
  const pastelColor = generatePastelColor();
  document.querySelector('.nav-bar').style.backgroundColor = pastelColor;
  document.querySelector('footer').style.backgroundColor = pastelColor;

  // --- UNIT CARDS ---
  const carousel = document.querySelector('.carousel');

  const units = [
    { title: "A1", price: 1700, viewLink: "unit-template.html", applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSeFgBE2i5baAcGrmPqayblZnQNrXJPpLK30LYcIPcEWDMPm-Q/viewform?usp=dialog" },
    { title: "A7", price: 2700, viewLink: "https://showmojo.com/l/73e4cc0017/4545-georgetown-pl-a7-stockton-ca-95207?fullscreen=true&g=2&sd=true"},
    { title: "B12", price: 770, viewLink: "https://showmojo.com/l/7433951017/4545-georgetown-pl-b12-stockton-ca-95207?g=2&sd=true"},
    { title: "C34", price: 1265, viewLink: "https://showmojo.com/l/74dfacf017/4545-georgetown-pl-c34-stockton-ca-95207?fullscreen=true&g=2&sd=true"},
    { title: "C35", price: 1210, viewLink: "https://showmojo.com/l/752cfd3017/4545-georgetown-pl-c35-stockton-ca-95207?fullscreen=true&g=2&sd=true"},
    { title: "C36", price: 1100, viewLink: "https://showmojo.com/l/7577298017/4545-georgetown-pl-c36-stockton-ca-95207?fullscreen=true&g=2&sd=true"},
    { title: "E25", price: 2950, viewLink: "https://showmojo.com/l/75c31a7017/4545-georgetown-pl-e25-stockton-ca-95207?fullscreen=true&g=2&sd=true"},
    { title: "E26", price: 2375, viewLink: "https://showmojo.com/l/760dc2e017/4545-georgetown-pl-e26-stockton-ca-95207?fullscreen=true&g=2&sd=true"},
    { title: "F41", price: 1600, viewLink: "https://showmojo.com/l/765bdab017/4545-georgetown-pl-f41-stockton-ca-95207?g=2&sd=true"},
    { title: "F42", price: 1600, viewLink: "https://showmojo.com/l/76aa186017/4545-georgetown-pl-f42-stockton-ca-95207?fullscreen=true&g=2&sd=true"},
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
      </div>
    `;
    carousel.appendChild(card);
  });

  // --- GALLERY LIGHTBOX ---
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
