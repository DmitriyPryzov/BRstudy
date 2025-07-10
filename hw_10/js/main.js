import Cities from "./weather/data/cities.js";
import { cardListInit } from "./weather/weather.js";

window.addEventListener("DOMContentLoaded", async () => {

    const cityList = document.querySelector(".weather-city-list");
    const radioBtns = document.querySelectorAll(".radio");

    await cardListInit(Cities["ukr"], cityList);


    radioBtns.forEach(radio => radio.addEventListener("change", async () => {
        await cardListInit(Cities[radio.value], cityList);
    }));
});

