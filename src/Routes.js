import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import TodoContainer from './Todos/Containers/TodoContainer';

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={TodoContainer}/>
            </Switch>
        </BrowserRouter>
    );
};