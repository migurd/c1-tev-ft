const { connect_db, disconnect_db, connection } = require('../db.js');

// Insert
function insert_voto(team_id) {
    try {
        connect_db();

        // SQL query to insert data into the "votos" table without the name
        const insert_query = `INSERT INTO votos (equipo_votado) VALUES (?)`;

        // Execute the query with parameters
        connection.execute(insert_query, [team_id]);

        console.log(`Se votó exitosamente por el equipo ${team_id}`);
    } catch (error) {
        console.error('Error inserting data:', error);
    } finally {
        // Disconnect when done
        // disconnect_db();
    }
}

async function get_votos_count(team_id) {
    try {
        connect_db();

        // SQL query to get the count of votes for a specific team
        const count_query = `SELECT COUNT(*) AS total FROM votos WHERE equipo_votado = ?`;

        // Wrap the callback-based operation in a Promise
        const result = await new Promise((resolve, reject) => {
            connection.execute(count_query, [team_id], (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });

        // Access the count from the result
        const total_votes = result[0].total;

        console.log(`El equipo ${team_id} tiene un total de ${total_votes} votos.`);

        return total_votes;
    } catch (error) {
        console.error('Error getting vote count:', error);
    } finally {
        // Disconnect when done
        // disconnect_db();
    }
}
// insert_voto(1);
// console.log(get_votos_count(1))

module.exports = {
    insert_voto,
    get_votos_count,
}
