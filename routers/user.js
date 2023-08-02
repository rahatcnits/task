const express = require("express");
const router = express.Router();

const {
  storeUser,
  getAllUser,
  getSpecificUser,
  updateUser,
  deleteUser,
} = require("../controller/user");

router.post("/user", storeUser);
router.get("/user", getAllUser);
router.get("/user/:id", getSpecificUser);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

module.exports = router;
