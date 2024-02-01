const { connect_db, disconnect_db, connection } = require('../db.js');

const read_equipo = (id) => {
    return new Promise((resolve, reject) => {
        try {
            connect_db();

            // SQL query to select data from the "equipos" table
            const select_query = `SELECT * FROM equipos WHERE id = ?`;

            // Execute the query with parameters
            connection.execute(select_query, [id], (error, results, fields) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        } catch (error) {
            reject(error);
        } finally {
            // Disconnect when done
            disconnect_db();
        }
    });
};

module.exports = {
    read_equipo,
}

// Usage
// read_equipo(1)
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error('Error reading data:', error);
//     });
