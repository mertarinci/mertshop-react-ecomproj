module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '0.0.0.0'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'db'),
      user: env('DATABASE_USERNAME', 'user'),
      password: env('DATABASE_PASSWORD', 'pass'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
