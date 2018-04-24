import { Meteor } from 'meteor/meteor';
import { Comments } from '../../api/comment/comment.js';

/** Initialize the database with a default data document. */


/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Comments', function publish() {
  if (this.userId) {
    return Comments.find({ });
  }
  return this.ready();
});

