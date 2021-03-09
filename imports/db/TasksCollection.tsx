import {Mongo} from 'meteor/mongo'

export interface Task {
  _id?: string;
  text: string;
  createdAt: Date;
  createdBy: string;
  checked: boolean;
}

export const TasksCollection = new Mongo.Collection<Task>('tasks')

interface FetchTasksArgs{
  hideChecked: boolean;
}

export const fetchTasks = (payload: FetchTasksArgs) => {

  const filterArgs = payload.hideChecked ? {checked: false} : {}

  const tasks = TasksCollection.find(
    filterArgs,
    {sort: {createdAt: -1}}
  ).fetch()
  return tasks
}


export const deleteTask = (_id: string) => {
  TasksCollection.remove({_id})
}
