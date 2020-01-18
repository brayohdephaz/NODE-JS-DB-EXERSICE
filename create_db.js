var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
})

con.connect(function(err){
	if (err) throw err;
	console.log("Connected database successfully");
	//Create Database
	con.query("CREATE DATABASE nkangani", function(err, result){
		if (err) throw err; 
		console.log("Database created successfully......")
	});
});