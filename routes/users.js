var express = require("express");
var router = express.Router();
const user = require("../controllers/user");

/* GET users listing. */
router.post("/", user.create);
router.get("/", user.getAll);
router.get("/:id", user.getById);
router.patch("/:id", user.update);
router.delete("/:id", user.delete);

module.exports = router;
