import {combineReducers} from 'redux-immutable';

import task from './taskReducers';

const rootReducer = combineReducers({
    task
});

export default rootReducer;