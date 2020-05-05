export default {
  mysql: {
    host: process.env.host,
    port: process.env.port,
    user: process.env.sql_username,
    database: process.env.database,
    password: process.env.password
  }
}

// Aware process.env isn't a particularly safe place for production secrets. Looking into alternatives.