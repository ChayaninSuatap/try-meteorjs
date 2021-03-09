import React from 'react'
import { Task, deleteTask } from '../db/TasksCollection'
import {Meteor} from 'meteor/meteor'

interface TaskLiArgs {
  task: Task;
}

export const TaskLi = ({ task }: TaskLiArgs) => {
  return (
    <li>
      <input
        type='checkbox'
        checked={!!task.checked}
        onClick={() => Meteor.call('tasks.toggleChecked', task._id , task.checked )}>
      </input>
      <span>{task.text}</span>
      <button onClick={() => Meteor.call('tasks.remove', task._id)}> &times;</button>
    </li>
  )
}