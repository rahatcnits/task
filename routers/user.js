const express = require("express");
const router = express.Router();

const {
  storeUser,
  getAllUser,
  getSpecificUser,
  updateUser,
  deleteUser,
  login,
} = require("../controller/user");

router.post("/user", storeUser);
router.post("/user/login", login);
router.get("/user", getAllUser);
router.get("/user/:id", getSpecificUser);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

module.exports = router;
