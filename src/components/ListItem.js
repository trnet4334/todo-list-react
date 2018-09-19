import React from 'react';
import {
    Button,
    ListGroup,
    ListGroupItem,
    FormControl,
    Checkbox
} from 'react-bootstrap';

const TaskList = ({
                      tasks,
                      filter,
                      onDeleteTask,
                      // onProgressTask,
                      onCompleteTask,
                      onEditTask,
                      onChangeText
                  }) => (
    <div>
        <ListGroup>
            {
                tasks.map((task, index) => (
                    <ListGroupItem key={index}
                                   className={(filter === 'show_completed' && !task.get('completed')) ? 'hide' : 'show'}>
                        <Checkbox inline={true} checked={(task.get('completed'))}
                                  onChange={onCompleteTask(index, task.get('completed'))}>
                            <span className={(task.get('completed')) ? 'isCompleted' : ''}>{task.get('text')}</span>
                        </Checkbox>
                        <Button onClick={onDeleteTask(index)}>Delete</Button>
                        <Button onClick={onEditTask(index, task.get('isEdit'))}
                                className={(task.get('isEdit')) ? 'hide' : 'inline'}>Edit</Button>
                        <FormControl type="text" onChange={onChangeText(index, task.get('event'))}
                                     className={!(task.get('isEdit')) ? 'hide' : 'inline'}/>
                        <FormControl.Feedback />
                        <Button onClick={onEditTask(index, task.get('isEdit'))}
                                className={!(task.get('isEdit')) ? 'hide' : 'inline'}>End editing</Button>
                    </ListGroupItem>
                )).toJS()
            }
        </ListGroup>
    </div>
);

export default TaskList;