import React, {Component} from 'react';
import {Button, Table} from 'semantic-ui-react';

// Update, complete, delete these states
const getClassName = (props) => {
    return `
    ${props.todo.updated
        ? "updated"
        : ""}
    ${props.todo.status === 'completed'
        ? "completed"
        : ""}
    ${props.todo.deleted
        ? "deleted"
        : ""}
    `
}

// This component takes the props and maps the specific event
// to the parent component of TodoTableContent
const TodoRowContent = (props) => {
    return (
        <Table.Row className={getClassName(props)}>
            <Table.Cell>{props.todo.title}</Table.Cell>
            <Table.Cell>{props.todo.description}</Table.Cell>
            <Table.Cell>{props.todo.date}</Table.Cell>
            <Table.Cell className="options">
                {props.todo.status != 'completed' && <Button className="option-buttons" color="green" onClick={props.completeTodo}>
                    <i className="fa fa-check"></i>
                </Button>}
                <Button className="option-buttons" color='blue' onClick={props.startEditing}>
                    <i className="fa fa-pencil"></i>
                </Button>
                <Button className="option-buttons" color='red' onClick={props.deleteTodo}>
                    <i className="fa fa-trash"></i>
                </Button>
            </Table.Cell>
        </Table.Row>
    );
}

export default TodoRowContent;