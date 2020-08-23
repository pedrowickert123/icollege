"use strict";

const Teacher = use("App/Models/Teacher");

class TeacherController {
  async index({ request }) {
    const { name, document } = request.all();

    const query = Teacher.query();

    if (name) query.where("name", "like", `%${name}%`);
    if (document) query.where("document", "like", `%${document}%`);

    const teachers = await query.fetch();

    return teachers;
  }

  async store({ request }) {
    const data = request.all();

    await Teacher.create(data);

    return { message: "Professor criado com sucesso!" };
  }

  async show({ params, response }) {
    const { id } = params;

    const teacher = await Teacher.find(id);

    if (!teacher)
      return response
        .status(404)
        .send({ message: "O professor não foi encontrado!" });

    const classes = await teacher.classes().fetch();
    const subjects = await teacher.subjects().fetch();

    const teacherData = teacher.toJSON();

    return { ...teacherData, classes, subjects };
  }

  async update({ params, request, response }) {
    const { id } = params;
    const data = request.all(0);

    const teacher = await Teacher.find(id);

    if (!teacher)
      return response
        .status(404)
        .send({ message: "O professor não foi encontrado!" });

    teacher.merge(data);
    await teacher.save();

    return { message: "Professor editado com sucesso!" };
  }

  async destroy({ params, response }) {
    const { id } = params;

    const teacher = await Teacher.find(id);

    if (!teacher)
      return response
        .status(404)
        .send({ message: "O professor não foi encontrado!" });

    await teacher.delete();

    return { message: "Professor deletado com sucesso!" };
  }
}

module.exports = TeacherController;
