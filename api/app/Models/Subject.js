"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Subject extends Model {
  course() {
    return this.belongsTo("App/Models/Course");
  }

  teachers() {
    return this.belongsToMany("App/Models/Teacher").pivotModel(
      "App/Models/SubjectsTeacher"
    );
  }
}

module.exports = Subject;
