const cardsURL = 'http://localhost:3001/cards';
const cardUlElement = document.getElementById('cardlist');

fetch(cardsURL)
    .then(res => res.json())
    .then(renderCards)
    .catch(err => console.error(`here's the error: ${err}`));

function renderCards(cards) {
    cards.forEach(renderCard);
}

function renderCard(card) {
    const cardListItemElement = document.createElement('li');
    cardListItemElement.textContent = card.card_name;
    cardUlElement.append(cardListItemElement);
};