import React, {Component} from 'react';
import './App.css';

import {Routes} from './Routes';
import {Provider} from 'react-redux';
import {configureStore} from "./Store/configureStore";
import * as TodoActions from './Todos/Actions/TodoActions';
import {AppBar} from '@material-ui/core';

const store = configureStore();
store.dispatch(TodoActions.GetTodos());

const App = () => {
    return (
        <Provider store={store}>
            <Routes/>
        </Provider>
    )
};

export default App;