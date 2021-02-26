'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        name: 'Math',
      },
      {
        name: 'History',
      },
      {
        name: 'Javascript',
      },
      {
        name: 'Science',
      },
      {
        name: 'git',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
