import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Requests } from '../../api/request/request.js';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.owner}`);
  Requests.insert(data);
}

/** Initialize the collection if empty. */
if (Requests.find().count() === 0) {
  if (Meteor.settings.defaultRequest) {
    console.log('Creating default Requests.');
    Meteor.settings.defaultRequest.map(data => addData(data));
  }
}

/** This subscription publishes only the documents associated with the logged in user */


/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('RequestAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Requests.find();
  }
  return this.ready();
});
