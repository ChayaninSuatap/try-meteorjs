import React, { useState} from 'react'
import {addTask, TasksCollection} from '/imports/api/TasksCollection'

export const TaskForm = () => {
  const [text, setText] = useState("")

  const onSubmit = (e :any) => {
    e.preventDefault()
    if(!text) return

    addTask(text, false)

    setText('')
  }

  return (
     <form onSubmit={onSubmit}>
       <input 
        type='text'
        placeholder='New task'
        onChange={e => setText(e.target.value)}
        value={text}
       />
       <button type='submit'>Add task</button>
     </form>
  )
}