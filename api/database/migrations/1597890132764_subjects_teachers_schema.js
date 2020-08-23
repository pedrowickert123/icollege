"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SubjectsTeachersSchema extends Schema {
  up() {
    this.create("subjects_teachers", (table) => {
      table.increments();
      table
        .integer("subject_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("subjects");
      table
        .integer("teacher_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("teachers");
      table.timestamps();
    });
  }

  down() {
    this.drop("subjects_teachers");
  }
}

module.exports = SubjectsTeachersSchema;
