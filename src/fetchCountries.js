export function fetchCountries(name) {
  return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json();
    })
    .then((data) => {
      const addCard = document.querySelector('.country-info');
      addCard.insertAdjacentHTML('beforeend', createCard(data))
      console.log(data);
    })
    .catch((error) => {
      console.error('Oops, there is no country with that name', error);
    });
}

function createCard(arr) {
  return arr.map(({ name: { official }, capital, population, flags: { png }, languages }) => {
    return `
      <li>
        <h2>${official}</h2>
        <img src="${png}" alt="">
        <p>${capital}</p>
        <p>${population}</p>
        <p>${{ languages }}</p>
      </li>
    `;
  }).join('');
}