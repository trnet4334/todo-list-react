import React, {Component} from 'react';

import {Button, Icon, Label, Menu, Table} from 'semantic-ui-react';
import TodoRow from './TodoRowContent';
import EditTodo from './EditTodo';

// This component generates table content
const TodoTabelContent = (props) => {
    return (
      <Table celled>
          <Table.Header>
              <Table.Row>
                  <Table.HeaderCell>Title</Table.HeaderCell>
                  <Table.HeaderCell>Description</Table.HeaderCell>
                  <Table.HeaderCell>Date</Table.HeaderCell>
                  <Table.HeaderCell>Option</Table.HeaderCell>
              </Table.Row>
          </Table.Header>

          <Table.Body>
              {props.todos.map( list => {

                  // Render this component if todo list is editing
                  if (list.editing) {
                      return <EditTodo
                        editTodo={props.editTodo}
                        cancelEditing={e => props.cancelEditing(list._id)}
                        key={list._id}
                        todo={list}
                      />
                  } else {
                      return <TodoRow
                        completeTodo={e => props.completeTodo(list)}
                        startEditing={e => props.startEditing(list._id)}
                        deleteTodo={e => props.deleteTodo(list)}
                        key={list._id}
                        todo={list}
                      />
                  }
              })}

              {/* Create new element after editing. */}
              <EditTodo createTodo={props.createTodo}/>
          </Table.Body>
      </Table>
    );
}

export default TodoTabelContent;