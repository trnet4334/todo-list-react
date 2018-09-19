import {handleActions} from 'redux-actions';
import UiState from './../constants/models';

export default handleActions({
    DISPLAY: (state, {payload}) => (
        state.set('tasks', payload.task)
    ),
}, UiState);