// server.js

const mysql = require('mysql2');

// Replace 'your_database', 'your_user', 'your_password' with your actual database configuration
const connectionConfig = {
    host: 'localhost',
    user: 'root',
    password: 'cisco123',
    database: 'shitsu',
};

let connection;

const connect_db = () => {
    // Connect to the MySQL server
    connection = mysql.createConnection(connectionConfig);
    connection.connect((error) => {
        if (error) {
            console.error('Error connecting to MySQL:', error);
            return;
        }
        console.log('Connected to MySQL server.');
    });
}

const disconnect_db = () => {
    // Close the MySQL connection
    connection.end((error) => {
        if (error) {
            console.error('Error closing MySQL connection:', error);
            return;
        }
        console.log('MySQL connection closed.');
    });
};

module.exports = {
    connect_db,
    disconnect_db,
    connection,
    connectionConfig
};
