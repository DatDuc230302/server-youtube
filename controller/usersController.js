import { users } from './../models/usersModel.js';

export const getUsers = async (req, res, next) => {
    try {
        const result = await users.find();
        res.json(result);
    } catch {
        res.status(500).json();
    }
};

export const postUsers = async (req, res, next) => {
    try {
        const result = await users.find({ token: req.body.token });
        res.json(result);
    } catch {
        res.status(500).json;
    }
};
