if (process.env.local_env !== "production") {
  const dotenv: any = require("dotenv");
  dotenv.config();
}

export default {
  mysql: {
    host: process.env.host,
    port: <number>parseInt(process.env.port),
    user: process.env.sql_username,
    database: process.env.database,
    password: process.env.password
  }
}

// Aware process.env isn't a particularly safe place for production secrets. Looking into alternatives.