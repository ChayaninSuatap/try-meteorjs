import {Meteor} from 'meteor/meteor'
import {TasksCollection} from '/imports/db/TasksCollection'

Meteor.publish('tasks', function(){
    if(this.userId)
        return TasksCollection.find({createdBy: this.userId})
    else
        return []
})