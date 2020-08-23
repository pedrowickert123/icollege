"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ClassesSchema extends Schema {
  up() {
    this.create("classes", (table) => {
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
      table.date("start_date").notNullable();
      table.integer("registration_quantity").notNullable();
      table.string("period").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("classes");
  }
}

module.exports = ClassesSchema;
