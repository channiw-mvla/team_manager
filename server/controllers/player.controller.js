const Player = require('../models/player.model');    /* this is new */
module.exports = {
    findAllPlayers : (req, res) => {
        Player.find()
            .then((allPlayers) =>  res.json(allPlayers))
            .catch((err) => res.json({ message: 'Something went wrong', error: err }));
    }, 
     
    findOnePlayer : (req, res) => {
        Player.findOne({ _id: req.params.id })
            .then(onePlayer =>  res.json(onePlayer))
            .catch((err) => res.json({ message: 'Something went wrong', error: err }));
    },
     
    createNewPlayer : (req, res) => {
        Player.create(req.body)
            .then(newPlayer =>res.json(newPlayer))
            .catch((err) => res.json({ message: 'Something went wrong', error: err }));
    },
    updateExistingPlayer : (req, res) => {
        Player.findOneAndUpdate({ _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedPlayer => res.json(updatedPlayer))
            .catch((err) => res.json({ message: 'Something went wrong', error: err }));
    },
    deleteAnExistingPlayer : (req, res) => {
        Player.deleteOne({ _id: req.params.id })
            .then(result => res.json(result))
            .catch((err) => res.json({ message: 'Something went wrong', error: err }));
    }
}


