export function fetchCountries(name) {
    return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name.official,population,flags.svg,languages`)
    .then((response) => {
    return response.json();
  })
  .then((data) => {
    
    console.log(data);
    return data;
  })
  .catch ((error) => {
console.error('Ошибка:', error);
});
}

