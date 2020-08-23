"use strict";

const Course = use("App/Models/Course");

class CourseController {
  async index() {
    const courses = await Course.all();

    return courses;
  }

  async store({ request }) {
    const data = request.all();

    await Course.create(data);

    return { message: "Curso criado com sucesso!" };
  }

  async show({ params, response }) {
    const { id } = params;

    const course = await Course.find(id);

    if (!course)
      return response
        .status(404)
        .send({ message: "O curso não foi encontrado!" });

    return course;
  }

  async update({ params, request, response }) {
    const { id } = params;
    const data = request.all(0);

    const course = await Course.find(id);

    if (!course)
      return response
        .status(404)
        .send({ message: "O curso não foi encontrado!" });

    course.merge(data);
    await course.save();

    return { message: "Curso editado com sucesso!" };
  }

  async destroy({ params, response }) {
    const { id } = params;

    const course = await Course.find(id);

    if (!course)
      return response
        .status(404)
        .send({ message: "O curso não foi encontrado!" });

    await course.delete();

    return { message: "Curso deletado com sucesso!" };
  }
}

module.exports = CourseController;
