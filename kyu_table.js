var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "kyu",
})

con.connect(function(err){
	if(err) throw err;
	console.log("Connected to database successfully!..");
		var sql = "CREATE TABLE students (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), age INT , course VARCHAR(255))";
	con.query(sql, function(err,result){
		if(err) throw err;
		console.log("Table created successfully...");
	});
});