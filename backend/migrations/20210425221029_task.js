
exports.up = function(knex) {
  return knex.schema
    .createTable('tasks', function (table) {
        table.increments('id')
        table.string('title', 255)
        table.string('message', 1024)
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tasks')
};
