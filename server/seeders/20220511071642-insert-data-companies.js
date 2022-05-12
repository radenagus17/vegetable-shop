"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Companies",
      [
        {
          name: "Alfamart",
          address: "Jl. Kemauan Baru",
          logo: "https://asset.kompas.com/crops/aJFbgSeI3VnWccv5SwU0X5FdltM=/0x0:780x520/780x390/data/photo/2019/04/22/2082777371.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Alfamidi",
          address: "Jl. Sukamaju",
          logo: "https://statik.tempo.co/data/2017/02/21/id_583410/583410_620.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Indomaret",
          address: "Jl. Teratai Kriting",
          logo: "https://asset.kompas.com/crops/xT8tHDZLhdXJXBsgB3X6EKd51p0=/0x0:780x520/720x360/data/photo/2018/01/23/819499266.jpg",
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
    await queryInterface.bulkDelete("Companies", null, {
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
