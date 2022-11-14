// WAP to connect Node.js to MySQL and check if connection established or not
const mysql = require("mysql");

let connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "username",
  password: "some_pass",
});

connection.connect((err) => {
  if (err) console.log(err);
  else console.log("Connected");
});
