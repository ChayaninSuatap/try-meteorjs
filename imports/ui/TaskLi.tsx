import React from 'react'
import { Task, toggleTaskChecked, deleteTask } from '/imports/api/TasksCollection'

interface TaskLiArgs {
  task: Task;
}

export const TaskLi = ({ task }: TaskLiArgs) => {
  return (
    <li>
      <input
        type='checkbox'
        checked={!!task.checked}
        onClick={() => toggleTaskChecked({ _id: task._id || "", checked: task.checked })}>
      </input>
      <span>{task.text}</span>
      <button onClick={() => deleteTask(task._id || "")}> &times;</button>
    </li>
  )
}