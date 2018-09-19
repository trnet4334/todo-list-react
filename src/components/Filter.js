import React from 'react';
import {Button} from 'react-bootstrap';

const Filter = ({
    onDisplayAll,
    // onDisplayProgress,
    onDisplayCompleted
}) => (
    <div>
        <Button onClick={onDisplayAll}>All</Button>
        {/*<Button onClick={onDisplayProgress}>In progress</Button>*/}
        <Button onClick={onDisplayCompleted}>Completed</Button>
    </div>
);

export default Filter;