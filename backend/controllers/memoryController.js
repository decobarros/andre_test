const Save = require('../models/save');

exports.saveGameData = async (req, res) => {
    const { userID, gameDate, failed, difficulty, completed, timeTaken } = req.body;

    console.log('Received data to save:', req.body);

    try {

        if (!userID || !gameDate || difficulty === undefined || completed === undefined || timeTaken === undefined) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const newSave = new Save({
            userID,
            gameDate,
            failed,
            difficulty,
            completed,
            timeTaken,
        });

        await newSave.save();
        res.status(201).json({ message: 'Game data saved successfully' });
    } catch (error) {
        console.error('Error saving game data:', error);
        res.status(500).json({ message: 'Error saving game data', error });
    }
};

exports.listGameData = async (req, res) => {
    const { userID } = req.body;

    console.log('Loading game data from:', req.body);

    try {

        if (!userID) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        Save.find();

        console.log('Loading game data from:', req.body);

        res.status(201).json({ message: 'Game data listed successfully' });
    } catch (error) {
        console.error('Error listing game data:', error);
        res.status(500).json({ message: 'Error listing game data', error });
    }
};
