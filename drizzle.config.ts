import { defineConfig } from "drizzle-kit";
import os from "os";
import path from "path";

const homedir = os.homedir();
const dbUrl = path.join(homedir, ".config", "pos", "pos.db");
console.log(dbUrl);

export default defineConfig({
  dialect: "sqlite",
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: dbUrl,
  },
});
