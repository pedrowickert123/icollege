"use strict";

const Teacher = use("App/Models/Teacher");
const Subject = use("App/Models/Subject");

class TeacherBySubjectController {
  async index({ params }) {
    const { id } = params;

    const subject = await Subject.find(id);
    const teahcers = await subject.teachers().fetch();

    return teahcers;
  }
}

module.exports = TeacherBySubjectController;
