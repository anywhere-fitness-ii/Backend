
exports.up = function(knex) {
  return knex.schema.createTable('roles', tbl => {
      tbl.increments();
      tbl
      .string('role', 128)
      .notNullable();
  })
  .createTable('users', tbl => {
      tbl.increments();
      tbl
      .string('name', 128)
      .notNullable();
      tbl
      .string('email', 128)
      .notNullable();
      tbl
      .string('username', 128)
      .notNullable();
      tbl
      .string('password', 128)
      .notNullable();
      tbl
      .integer('role_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('roles')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
      tbl
      .string('picture_url', 256);
      tbl
      .integer('age');
      tbl
      .string('height', 128);
      tbl
      .string('weight', 128);
      tbl
      .string('specialty', 128);
  })
  .createTable('classes', tbl => {
      tbl.increments();
      tbl
      .string('class_name', 128)
      .notNullable();
      tbl
      .string('class_type', 128)
      .notNullable();
      tbl
      .string('class_date', 128)
      .notNullable();
      tbl
      .string('class_start_time', 128)
      .notNullable();
      tbl
      .string('class_duration', 128)
      .notNullable();
      tbl
      .string('class_intensity', 128)
      .notNullable();
      tbl
      .string('class_location', 128)
      .notNullable();
      tbl
      .integer('registered_participants', 128) 
      .notNullable();
      tbl
      .integer('class_max_paricipants', 128) //max paricipants
      .notNullable();
      tbl
      .string('class_img_url', 256) //optional image
      tbl
      .integer('rating'); //1-10
  })
  .createTable('user_classes', tbl => {
      tbl.increments();
      tbl.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.integer('class_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('classes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

  })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('user_classes')
        .dropTableIfExists('classes')
        .dropTableIfExists('users')
        .dropTableIfExists('roles')
};
