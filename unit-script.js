
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
