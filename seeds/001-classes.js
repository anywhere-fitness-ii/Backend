
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('classes').truncate()
    .then(function () {
      const classes = [
        {id: 1, class_name: "Punching bag workout", class_type: "boxing", class_date: "03/12/2020", class_start_time: "7:00AM", class_duration: "1 hr", class_intensity: "Hard", class_location: "Planet fitness", registered_participants: 20, class_max_participants: 30},
        {id: 2, class_name: "10 mile ride", class_type: "Spin", class_date: "03/12/2020", class_start_time: "10:00AM", class_duration: "1 hr", class_intensity: "Hard", class_location: "Crunch", registered_participants: 25, class_max_participants: 30},
        {id: 3, class_name: "Running madness", class_type: "Endurance", class_date: "03/12/2020", class_start_time: "7:00PM", class_duration: "2 hrs", class_intensity: "Medium", class_location: "LifeTime Fitness", registered_participants: 40, class_max_participants: 50},
      ]
      // Inserts seed entries
      return knex('classes').insert(classes);
    });
};
