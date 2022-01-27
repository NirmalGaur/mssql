const express = require("express");
const sql = require("mssql/msnodesqlv8");

//database configuration:
var config = {
  username: "sample",
  password: "sample",
  port: 1433,
  database: "Students",
  server: "localhost\\NIRMAL",
  driver: "msnodesqlv8",
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
    }
    var request = new sql.Request();
    request.query("select * from StudentsInfo", function (err, recordSet) {
      if (err) {
        res.send(err);
      } else {
        res.send(recordSet);
      }
    });
  });
});
