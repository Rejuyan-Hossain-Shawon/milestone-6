const loadCountries = () => {
    fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(data => diaplayCountry(data))
}
loadCountries();
const diaplayCountry = (countries) => {
    const countriesDiv = document.getElementById("countries");
    countries.forEach(country => {
        const div = document.createElement("div");
        div.classList.add("country");
        div.innerHTML = `<h2>${country.name}</h2>
        <p>${country.capital}</p>
        <button onclick="loadCounrtyDetails('${country.name}')">Details</button>
        `
        // const h2 = document.createElement("h2");
        // h2.innerText = country.name;
        // const p = document.createElement("p");
        // p.innerText = country.capital;
        // div.appendChild(h2);
        // div.appendChild(p);
        countriesDiv.appendChild(div);

        // console.log(country);
        // console.log(p);
    });
};

const loadCounrtyDetails = (name) => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))

}

const displayCountryDetail = (data) => {
    console.log(data);
    const countryDetailSection = document.getElementById("country-detail");
    countryDetailSection.innerHTML = `<h2>${data.name}</h2><p>Population:${data.population}</p>
    <img width="200px" src="${data.flag}"></img>`
    console.log(countryDetailSection);

};