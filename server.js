// server.js

const express = require('express');
const bodyParser = require('body-parser');
const { insert_voto, get_votos_count } = require('./js/queries/votos_queries.js');

const app = express();
const PORT = 3000; // Change this to the port you want to use

app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static('public'));

// Set up the default route to serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Set up for endpoints
app.post('/votar/:equipo', async (req, res) => {
    const equipo = req.params.equipo;
    await insert_voto(equipo);
});

app.get('/get_initial_votes', async (req, res) => {
    try {
        const countTeam1 = await get_votos_count(1);
        const countTeam2 = await get_votos_count(2);

        // Send the initial vote counts as JSON response
        res.json({ votes: { team1: countTeam1, team2: countTeam2 } });
    } catch (error) {
        console.error('Error fetching initial votes:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
