exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('slack_messages', (t) => {
      t.dropColumn('timestamp');
      t.timestamps(true, true);
      t.boolean('fetched').defaultTo(false);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('slack_messages', (t) => {
      t.dropColumn('created_at');
      t.dropColumn('updated_at');
      t.integer('timestamp');
      t.dropColumn('fetched');
    })
  ]);
};
