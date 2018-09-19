import React from 'react';
import HeaderContainer from './../containers/HeaderContainer';
import ListItemContainer from './../containers/ListItemContainer';
import FilterContainer from './../containers/FilterContainer';

const Layout = () => (
    <div className="task-list">
        <HeaderContainer/>
        <ListItemContainer/>
        <FilterContainer/>
    </div>
);

export default Layout;