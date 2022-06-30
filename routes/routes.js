const router = require("express").Router();
const user = require("../controllers/user.controllers");

router.get("/demo", user.demo);
router.post("/savedata", user.saveData);

module.exports = router;
