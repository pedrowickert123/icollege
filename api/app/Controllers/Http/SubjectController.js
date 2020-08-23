"use strict";

const Subject = use("App/Models/Subject");

class SubjectController {
  async index() {
    const subjects = await Subject.query().with("course").fetch();

    return subjects;
  }

  async store({ request }) {
    const { teachers, ...data } = request.all();

    const subject = await Subject.create(data);

    await subject.teachers().attach(teachers);

    return { message: "Disciplina criada com sucesso!" };
  }

  async show({ params, response }) {
    const { id } = params;

    const subjectData = await Subject.query()
      .with("teachers")
      .where("id", id)
      .first();

    if (!subjectData)
      return response
        .status(404)
        .send({ message: "A disciplina não foi encontrada!" });

    const subjectParsed = subjectData.toJSON();

    const subject = {
      ...subjectParsed,
      teachers: subjectParsed.teachers.map((item) => item.id),
    };

    return subject;
  }

  async update({ params, request, response }) {
    const { id } = params;
    const { teachers, ...data } = request.all();

    const subject = await Subject.find(id);

    if (!subject)
      return response
        .status(404)
        .send({ message: "A disciplina não foi encontrada!" });

    subject.merge(data);
    await subject.save();

    await subject.teachers().detach();
    await subject.teachers().attach(teachers);

    return { message: "Disciplina editada com sucesso!" };
  }

  async destroy({ params, response }) {
    const { id } = params;

    const subject = await Subject.find(id);

    if (!subject)
      return response
        .status(404)
        .send({ message: "A disciplina não foi encontrada!" });

    await subject.delete();

    return { message: "Disciplina deletada com sucesso!" };
  }
}

module.exports = SubjectController;
