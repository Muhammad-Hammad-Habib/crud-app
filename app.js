import express from "express";
import connectdb from "./db/connectdb.js";
import { join } from "path";
import webRoutes from "./routes/web.js";
const app = express();
const port = process.env.PORT || "5000";

//st
// static EJS file (HTLM)
app.use(express.static(join(process.cwd(), "public")));

app.set("view engine", "ejs");

app.use("/student", webRoutes);

connectdb();

// app.get("/", async (req, resp) => {
//   resp.send("HELLO WORLD");
// });

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

console.log("hello");
