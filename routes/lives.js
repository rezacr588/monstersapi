const { Router } = require("express");
const pool = require("../db");
const router = Router();
router.get("/", (req, res, next) => {
  pool.query("SELECT * FROM lives", (err, results) => {
    if (err) return next(err);
    res.send(results.rows);
  });
});
router.get("/conditions", (req, res, next) => {
  pool.query(
    "SELECT * FROM lives JOIN habitats ON habitats.name = lives.habitat",
    (err, results) => {
      if (err) return next(err);
      res.send(results.rows);
    },
  );
});
module.exports = router;
