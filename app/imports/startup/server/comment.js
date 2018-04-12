import { Meteor } from 'meteor/meteor';
import { Comments } from '../../api/comment/comment.js';

/** Initialize the database with a default data document. */


/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Comments', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Comments.find({ owner: username });
  }
  return this.ready();
});

