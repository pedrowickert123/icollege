"use strict";

const Class = use("App/Models/Class");

class ClassController {
  async index({ request }) {
    const { startDate, id, period } = request.all();

    const query = Class.query().with("teacher").with("subject");

    if (startDate) query.where("start_date", startDate);
    if (id) query.where("id", id);
    if (period) query.where("period", period);

    const classes = await query.fetch();

    return classes;
  }

  async store({ request }) {
    const data = request.all();

    await Class.create(data);

    return { message: "Turma criada com sucesso!" };
  }

  async show({ params, response }) {
    const { id } = params;

    const vClass = await Class.find(id);

    if (!vClass)
      return response
        .status(404)
        .send({ message: "A turma não foi encontrada!" });

    return vClass;
  }

  async update({ params, request, response }) {
    const { id } = params;
    const data = request.all(0);

    const vClass = await Class.find(id);

    if (!vClass)
      return response
        .status(404)
        .send({ message: "A turma não foi encontrada!" });

    vClass.merge(data);
    await vClass.save();

    return { message: "Turma editada com sucesso!" };
  }

  async destroy({ params, response }) {
    const { id } = params;

    const vClass = await Class.find(id);

    if (!vClass)
      return response
        .status(404)
        .send({ message: "A turma não foi encontrada!" });

    await vClass.delete();

    return { message: "Turma deletada com sucesso!" };
  }
}

module.exports = ClassController;
