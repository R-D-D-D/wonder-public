import pgPromise from "pg-promise";

const pgp = pgPromise();

const cn = {
  host: process.env.POSTGRES_HOST || "localhost",
  port: process.env.POSTGRES_PORT || 5432,
  database: process.env.POSTGRES_DB || "wonder",
  username: process.env.POSTGRES_USERNAME || "postgres",
  password: process.env.POSTGRES_PASSWORD || "postgres"
};

const cnStr = `postgres://${cn.username}:${cn.password}@${cn.host}:${cn.port}/${cn.database}`

const db = pgp(cnStr);

export default db;
