import React from 'react';
import { Hello } from './Hello';
import { Info } from './Info';
import { Task } from './Task'
import { useTracker } from 'meteor/react-meteor-data'
import { TasksCollection } from '../api/TasksCollection';

const tasks = [
  { _id: 1, text: 'First Task' },
  { _id: 2, text: 'Second Task' },
  { _id: 3, text: 'Third Task' }
]

export const App = () => {
  const tasks = useTracker(() => TasksCollection.find({}).fetch())
  return (
    <div>
      <h1>Welcome to Meteor!</h1>

      <ul>
        {tasks.map(task => <Task key={task._id} task={task} />)}
      </ul>
    </div>
  )
};
