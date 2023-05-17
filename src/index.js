import './css/styles.css';
import { fetchCountries } from "./fetchCountries";
var debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

const inputRef = document.querySelector('#search-box');
console.log(inputRef.value)
inputRef.addEventListener('keyup', debounce(onInputValue, DEBOUNCE_DELAY))
function onInputValue(e) {
  const name = inputRef.value;
  console.log(Number(name.length))
  if (Number(name.length) > 1) {
    fetchCountries(name.trim());
  } if (Number(name.length) === 0) {
    return;
  } else {
    console.log('Введіть більше символів')
  }
  
}


// function createGalleryCard(gallery) {
//     return gallery.map(({ description, preview, original }) => {
//         return `
// <li class="gallery__item">
//         <a class="gallery__link" href="${original}"">
//             <img 
//             class="gallery__image"
//             src="${preview}" 
//             alt="${description}">
//         </a>
//     </li>
//     `;
//     }).join('');
     
// }



