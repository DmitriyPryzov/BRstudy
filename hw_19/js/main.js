import Cards from "./cards.js";
import {setCardSize, setGameGrid} from "./adaptive.js";
import {createCard} from "./ui.js";
import {shuffleArray} from "./helpers.js";

const radio = document.querySelectorAll(".menu-level__item input");
const startBtn = document.querySelector(".start");
const sliderWrap = document.querySelector(".slider-wrap");

const deck = document.querySelector(".deck");

let level = 0;
let pairId = "";
let firstCard;

radio.forEach(item => {
    item.addEventListener("change", () => {
        startBtn.style.display = "block";
        level = item.value;
    });
});

startBtn.addEventListener("click", () => {
  sliderWrap.style.transform = "translateX(-100%)"; 
  start(deck, level);
});

deck.addEventListener("click", (e) => {

    const target = e.target.closest(".card");

    if (target && !target.classList.contains("select")) {
        const id = target.dataset.id;
        target.classList.add("select");

        setTimeout(() => {
            if (pairId) {
                if (pairId === id) {
                    level -= 2;
                    pairId = "";
                    
                } else {
                    target.classList.remove("select");
                    firstCard.classList.remove("select");
                    pairId = "";
                }
            } else {
                pairId = target.dataset.id;
                firstCard = target;
            } 
            if (level == 0) return endGame();
        }, 500);

    }
});

function start(parent, count) {

    const {cols, rows} = setGameGrid(count);

    const cardElements = createCards(count);

    deck.style.gridTemplateColumns = `repeat(${cols}, auto)`;
    deck.style.gridTemplateRows = `repeat(${rows}, auto)`;

    parent.append(...shuffleArray(cardElements));
}

function endGame() {
    alert("Перемога!");
    sliderWrap.style.transform = "translateX(0)"; 
    deck.innerHTML = "";
}


function createCards(count) {
    const cardElements = [];
    const shuffleArr = shuffleArray(Cards);

    const cardSize= setCardSize(count);

    for (let i = 0; i < count / 2; i++) {
        const card = createCard(shuffleArr[i], cardSize);
        const card2 = createCard(shuffleArr[i], cardSize);

        cardElements.push(card, card2);        
    }

    return cardElements;
}
