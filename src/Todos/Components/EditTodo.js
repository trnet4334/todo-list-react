import React, {Component} from 'react';

import {
    Button,
    // Icon,
    Input,
    // Label,
    // Menu,
    Table
} from 'semantic-ui-react';

import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Add rules for editing options
const Options = (props) => {
    if (props.todo && props.todo.editing) {
        return EditOptions(props);
    } else {
        return AddOptions(props);
    }
}

const EditOptions = (props) => {
    return (
        <Table.Cell>
            <Button color='green' onClick={props.editTodo}>Edit</Button>
            <Button color='red' onClick={props.cancelEdit}>Cancel</Button>
        </Table.Cell>
    );
}

const AddOptions = (props) => {
    return (
        <Table.Cell>
            <Button color='blue' onClick={props.createTodo}>Create</Button>
            <Button color='green' onClick={props.resetTodo}>Reset</Button>
        </Table.Cell>
    );
}

// This component is used for edit and update new todo element
export default class EditTodo extends Component {
    constructor(props) {
        super(props);

        if (this.props.todo) {
            this.state = {...this.props.todo}
        } else {
            this.state = {...this.emptyTodo()}
        }
    }

    //Todo element initialization
    emptyTodo = () => {
        return {
            title: "",
            description: "",
            date: moment(),
        }
    }

    // Input event handling
    changeNewTitle = (e) => {
        this.setState({title: e.target.value});
    }

    changeNewDescription = (e) => {
        this.setState({description: e.target.value});
    }

    changeNewDate = (e) => {
        this.setState({date: e});
    }

    // Form submission event handler
    createTodo = (e) => {
        this.resetTodo();
        this.props.createTodo(this.state);
    }

    editTodo = (e) => {
        this.props.editTodo(this.state);
    }

    // Clear the current state
    resetTodo = () => {
        this.setState({title: "", description: "", date: moment()});
    }

    cancelEditing = () => {
        this.props.cancelEditing();
    }

    // Convert date to moment for the react datepicker
    getDateForDatePicker() {
        return moment(this.state.date);
    }

    render() {
        return(
            <Table.Row>
                <Table.Cell>
                    <Input value={this.state.title} placeholder="Title" onChange={this.changeNewTitle}/>
                </Table.Cell>
                <Table.Cell>
                    <Input value={this.state.description} placeholder="Description" onChange={this.changeNewDescription}/>
                </Table.Cell>
                <Table.Cell>
                    <DatePicker selected={this.getDateForDatePicker()} onChange={this.changeNewDate}/>
                </Table.Cell>

                <Options
                    todo={this.props.todo}
                    editTodo={this.editTodo}
                    createTodo={this.createTodo}
                    resetTodo={this.resetTodo}
                    cancelEdit={this.cancelEditing}
                />
            </Table.Row>
        );
    }
}
