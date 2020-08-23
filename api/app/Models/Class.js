"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Class extends Model {
  subject() {
    return this.belongsTo("App/Models/Subject");
  }

  teacher() {
    return this.belongsTo("App/Models/Teacher");
  }
}

module.exports = Class;
