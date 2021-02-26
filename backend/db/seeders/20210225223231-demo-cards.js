'use strict';
const faker = require('faker')

const cardData = () => {
  const cardInfo = [];
  for (let i = 0; i < 150; i++) {
    cardInfo.push({
      deckId: Math.random() * 20,
      question: faker.lorem.sentence(),
      answer: faker.lorem.word(),
      rating: Math.random() * 5,
    })
  }
  return cardInfo;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cards', [
      {
        deckId: 1,
        question: 'What is your favorite color?',
        answer: 'banana',
        rating: 4,
      },
      ...cardData(),
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cards', null, {});

  }
};
