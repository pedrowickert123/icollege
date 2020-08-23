"use strict";

const Student = use("App/Models/Student");

class StudentController {
  async index({ request }) {
    const { name, id, document } = request.all();

    const query = Student.query();

    if (name) query.where("name", "like", `%${name}%`);
    if (id) query.where("id", Number(id));
    if (document) query.where("document", "like", `%${document}%`);

    const students = await query.fetch();

    return students;
  }

  async store({ request }) {
    const data = request.all();

    await Student.create(data);

    return { message: "Aluno criado com sucesso!" };
  }

  async show({ params, response }) {
    const { id } = params;

    const student = await Student.find(id);

    if (!student)
      return response
        .status(404)
        .send({ message: "O aluno não foi encontrado!" });

    return student;
  }

  async update({ params, request, response }) {
    const { id } = params;
    const data = request.all(0);

    const student = await Student.find(id);

    if (!student)
      return response
        .status(404)
        .send({ message: "O aluno não foi encontrado!" });

    student.merge(data);
    await student.save();

    return { message: "Aluno editado com sucesso!" };
  }

  async destroy({ params, response }) {
    const { id } = params;

    const student = await Student.find(id);

    if (!student)
      return response
        .status(404)
        .send({ message: "O aluno não foi encontrado!" });

    await student.delete();

    return { message: "Aluno deletado com sucesso!" };
  }
}

module.exports = StudentController;
