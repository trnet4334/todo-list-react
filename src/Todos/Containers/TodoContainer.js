import React, {Component} from 'react';
import * as TodoActions from '../Actions/TodoActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import TodoTableContent from '../Components/TodoTableContent';


export class TodoContainer extends Component {
    constructor(props) {
        super(props)
    }

    // Create
    createTodo = (todo) => {
        this.props.actions.CreateTodo(todo)
    }

    // Update
    startEditing = (id) => {
        this.props.actions.StartEditing(id)
    }
    cancelEditing = (id) => {
        this.props.actions.CancelEditing(id)
    }
    editTodo = (todo) => {
        this.props.actions.UpdateTodo(todo)
    }
    completeTodo = (todo) => {
        this.props.actions.UpdateTodo({...todo, status: 'completed'})
    }

    // Delete
    deleteTodo = (todo) => {
        this.props.actions.DeleteTodo(todo)
    }

    render() {
        return (
            <div className="todo-container">
                <TodoTableContent
                    todos={this.props.todos}
                    createTodo={this.createTodo}
                    startEditing={this.startEditing}
                    cancelEditing={this.cancelEditing}
                    editTodo={this.editTodo}
                    completeTodo={this.completeTodo}
                    deleteTodo={this.deleteTodo}
                />
            </div>
        );
    }
}

TodoContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    todos: PropTypes.array.isRequired,
}

function mapStateProps(state, ownProps) {
    return { todos: state.todos }
}

function mapDispatchProps(dispatch) {
    return { actions: bindActionCreators(TodoActions, dispatch) }
}

export default connect(mapStateProps, mapDispatchProps)(TodoContainer);