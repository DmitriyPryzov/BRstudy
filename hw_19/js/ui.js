export function createCard(dataCard, {cardW = 100, cardH = 100}) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-id", dataCard.id);
    card.style.width = cardW + "px";
    card.style.height = cardH + "px";

    card.innerHTML = `<div class="card-wrap">
                                <div class="card-front">
                                    <img src="${dataCard.url}" alt="1">
                                </div>
                                <div class="card-back">
                                    <img src="./assets/img/back/blue2.svg" alt="1">
                                </div>
                            </div>`;

    return card;
}