import React from 'react';
import {Button, FormGroup, FormControl} from 'react-bootstrap';

const Header = ({
    onCreateTask,
    onReserveText,
    task
}) => (
    <div>
        <h1>Task List</h1>
        <FormGroup>
            <FormControl type="text" className="inline" Value={task.get('text')} onChange={onReserveText} />
            <Button onClick={onCreateTask}>Add</Button>
        </FormGroup>
    </div>
);

export default Header;