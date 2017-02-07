import mongoose from 'mongoose';

import { db } from '../../etc/config.json';
import { User } from './models/User';

export const setUpConnection = () => {
    mongoose.connect(`mongodb://${db.host}:${db.port}/${db.name}`);
};

export const createUser = ({ login, password }) => {

    let user = new User({
        login,
        password
    });

    return user.save();
};

export const findByLogin = (login) => {

    return User.findOne({ login });
};