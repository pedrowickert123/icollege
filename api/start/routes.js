"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});

Route.post("auth", "AuthController.store");

Route.group(() => {
  Route.get("teachers/subject/:id", "TeacherBySubjectController.index");

  Route.resource("students", "StudentController").apiOnly();
  Route.resource("courses", "CourseController").apiOnly();
  Route.resource("subjects", "SubjectController").apiOnly();
  Route.resource("teachers", "TeacherController").apiOnly();
  Route.resource("classes", "ClassController").apiOnly();
}).middleware(["auth"]);
