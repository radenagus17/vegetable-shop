"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Items",
      [
        {
          name: "Sayur Bayam",
          kode: "Bayam10112020-001",
          status: "Ready",
          imageUrl: "https://imgx.sonora.id/crop/0x0:0x0/700x465/photo/2021/10/22/sayur-bayam-bening-foto-resep-ut-20211022010826.jpg",
          price: 5000,
          UserId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sayur Kangkung",
          kode: "Kangkung10112020-002",
          status: "Ready",
          imageUrl: "https://b6m6w3k2.rocketcdn.me/wp-content/uploads/2021/07/manfaat-sayur-kangkung-untuk-ibu-hamil-2.jpg",
          price: 3000,
          UserId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sayur Kol",
          kode: "Kol10122021-003",
          status: "Ready",
          imageUrl: "https://dijelasin1-1a502.kxcdn.com/wp-content/uploads/2020/01/1-11.jpg",
          price: 4000,
          UserId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sayur Sawi",
          kode: "Sawi10122021-004",
          status: "Ready",
          imageUrl: "https://assets.pikiran-rakyat.com/crop/0x108:1080x900/x/photo/2021/06/30/2253527795.jpg",
          price: 4500,
          UserId: 2,
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
    await queryInterface.bulkDelete("Items", null, {
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
