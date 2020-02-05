// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: { 
      filename: './database/projects.db3' 
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { 
      directory: './database/seeds' 
    },
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ', done); // turn on FK enforcement
      },
    },
  },

};