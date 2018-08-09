var mysql = require('mysql'); 

var con = mysql.createConnection({
    host: "localhost",
    user: "test_user",
    password: "test_user",
    database: "courses"
});
  
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE courses (name VARCHAR(255), completed VARCHAR(255))";
    con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
    });
});