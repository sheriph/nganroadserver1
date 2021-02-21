const express = require("express");
const mysql = require("mysql");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

// create a GET route
app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS FULLY FUNCTIONAL!! CONGRATS" });
});

app.post("/canadaschoools", (req, res) => {
  const db = mysql.createConnection({
    host: "naijagoingabroad.com",
    user: "naijagoi_sheriph",
    password: "Khashef2017.",
    database: "naijagoi_studyabroad",
  });

  db.query("SELECT * FROM `cyprus_schools`", (error, results, fields) => {
    db.end();
    res.send({ error, results });
  });
});

app.post("/field", (req, res) => {
  const { name: dbname } = req.body;
  console.log(dbname);
  const db = mysql.createConnection({
    host: "naijagoingabroad.com",
    user: "naijagoi_sheriph",
    password: "Khashef2017.",
    database: "naijagoi_studyabroad",
  });

  db.query(
    `SELECT DISTINCT department FROM ${dbname}`,
    (error, results, fields) => {
      if (results) {
        db.end();
        res.send({ error, results });
      } else if (error) {
        db.end();
        res.status(400).send(error);
      }
    }
  );
});

app.post("/level", (req, res) => {
  const { name: dbname } = req.body;
  console.log(dbname);
  const db = mysql.createConnection({
    host: "naijagoingabroad.com",
    user: "naijagoi_sheriph",
    password: "Khashef2017.",
    database: "naijagoi_studyabroad",
  });

  db.query(`SELECT DISTINCT Type FROM ${dbname}`, (error, results, fields) => {
    if (results) {
      db.end();
      res.send({ error, results });
    } else if (error) {
      db.end();
      res.status(400).send(error);
    }
  });
});

app.post("/options", (req, res) => {
  const { name: dbname } = req.body;
  console.log(dbname);
  const db = mysql.createConnection({
    multipleStatements: true,
    host: "naijagoingabroad.com",
    user: "naijagoi_sheriph",
    password: "Khashef2017.",
    database: "naijagoi_studyabroad",
  });

  db.query(
    `SELECT DISTINCT department FROM ${dbname} ; SELECT DISTINCT Type FROM ${dbname}`,
    (error, results, fields) => {
      if (results) {
        db.end();
        res.send({ error, results });
      } else if (error) {
        db.end();
        res.status(400).send(error);
      }
    }
  );
});

app.post("/schools", (req, res) => {
  const {
    dbname: { name },
    field: department,
    level: Type,
    page,
  } = req.body;
  console.log(name, department, Type, page);
  const offset = (page - 1) * 20;
  const db = mysql.createConnection({
    multipleStatements: true,
    host: "naijagoingabroad.com",
    user: "naijagoi_sheriph",
    password: "Khashef2017.",
    database: "naijagoi_studyabroad",
  });

  db.query(
    `SELECT * FROM ${name} WHERE Type = "${Type}" AND department = "${department}" LIMIT ${offset},20 ; SELECT COUNT(*) FROM ${name} WHERE Type = "${Type}" AND department = "${department}"`,
    (error, results, fields) => {
      console.log(results);
      if (results) {
        db.end();
        res.send({ error, results });
      } else if (error) {
        db.end();
        res.status(400).send(error);
      }
    }
  );
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
