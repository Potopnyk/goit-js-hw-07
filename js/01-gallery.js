import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
galleryContainer.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
    return;
    }
    const bunnerUrl = event.target.dataset.source;
    galleryCards.preview = bunnerUrl;

const instance = basicLightbox.create(`
    <img src="${galleryCards.preview}" width="800" height="600">
`)

instance.show()
});
    
function galleryCards(items) {
    return items.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}" />
        </a>
    </div>`;
    }).join('');
    
};

const cardsMarkup = galleryCards(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup); 


