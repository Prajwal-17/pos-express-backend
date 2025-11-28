import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import os from "os";
import * as schema from "./schema";

const homedir = os.homedir();
const dbUrl = path.join(homedir, ".config", "pos", "pos.db");

const sqlite = new Database(dbUrl);

export const db = drizzle(sqlite, { schema });
