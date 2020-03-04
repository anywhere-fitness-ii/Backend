const db = require('../data/db-config.js');

module.exports = {
  add,
  find,
  findBy,
  findById,

  findClasses,
  findClassById,
  editClass,
  removeClass

};

function find() {
  return db('users').select('id', 'name', 'email', 'username', 'password', 'role_id', 'picture_url', 'age', 'weight', 'height', 'specialty');
}

function findBy(filter) {
  return db('users').where(filter);
}

async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}



//classes
function findClasses() {
    return db('classes').select('id', 'class_name', 'class_type', 'class_date', 'class_start_time', 'class_duration', 'class_intensity', 'class_location', 'registered_participants', 'class_max_participants', 'class_img_url', 'rating', 'creator_id');
}

function findClassById(id) {
    return db('classes')
      .where({ id })
      .first();
}

function editClass(changes, id) {
    return db("classes")
    .where({id})
    .update(changes, '*')
}


function removeClass(id) {
    return db("classes")
    .where({id})
    .del()
};
