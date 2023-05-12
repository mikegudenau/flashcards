const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const { createCard } = require('../src/card');
const { createDeck, countCards } = require('../src/deck');
const { createRound } = require('../src/round');

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function start() {
  const cards = [];
  prototypeQuestions.forEach((card) => {
    cards.push(createCard(card.id, card.question, card.answers, card.correctAnswer))
  });
  const deck = createDeck(cards);
  const round = createRound(deck);
  printMessage(deck);
  printQuestion(round);
}

module.exports = { printMessage, printQuestion, start };


