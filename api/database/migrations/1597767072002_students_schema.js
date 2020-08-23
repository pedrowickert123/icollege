"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class StudentsSchema extends Schema {
  up() {
    this.create("students", (table) => {
      table.increments();
      table.string("name").notNullable();
      table.string("document").notNullable();
      table.date("birth_date").notNullable();
      table.string("gender").notNullable();
      table.string("email").notNullable();
      table.string("phone").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("students");
  }
}

module.exports = StudentsSchema;
