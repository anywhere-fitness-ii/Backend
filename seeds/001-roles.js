
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('roles').truncate()
    .then(function () {
      const roles = [
        {id: 1, role: "user"},
        {id: 2, role: "instructor"},
        {id: 3, role: "admin"},
      ]
      // Inserts seed entries
      return knex('roles').insert(roles);
    });
};
