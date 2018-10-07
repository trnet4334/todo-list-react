import { HttpClient } from "./httpClient";

const API = 'https://localhost:3000/api';

const TODO_API = `${API}/todo`;

// CRUD operations
const createTodo = (todo) => {
    return HttpClient.post(TODO_API, todo);
};
const getTodo = () => {
    return HttpClient.get(TODO_API);
};
const updateTodo = (todo) => {
    return HttpClient.put(TODO_API, todo);
};
const removeTodo = (todo) => {
    return HttpClient.delete(`${TODO_API}/${todo._id}`);
};

const todoApi = {createTodo, getTodo, updateTodo, removeTodo};
export {todoApi};