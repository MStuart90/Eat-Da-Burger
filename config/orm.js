

// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

//   * `selectAll()`
//   * `insertOne()`
//   * `updateOne()`




// * Import (require) `connection.js` into `orm.js`
var connection = require("../config/connection.js");

var orm = {
    // Function that returns all table entries
	selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        // Perform the database query
		connection.query(queryString, [tableInput], function (err, result) {
			// if (err) {
			// 	throw err;
            // }
            // Return results in callback
			cb(result);
		});
    },
    // Function that insert a single table entry
	// insertOne: function (tableInput, colInput, values, cb) {
	// 	var queryString = "INSERT INTO " + table;
	// 	connection.query(
	// 		queryString,
	// 		[tableInput, colInput, values],
	// 		function (err, result) {
	// 			if (err) {
	// 				throw err;
    //             }
    //             // Return results in callback
	// 			cb(result);
	// 		}
	// 	);
    // },
    
	// // Function that updates a single table entry
	// updateOne: function (tableInput, colToUpdate, valToUpdate, id, cb) {
	// 	var queryString = "UPDATE " + table;
	// 	connection.query(
	// 		queryString,
	// 		[tableInput, colToUpdate, valToUpdate, id],
	// 		function (err, result) {
	// 			if (err) {
	// 				throw err;
    //             }
    //             // Return results in callback
	// 			cb(result);
	// 		}
	// 	);
	// },
};

// * Export the ORM object in `module.exports`.
module.exports = orm;