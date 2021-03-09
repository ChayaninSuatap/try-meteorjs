import {check} from 'meteor/check'
import { TasksCollection} from '../db/TasksCollection'
import { Meteor } from 'meteor/meteor';

Meteor.methods({
    'tasks.add'(text: string, checked: boolean){
        check(text, String)
        check(checked, Boolean)

        if(!this.userId)
            throw new Meteor.Error('Not authorized')
        
        TasksCollection.insert({
            text, createdAt: new Date(), checked, createdBy: this.userId
        })
    },

    'tasks.toggleChecked'(_id: string, checked: boolean){
        TasksCollection.update(_id, {
            $set: {
                checked: !checked
            }
        })
    },
    
    'tasks.remove'(_id: string){
        TasksCollection.remove({_id})
    }
})