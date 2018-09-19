import {connect} from 'react-redux';
import Filter from '../components/Filter';

import {
    displayAll,
    //displayProgress,
    displayCompleted
} from './../actions/taskActions';

export default connect(
    (state) => ({
        filter: state.getIn(['filter', 'filter'])
    }),
    (dispatch) => ({
        onDisplayAll: (event) => (
            dispatch(displayAll())
        ),
        onDisplayCompleted: () => {
            dispatch(displayCompleted())
        }
    })
)(Filter);