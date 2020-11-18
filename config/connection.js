var mysql = require("mysql");
var connection;

//Creating connection
var connection = mysql.createConnection({ // Set connection parameters
    host: "localhost",
    user: "root",
    password: "sony1234",
    database: "madness_db"
});

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({ // Set local connection parameters
        host: "localhost",
        user: "root",
        password: "",
        database: "madness_db"
    });
};

//Creating connection
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//Exporting for ORM
module.exports = connection;  