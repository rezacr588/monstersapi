const { Router } = require("express");
const router = Router();
const monsters = require("./monsters");
const habitats = require("./habitats");
const lives = require("./lives");
app.use("/monsters", monsters);
app.use("/habitats", habitats);
app.use("/lives", lives);
module.exports = router;
