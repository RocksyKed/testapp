import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import { map } from './mapReducer';
import { user } from './userReduser';

export const mainReducer = combineReducers({
    user,
    map,
    routing: routerReducer
});