import weatherCodes from "./data/setIcon.js";
import getDataFromWeatherAPI from "./api/weather.js";

import createCardElement from "./ui/card.js";
import shuffleArray from "./utils/shuffleArray.js";
import sortCards from "./utils/sortCards.js";


function shuffleColors() {
    const colors = ["rgb(51, 153, 204)", "rgba(51, 204, 204)", "rgb(153, 102, 153)", "rgb(194, 71, 71)", "rgb(226, 103, 74)", "rgb(255, 204, 102)", "rgb(153, 204, 153)", "rgb(102, 153, 153)", "rgb(204, 102, 153)", "rgb(51, 153, 102)", "rgb(102, 102, 153)"];

    return shuffleArray(colors);
}

async function createCards(citiesArr, colors) {
    
    const spinner = document.querySelector(".spinner");
    spinner.style.display = "block";

    const creationRules = [
        {max: 8, class: "quarter"},
        {max: 2, class: "half"},
        {max: 1, class: "full"},
    ];

    const cards = [];
    let currentClass = 0;
    let countEl = 0;

    for (let i = 0; i < citiesArr.length; i++) { 

        if (creationRules[currentClass].max == countEl) {
            currentClass += 1;
            countEl = 0;
        }
        
        const {name, lat, lon} = citiesArr[i];

        const weatherData = await getDataFromWeatherAPI(lat, lon);

        const temp = weatherData.current_weather.temperature;
        const icon = weatherCodes[weatherData.current_weather.weathercode];
        const background = colors[i];

        cards.push(createCardElement({city: name, temp, icon, background, widthClass: creationRules[currentClass].class}));

        countEl++;
    }

    return cards;    
}


function normalizeCardsOrder(cards) {
    const shuffleCards = shuffleArray(cards);
    return sortCards(shuffleCards);
}

function showWeatherList(parent, cards) {
    const spinner = document.querySelector(".spinner");
    spinner.style.display = "none";

    cards.forEach((card, i) => {

        parent.append(card.element);

        setTimeout(() => {
            card.element.classList.add("visible");
        }, i * 200);
    });
}

async function cardListInit(citiesArr, parent) {
    parent.innerHTML = "";

    const colors = shuffleColors();

    const cards = await createCards(citiesArr, colors);
    const normalizeCards = normalizeCardsOrder(cards);

    showWeatherList(parent, normalizeCards);

}


export {cardListInit};