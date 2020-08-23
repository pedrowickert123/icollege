"use strict";

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const moment = use("moment");

Factory.blueprint("App/Models/User", (faker) => {
  return {
    username: "admin",
    email: "admin@gmail.com",
    password: "admin123",
  };
});
