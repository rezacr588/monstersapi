const { Router } = require("express");
const pool = require("../db");

const router = Router();
router.get("/", (req, res, next) => {
  pool.query("SELECT * FROM habitats ORDER BY id ASC", (err, result) => {
    if (err) next(err);
    res.send(result.rows);
  });
});

router.post("/", (req, res, next) => {
  const { name, climate, tempreture } = req.body;
  pool.query(
    "INSERT INTO habitats(name,climate, tempreture) VALUES ($1,$2,$3)",
    [name, climate, tempreture],
    (err, result) => {
      if (err) next(err);
      res.redirect("/habitats");
    },
  );
});

module.exports = router;
