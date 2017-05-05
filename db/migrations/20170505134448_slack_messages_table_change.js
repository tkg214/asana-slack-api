
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('slack_users', (t) => {
      t.dropPrimary();
      t.integer('user_id').primary('user_id').alter();
    }),
    knex.schema.alterTable('slack_channels', (t) => {
      t.dropPrimary();
      t.integer('channel_id').primary('channel_id').alter();
    }),
    knex.schema.table('slack_messages', (t) => {
      t.dropColumn('user_id');
      t.dropColumn('channel_id');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('slack_messages', (t) => {
      t.integer('user_id').references('id').inTable('slack_users');
      t.integer('channel_id').references('id').inTable('slack_channels');
    }),
    knex.schema.alterTable('slack_users', (t) => {
      t.dropPrimary();
      t.increments().primary().alter();
    }),
    knex.schema.alterTable('slack_channels', (t) => {
      t.dropPrimary();
      t.increments().primary().alter();
    })
  ]);
};
