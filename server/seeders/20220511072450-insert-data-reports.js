"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Reports",
      [
        {
          ItemId: 3,
          CompanyId: 3,
          TransactionId: 1,
          grandTotal: 4000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ItemId: 2,
          CompanyId: 1,
          TransactionId: 2,
          grandTotal: 3000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
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

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Reports", null, {
      truncate: true,
      restartIdentity: true,
      cascade: true,
    });
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
  },
};
