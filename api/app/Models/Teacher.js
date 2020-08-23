"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Teacher extends Model {
  classes() {
    return this.hasMany("App/Models/Class");
  }

  subjects() {
    return this.belongsToMany("App/Models/Subject").pivotModel(
      "App/Models/SubjectsTeacher"
    );
  }
}

module.exports = Teacher;
