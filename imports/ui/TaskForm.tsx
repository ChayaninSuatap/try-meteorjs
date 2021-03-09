import React, { useState} from 'react'
import { Meteor} from 'meteor/meteor'

export const TaskForm = () => {
  const [text, setText] = useState("")

  const onSubmit = (e :any) => {
    e.preventDefault()
    if(!text) return

    Meteor.call('tasks.add', text, false)

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