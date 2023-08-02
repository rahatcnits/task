const express = require("express");
const router = express.Router();

const {
  storeTask,
  getAllTask,
  getspecificTask,
  updateTask,
  deletetask,
} = require("../controller/task");

router.post("/task", storeTask);
router.get("/task", getAllTask);
router.get("/task/:id", getspecificTask);
router.patch("/task/:id", updateTask);
router.delete("/task/:id", deletetask);

module.exports = router;
