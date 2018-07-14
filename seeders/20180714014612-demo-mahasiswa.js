'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('mahasiswas', [{
      npm : 'laki-laki',
      nama : 'John',
      no_telp : '08154023099',
      created_at : new Date(),
      updated_at : new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('mahasiswas', null, {});
  }
};
