const db = require("../db");

module.exports.getAllEmployees = async () => {
  const [records] = await db
    .query("SELECT * FROM employees")
    .catch((err) => console.log(err));
  return records;
};

module.exports.getAllEmployees = async (id) => {
  const [record] = await db
    .query("SELECT * FROM employees WHERE id = ?", [id])
    .catch((err) => console.log(err));
  return record;
};
