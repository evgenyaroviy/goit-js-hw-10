export function fetchCountries(name) {
    const country = fetch(`https://restcountries.com/v3.1/name/${name}`);
return country.then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch ((error) => {
console.error('Ошибка:', error);
});
}

// ?fields={name.official},{population},{flags.svg},{languages}