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
  if (Number(name.length) === 0) {
    return;
  } if (Number(name.length) === 1) {
    console.log('Too many matches found. Please enter a more specific name.')
  } if (Number(name.length) > 1) {
    fetchCountries(name.trim());
  }

}


