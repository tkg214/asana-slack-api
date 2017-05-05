exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('slack_users', (t) => {
      t.increments();
      t.integer('user_id').unique;
      t.varchar('slack_user', 30).unique;
    }),
    knex.schema.createTable('slack_channels', (t) => {
      t.increments();
      t.integer('channel_id').unique;
      t.varchar('slack_channel', 30).unique;
    }),
    knex.schema.createTable('slack_messages', (t) => {
      t.increments();
      t.integer('user_id').references('id').inTable('slack_users');
      t.integer('channel_id').references('id').inTable('slack_channels');
      t.string('text');
      t.integer('timestamp');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('slack_users'),
    knex.schema.dropTable('slack_channels'),
    knex.schema.dropTable('slack_messages')
  ]);
};
