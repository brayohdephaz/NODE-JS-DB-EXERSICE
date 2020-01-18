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
	//Inserting records
	var sql = "INSERT INTO user (username, password) VALUES ?";
	var values = [
			['brayoh', 'dkakkdnnme'],
			['eunice', 'mskkake'],
			['joy54', '12345'],
			['peter2019', 'Peter@2020'],
	]
	con.query(sql,[values], function(err, result){
		if (err) throw err; 
		console.log("Table Created successfully....")
	});
});