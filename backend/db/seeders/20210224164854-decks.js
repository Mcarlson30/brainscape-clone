'use strict';
const faker = require('faker');
const deck = require('../models/deck');


const createDeck = () => {
  const deck = [];
  for (let i = 0; i < 20; i++) {
    deck.push({
      name: faker.lorem.word(),
      userId: 1,
    });
  }
  return deck;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Decks', [{
      name: 'Greek History',
      userId: 1,
    },
    ...createDeck(),
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Decks', {}, {});
  }
};
