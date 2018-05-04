import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Posts } from '../../api/posts/post.js';

/** Initialize the database with a default data document. */


/** Initialize the collection if empty. */


/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Posts', function publish() {
  if (this.userId) {
    return Posts.find();
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('PostsAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Posts.find();
  }
  return this.ready();
});
