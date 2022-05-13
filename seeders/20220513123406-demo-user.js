'use strict';

const user = require("../models/user");

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      username: 'Sergio',
      password: '1234',
      email: 'samarilla@ilg.cat',
    }],{});

    await queryInterface.bulkInsert('users', [{
      username: 'Angle',
      password: '1234',
      email: 'Angle@ilg.cat',
    }],{});

    await queryInterface.bulkInsert('users', [{
      username: 'Ayton',
      password: '1234',
      email: 'Ayton@ilg.cat',
    }],{});

    await queryInterface.bulkInsert('users', [{
      username: 'Bryan',
      password: '1234',
      email: 'Bryan@ilg.cat',
    }],{});

    await queryInterface.bulkInsert('users', [{
      username: 'Cristian',
      password: '1234',
      email: 'Cristan@ilg.cat',
    }],{});

    await queryInterface.bulkInsert('users', [{
      username: 'cesar',
      password: '1234',
      email: 'cesar@ilg.cat',
    }],{});

  }

};
