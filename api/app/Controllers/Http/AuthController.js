"use strict";

const User = use("App/Models/User");

class AuthController {
  async store({ request, response, auth }) {
    const { username, password } = request.all();

    const user = await User.query().where("username", username).first();

    if (!user)
      return response
        .status(404)
        .send({ message: "E-mail ou senha inccoreto!" });

    const token = await auth
      .withRefreshToken()
      .attempt(username.toLowerCase(), password);

    if (!token) return response.status(401).send({ message });

    return { token, user };
  }
}

module.exports = AuthController;
