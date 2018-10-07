import {combineReducers} from 'redux';
import {TodoReducer} from '../Todos/Reducers/TodoReducer';


// Only one reducer for the whole app.
const rootReducer = combineReducers({
    todos: TodoReducer
})

export default rootReducer;