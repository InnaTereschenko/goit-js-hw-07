import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector('ul');

const image = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href=${original}>
      <img class="gallery__image" src=${preview} alt=${description} />
   </a>
</li>`;
}).join('');

list.insertAdjacentHTML('afterbegin', image);
console.log(list);

const lightbox = new SimpleLightbox('ul a', { captionDelay: 250, captionsData: 'alt', nav: true });

list.addEventListener('click', function(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
});

