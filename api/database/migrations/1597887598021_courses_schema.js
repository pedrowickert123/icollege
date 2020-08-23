"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CoursesSchema extends Schema {
  up() {
    this.create("courses", (table) => {
      table.increments();
      table.string("name").notNullable();
      table.integer("subjects_quantity").notNullable();
      table.boolean("graduation").default(false);
      table.timestamps();
    });
  }

  down() {
    this.drop("courses");
  }
}

module.exports = CoursesSchema;
