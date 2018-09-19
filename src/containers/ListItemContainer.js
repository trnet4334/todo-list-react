import {connect} from 'react-redux';
import ListItem from './../components/ListItem';

import {
    deleteTask,
    completeTask,
    editTask,
    changeText
} from './../actions/taskActions';

export default connect(
    (state) => ({
        tasks: state.getIn(['task', 'tasks']),
        filter: state.getIn(['task', 'filter'])
    }),
    (dispatch) => ({
        onDeleteTask: (index) => () => (
            dispatch(deleteTask({index}))
        ),
        onCompleteTask: (index, status) => () => (
            dispatch(completeTask({index, status}))
        ),
        onEditTask: (index, isEdit) => () => {
            dispatch(editTask({index, isEdit}))
        },
        onChangeText: (index, event) => () => {
            let text = event ? event.target.value : '';
            dispatch(changeText({index, text}))
        }
    })
)(ListItem);