const { connect_db, disconnect_db, connection } = require('../server.js');

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
        disconnect_db();
    }
}

insert_voto(1);
