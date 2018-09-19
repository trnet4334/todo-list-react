import {createAction} from 'redux-actions';
import {
    CREATE_TASK,
    DELETE_TASK,
    CHANGE_TEXT,
    COMPLETE_TASK,
    DISPLAY_ALL,
    DISPLAY_COMPLETED,
    EDIT_TASK,
    RESERVE_TEXT
} from '../constants/actionTypes';

export const createTask = createAction(CREATE_TASK);
export const deleteTask = createAction(DELETE_TASK);
export const changeText = createAction(CHANGE_TEXT);
export const completeTask = createAction(COMPLETE_TASK);
export const displayAll = createAction(DISPLAY_ALL);
export const displayCompleted = createAction(DISPLAY_COMPLETED);
export const editTask = createAction(EDIT_TASK);
export const reserveText = createAction(RESERVE_TEXT);