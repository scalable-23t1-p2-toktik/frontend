import type { Knex } from "knex";
require('dotenv').config({ path: '.env' });

const config: Knex.Config = {
  client: "pg",
  connection: process.env.DATABASE_URL,
  migrations: {
    extension: "ts",
  },
};

export default config;