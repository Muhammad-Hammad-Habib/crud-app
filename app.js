import express from "express";
import connectdb from "./db/connectdb.js";
import { join } from "path";
import webRoutes from "./routes/web.js";
const app = express();
const port = process.env.PORT || "5000";

//Database Connection
connectdb();

// static EJS file (HTLM)
app.use("/student", express.static(join(process.cwd(), "public")));
// Template Engine express
app.set("view engine", "ejs");
// web Router 
app.use("/student", webRoutes);


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

console.log("hello");
