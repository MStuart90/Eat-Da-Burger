var mysql = require("mysql");

var connection = ""

// JawsDB is an add-on for providing a fully functional MySQL Database server for use with your Heroku application
// The JAWSDB_URL config variable will contain a placeholder until the database is ready.
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		// host: "de1tmi3t63foh7fa.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
		// port: 3306,
		// user: "jb7j0m0nu6m62hve",
		// password: "w76gk2e5s93ziz0l",
		// database: "g1fs4mjjs4wfaaom"
		host: "localhost",
		port: 3306,
		user: "root",
		password: "Root",
		database: "burgers_db"
	});
}
connection.connect(function (err) {
	if (err) {
		console.log("error connectiong: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

module.exports = connection;