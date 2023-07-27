"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "comments",
      [
        {
          content: "HERE IS A TEST COMMENT",
          sighting_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          content: "I HOPE THE TEST WORKS",
          sighting_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          content: "HOPING IT REALLY WORKS",
          sighting_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
