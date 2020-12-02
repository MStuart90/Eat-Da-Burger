var mysql = require("mysql");

var connection;

// JawsDB is an add-on for providing a fully functional MySQL Database server for use with your Heroku application
// The JAWSDB_URL config variable will contain a placeholder until the database is ready.
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: "localhost",
		port: 3306,
		user: "root",
		password: "Root",
		database: "burgers_db",
	});
}
connection.connect(function (err) {
	if (err) {
		console.err("error connectiong: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

module.exports = connection;