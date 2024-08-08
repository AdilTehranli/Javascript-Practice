"use strict";

const countriesContainer = document.querySelector('.all_section');

const country = async () => {
    try {
        const response = await axios.get("https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region");
        const countriesData = response.data;

        countriesData.forEach((country) => {
            const sectionItem = document.createElement('div');
            sectionItem.classList.add('section_item');

            sectionItem.innerHTML = `
                <img src="${country.flags.png}" alt="${country.name.common}">
                <h3>${country.name.common}</h3>
                <p>Population: ${country.population.toLocaleString()}</p>
                <p>Region: ${country.region}</p>
                <p>Capital: ${country.capital ? country.capital[0] : 'N/A'}</p>
            `;

            countriesContainer.appendChild(sectionItem);
        });

    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

country();
