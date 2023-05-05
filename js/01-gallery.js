// Створи галерею з можливістю кліку по її елементах і перегляду
//  повнорозмірного зображення у модальному вікні.
// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на ul.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і 
// додай у проект посилання на мініфіковані(.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову 
// розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.



import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const list = document.querySelector('ul');
list.addEventListener('click', openModal);


const image = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`;
}).join('');

list.insertAdjacentHTML('afterbegin', image);
console.log(list);


function openModal(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    
    const showOriginal = event.target.dataset.source;
   
    const instance = basicLightbox.create(`
    <img src=${showOriginal} width="800" height="600">
`,
        {
            onShow: (instance) => {
                window.addEventListener('keydown', onEscKeyPress);
            },
            
            onClose: (instance) => {
                window.removeEventListener('keydown', onEscKeyPress);
            },
        });
    
     instance.show();
    
    
    function onEscKeyPress(event) {
        
        if (event.code === 'Escape') {
            instance.close();
        }
    };
   };

 