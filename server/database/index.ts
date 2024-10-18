// import 'dotenv/config';
import { drizzle } from "drizzle-orm/mysql2";
import * as schema from "./schema";

export const tables = schema

export const useDb = () => {
  return drizzle({
    connection: { uri: process.env.DATABASE_URL as string },
  });
}