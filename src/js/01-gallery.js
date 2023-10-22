// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// console.log(galleryItems);
const galleryUl = document.querySelector('ul');
galleryUl.style.listStyle = 'none';

const createMarkup = () => {
  const markup = galleryItems
    .map(({ description, preview, original }) => {
      return `<li class="gallery__item">
              <a class="gallery__link" href=${original}>
                <img class="gallery__image"
                  src=${preview} 
                  alt=${description} 
                  title=${description}
                />
              </a>
            </li>`;
    })
    .join('');
  galleryUl.insertAdjacentHTML('beforeend', markup);
};

createMarkup();

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  navText: ['←', '→'],
});
