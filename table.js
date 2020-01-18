var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "nkangani",
})

con.connect(function(err){
	if (err) throw err;
	console.log("Connected database successfully");
	//Create Table
	var sql = "CREATE TABLE user (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), password VARCHAR(255) )"
	con.query(sql, function(err, result){
		if (err) throw err; 
		console.log("Table Created successfully....")
	});
});