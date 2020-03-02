
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      const users = [
        {id: 1, name: "Damon", email: "damon@gmail.com", username: "damond", password: "pass", role_id: 1},
        {id: 2, name: "Alston", email: "alston@gmail.com", username: "alstong", password: "pass", role_id: 2},
        {id: 3, name: "Eunice", email: "eunice@gmail.com", username: "euniceb", password: "pass", role_id: 3},
      ]
      // Inserts seed entries
      return knex('users').insert(users);
    });
};
