"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "John Doe",
          email: "teste@email.com",
          password: "1234567",
          uuid: "157a33b5-1524-43f0-80fb-2ca0bdb32021",
          createdAt: "2021-03-26T21:02:17.000Z",
          updatedAt: "2021-03-26T21:02:17.000Z",
        },
        {
          username: "Teste Doe",
          email: "doe@email.com",
          password: "123435678",
          uuid: "157a33b5-1525-43f0-80fb-26a0bdb32021",
          createdAt: "2021-03-26T21:02:17.000Z",
          updatedAt: "2021-03-26T21:02:17.000Z",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};
