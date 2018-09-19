import {connect} from 'react-redux';
import Header from '../components/Header';

import {
    reserveText,
    createTask
} from './../actions/taskActions';

export default connect(
    (state) => ({
        task: state.getIn(['task', 'task'])
    }),
    (dispatch) => ({
        onReserveText: (event) => (
            dispatch(reserveText(event.target.value))
        ),
        onCreateTask: (event) => {
            dispatch(createTask());
            dispatch(reserveText(''));
        }
    })
)(Header);