import express from "express";
import { prisma } from "@repo/db/prisma"

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", async (req, res) => {

  try {

    const users = await prisma.user.findMany();

    res.json({ msg: "This is http server written in express.js", users: users })

  } catch (error) {
    console.log(error)
    res.json({ msg: "Something went wrong" }).status(400)
  }
})

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`)
})
