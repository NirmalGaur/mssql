const express = require("express");
const sql = require("mssql/msnodesqlv8");

const port = 1433;
const username = "sample";
const password = "sample";
const database = "Students";
const server = "localhost\\NIRMAL";
const driver = "msnodesqlv8";

//database configuration:
var config = {
  username,
  password,
  port,
  database,
  server,
  driver,
  options: {
    trustedConnection: true,
  },
};

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});

app.get("/", (req, res) => {
  //connect to database:
  sql.connect(config, function (err) {
    if (err) {
      res.send(err);
    } else {
      res.send("db connected");
    }
  });
});
