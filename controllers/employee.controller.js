const express = require("express"),
  router = express.Router();

const service = require("../services/employee.service");

// http:localhost:3000/api/employees
router.get("/", async (req, res) => {
  const rows = await service.getAllEmployees();
  res.send(rows);
});

module.exports = router;
