import {todoApi} from "../../Api/todoApi";

// Create todo actions
export const CREATE_TODO = 'CREATE_TODO';
export const CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS';
export const CREATE_TODO_ERROR = 'CREATE_TODO_ERROR';

// Get todo actions
export const GET_TODO = 'GET_TODO';
export const GET_TODO_SUCCESS = 'GET_TODO_SUCCESS';
export const GET_TODO_ERROR = 'GET_TODO_ERROR';

// Update todo actions
export const START_EDITING ='START_EDITING';
export const CANCEL_EDITING = 'CANCEL_EDITING';

export const UPDATE_TODO = 'UPDATE_TODO';
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS';
export const UPDATE_TODO_ERROR = 'UPDATE_TODO_ERROR';

export const COMPLETE_TODO = 'COMPLETE_TODO';

// Delete todo actions
export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const DELETE_TODO_ERROR = 'DELETE_TODO_ERROR';

// Action creator
export function CreateTodo(todo) {
    return (dispatch, getState) => {
        return todoApi.createTodo(todo)
            .then(res => {
                dispatch(CreateTodoSuccess(res.data.data))
            })
    }
}

export function CreateTodoSuccess(todo) {
    return {
        type: CREATE_TODO_SUCCESS,
        todo
    }
}

export function GetTodos() {
    return (dispatch, getState) => {
        return todoApi.getTodo()
            .then(res => {
                dispatch(GetTodoSuccess(res))
            })
    }
}

export function GetTodoSuccess(todos) {
    return {
        type: GET_TODO_SUCCESS,
        todos
    }
}

export function StartEditing(_id) {
    return {
        type: START_EDITING,
        _id
    }
}

export function CancelEditing(_id) {
    return {
        type: CANCEL_EDITING,
        _id
    }
}

export function UpdateTodo(todo) {
    return (dispatch, getState) => {
        dispatch({
            type: UPDATE_TODO,
            todo
        })
        todoApi.updateTodo(todo).then(res => {
            dispatch(UpdateTodoSuccess(res.data.data))
        })
    }
}
export function UpdateTodoSuccess(todo) {
    return {
        type: UPDATE_TODO_SUCCESS,
        todo,
        _id: todo._id
    }
}

export function DeleteTodo(todo) {
    return (dispatch, getState) => {
        dispatch({
            type: DELETE_TODO,
            todo
        })
        todoApi.removeTodo(todo).then(res => {
            if (res.status == 204) {
                dispatch(DeleteTodoSuccess(todo))
            }
        })
    }
}
export function DeleteTodoSuccess(todo) {
    return {
        type: DELETE_TODO_SUCCESS,
        todo,
        _id: todo._id
    }
}