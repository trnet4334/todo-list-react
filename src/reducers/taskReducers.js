import {handleActions} from 'redux-actions';
import {TaskState} from "../constants/models";

import {
    CREATE_TASK,
    DELETE_TASK,
    CHANGE_TEXT,
    DISPLAY_ALL,
    DISPLAY_COMPLETED,
    EDIT_TASK,
    RESERVE_TEXT
} from "../constants/actionTypes";

const taskReducers = handleActions({
    CREATE_TASK: (state, {payload}) => {
        let tasks = state.get('tasks').push(state.get('task'));
        return state.set('tasks', tasks);
    },
    DELETE_TASK: (state, {payload}) => {
        return state.set('tasks', state.get('tasks').splice(payload.index, 1))
    },
    CHANGE_TEXT: (state, {payload}) => {
        return state.setIn(['tasks', payload.index, 'text'], payload.text);
    },
    COMPLETE_TASK: (state, {payload}) => {
        return state.setIn(['tasks', payload.index, 'completed'], !payload.status);
    },
    DISPLAY_ALL: (state) => (
        state.set('filter', 'show_all')
    ),
    DISPLAY_COMPLETED: (state) => (
        state.set('filter', 'show_completed')
    ),
    EDIT_TASK: (state, {payload}) => {
        return state.setIn(['tasks', payload.index, 'isEdit'], !payload.isEdit);
    },
    RESERVE_TEXT: (state, {payload}) => {
        return state.setIn(['tasks', 'text'], payload);
    }
}, TaskState);

export default taskReducers;