import express, { response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = 8222;
const db = new pg.Pool({
  connectionString: process.env.DATABASE_CONNECTION_STRING,
});

console.log("my very secret key is", process.env.MY_VERY_SECRET_KEY);

app.get("/", function (req, res) {
  res.send("this is my root route hun");
});

app.get("/digitalcameras", async function (req, res) {
  const allDigitalCameras = await db.query(`SELECT * FROM digital_cameras`);
  console.log(allDigitalCameras.rows);
  res.json(allDigitalCameras.rows);
});

app.get("/digitalcamerasquery", async function (req, res) {
  const queriedDigitalCameras = await db.query(
    `SELECT * FROM digital_cameras WHERE release_year = ${req.query.year}`
  );

  res.json(queriedDigitalCameras.rows);
  console.log(req.query.year);
});

app.post("/digitalcameras", function (req, res) {
  console.log(request.body);
});

app.listen(PORT, function () {
  console.log(`server is running on ${PORT}`);
});
