exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('slack_users', (t) => {
      t.varchar('user_id', 20).primary('user_id');
      t.varchar('slack_user', 30);
    }),
    knex.schema.createTable('slack_channels', (t) => {
      t.varchar('channel_id', 20).primary('channel_id');
      t.varchar('slack_channel', 30);
    }),
    knex.schema.createTable('slack_messages', (t) => {
      t.increments();
      t.varchar('slack_user_id', 20).references('user_id').inTable('slack_users');
      t.varchar('slack_channel_id', 20).references('channel_id').inTable('slack_channels');
      t.string('text');
      t.timestamps(true, true);
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
