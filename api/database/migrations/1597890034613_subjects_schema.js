"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SubjectsSchema extends Schema {
  up() {
    this.create("subjects", (table) => {
      table.increments();
      table
        .integer("course_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("courses");
      table.string("name").notNullable();
      table.text("materials").notNullable();
      table.text("bibliography").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("subjects");
  }
}

module.exports = SubjectsSchema;
