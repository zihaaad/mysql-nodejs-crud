const express = require("express"),
  router = express.Router();

const service = require("../services/employee.service");

// http:localhost:3000/api/employees
router.get("/", async (req, res) => {
  const rows = await service.getAllEmployees();
  res.send(rows);
});

router.get("/:id", async (req, res) => {
  const employee = await service.getEmployeeById(req.params.id);
  if (employee.length == 0)
    return res.status(404).json("no record with given id :" + req.params.id);
  else res.send(employee);
});

router.delete("/:id", async (req, res) => {
  const affectedRows = await service.deleteEmployee(req.params.id);
  if (affectedRows == 0)
    res.status(404).json("no record with given id :" + req.params.id);
  else res.send("delected successfully");
});

module.exports = router;
