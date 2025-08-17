export function setGameGrid(cardsCount) {
    let cols = Math.ceil(Math.sqrt(cardsCount));
    let rows = Math.ceil(cardsCount / cols);

    return {cols, rows};
}


export function setCardSize(count) {

    const {cols, rows} = setGameGrid(count);

    const screenW = window.innerWidth;
    const screenH = window.innerHeight;

    let cardW = screenW / cols - 40;
    let cardH = screenH / rows - 40;

    let ratio = 2 / 3;

    if (cardW / cardH > ratio) {
        cardW = cardH * ratio;
    } else {
        cardH = cardW / ratio;
    }

    return {cardW, cardH};
}