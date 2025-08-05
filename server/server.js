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
  const allDigitalCameras = await db.query("SELECT * FROM digital_cameras");

  console.log(allDigitalCameras.rows);
  res.json(allDigitalCameras);
});

console.log("Is this working");

app.get("/digitalcamerasquery", async function (req, res) {
  const digitalCamerasQuery = await db.query(
    `SELECT * FROM digitalcameras WHERE release_year = ${req.query.year}`
  );
  res.json(digitalCamerasQuery.rows);
});

app.post("/digitalcameras", async function (req, res) {
  console.log(
    "The server - app.post /digitalcameras endpoint - req.body info:",
    req.body
  );

  console.log(req.body.userTitle);

  const databaseResponse = await db.query(
    `
    INSERT INTO digitalcameras 
    (camera_brand, camera_series, camera_model, release_year, img_source, img_alt) 
    VALUES 
    ($1, $2, $3, $4, $5, $6)`,
    [
      req.body.cameraBrand,
      req.body.cameraSeries,
      req.body.cameraModel,
      req.body.releaseYear,
      req.body.imgSource,
      req.body.imgAlt,
    ]
  ); // Read about 'Parameter Placeholders' on the Week 09 Moodle Database session. This helps to keep our database safe

  console.log("What the DB gives back to the server", databaseResponse);
  res.send(databaseResponse);
});

app.listen(PORT, function () {
  console.log(`server is running on ${PORT}`);
});
