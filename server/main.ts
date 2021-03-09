import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'
import '/imports/api/TasksCollection'

const SEED_USERNAME = 'admin'
const SEED_PASSWORD = '1234'

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME))
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD
    })
});
