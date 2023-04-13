import { watches } from '../models/watchesModel.js';

export const getWatches = async (req, res, next) => {
    try {
        const data = await watches.find();
        res.json(data);
    } catch {
        res.send('Error');
    }
};

export const searchWatches = async (req, res, next) => {
    const result = await watches.find({
        $or: [{ content: { $regex: req.params.key } }],
    });

    res.send(result);
};
