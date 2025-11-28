import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { db } from "./db/db";
import { products } from "./db/schema";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", async (req: Request, res: Response) => {
  try {
    const result = await db.select().from(products).limit(10).execute();
    res.json({ msg: "success", data: result }).status(200);
  } catch (error) {
    console.log(error);
    res.status(400);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
