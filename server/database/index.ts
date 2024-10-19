// import 'dotenv/config';
import { drizzle } from "drizzle-orm/mysql2";
import * as schema from "./schema";

export const tables = schema

const runtimeConfig = useRuntimeConfig()

export const useDb = () => {
  console.log('runtimeConfig', runtimeConfig.env.DATABASE_URL)
  return drizzle({
    connection: { uri: runtimeConfig.env.DATABASE_URL as string },
  });
}