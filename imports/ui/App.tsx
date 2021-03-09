import React, { useState, useEffect } from 'react';
import { TaskLi } from './TaskLi'
import { useTracker } from 'meteor/react-meteor-data'
import { fetchTasks } from '../db/TasksCollection';
import { TaskForm } from './TaskForm'
import {Meteor} from 'meteor/meteor'


export const App = () => {
  const [hideChecked, setHideCheck] = useState(false)
  const tasks = useTracker(() => fetchTasks({hideChecked}))

  useEffect(()=>{
    Meteor.loginWithPassword('admin', '1234')
    Meteor.subscribe('tasks')
  }, [])

  return (
    <div>
      <h1>Welcome to Meteor!</h1>

      <TaskForm />

      <button onClick={() => setHideCheck(!hideChecked)}> {hideChecked ? 'Show All' : 'Hide Checked'} </button>

      <ul>
        {tasks.map(task => <TaskLi key={task._id} task={task} />)}
      </ul>
    </div>
  )
};
