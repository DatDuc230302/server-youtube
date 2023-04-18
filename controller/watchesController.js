import { watches } from '../models/watchesModel.js';

export const getWatches = async (req, res, next) => {
    try {
        const data = await watches.find();
        res.json(data);
    } catch {
        res.send('Error');
    }
};

export const getOneWatches = async (req, res, next) => {
    try {
        const data = await watches.findOne({ link: req.params.key });
        res.status(200).json(data);
    } catch {
        res.status(500).json();
    }
};

export const searchWatches = async (req, res, next) => {
    const result = await watches.find({
        $or: [{ content: { $regex: req.params.key } }],
    });
    res.send(result);
};

export const postWatches = async (req, res, next) => {
    try {
        const body = req.body;
        const newData = await watches({
            content: body.content,
            img: body.img,
            avatar: body.avatar,
            name: body.name,
            check: body.checkBody,
            views: body.views,
            time: body.time,
            type: body.type,
            link: body.linkBody,
            subscriber: body.subscriber,
            likes: body.likes,
            description: body.description,
        });
        newData.save();
        res.status(200).json();
    } catch {
        res.status(500);
    }
};

export const updateWatches = async (req, res, next) => {
    try {
        const data = req.body;
        const result = await watches.find({ _id: data.id });
        if (result) {
            await watches.updateOne(
                { _id: data.id },
                {
                    $set: {
                        content: data.content,
                        img: data.img,
                        avatar: data.avatar,
                        name: data.name,
                        check: data.check,
                        views: data.views,
                        time: data.time,
                        type: data.type,
                        link: data.link,
                        subscriber: data.subscriber,
                        likes: data.likes,
                        description: data.description,
                    },
                },
            );
            res.json(result);
        }
    } catch {
        res.status(500).json();
    }
};

export const deleteWatches = async (req, res, next) => {
    try {
        const data = req.body;
        const result = await watches.find({ _id: data.id });
        if (result) {
            await watches.deleteOne({ _id: data.id });
            res.json(result);
        }
    } catch {
        res.status(500).json();
    }
};
