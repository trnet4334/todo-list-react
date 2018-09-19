import Immutable from 'immutable';

export const TaskState = Immutable.fromJS({
    'tasks': [
        {
            text: 'Task No.1',
            completed: false,
            isEdit: false
        },
        {
            text: 'Task No.2',
            completed: false,
            isEdit: false
        },
        {
            text: 'Task No.3',
            completed: false,
            isEdit: false
        }
    ],
    'task': {
        text: '',
        completed: false
    },
    filter: 'show_all'
});