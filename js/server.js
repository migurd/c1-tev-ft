// server.js

const mysql = require('mysql2');

// Replace 'your_database', 'your_user', 'your_password' with your actual database configuration
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cisco123',
    database: 'shitsu',
});

const connect_db = () => {
    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to MySQL:', err);
            return;
        }
        console.log('Connected to MySQL database');
    });
};

// Perform MySQL queries or operations here
const disconnect_db = () => {
    connection.end((err) => {
        if (err) {
            console.error('Error disconnecting from MySQL:', err);
            return;
        }
        console.log('Disconnected from MySQL database');
    });
};

module.exports = {
    connect_db,
    disconnect_db,
    connection
};
