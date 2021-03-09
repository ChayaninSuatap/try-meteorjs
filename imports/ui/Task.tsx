import React from 'react'

export const Task = ({ task }: {task: any}) => {
  return <li>{task.text}</li>
}