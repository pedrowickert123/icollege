"use strict";

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

class UsersSeeder {
  async run() {
    await Factory.model("App/Models/User").create();
  }
}

module.exports = UsersSeeder;
