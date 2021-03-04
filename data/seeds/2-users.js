const bcryptjs = require("bcryptjs");

exports.seed = function (knex) {
  return knex("users")
    .truncate()
    .then(function () {
      return knex("users").insert([
        {
          name: "Fire Larry",
          email: "larry@gmail.com",
          password: bcryptjs.hashSync("larry", 8),
        },
        {
          name: "Nature Moe",
          email: "moe@gmail.com",
          password: bcryptjs.hashSync("moe", 8),
        },
        {
          name: "Water Curly",
          email: "curly@gmail.com",
          password: bcryptjs.hashSync("curly", 8),
        },
      ]);
    });
};
