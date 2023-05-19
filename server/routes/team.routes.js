const PlayerController = require('../controllers/player.controller');  //Import the code from Code Block 1
module.exports = (app) => {
    app.get('/api/players', PlayerController.findAllPlayers);
    app.get('/api/players/:id', PlayerController.findOnePlayer);
    app.post('/api/players', PlayerController.createNewPlayer);
    app.patch('/api/players/:id', PlayerController.updateExistingPlayer);
    app.delete('/api/players/:id', PlayerController.deleteAnExistingPlayer);
}
