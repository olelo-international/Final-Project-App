import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Posts } from '../../api/posts/post.js';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.owner}`);
  Posts.insert(data);
}

/** Initialize the collection if empty. */
if (Posts.find().count() === 0) {
  if (Meteor.settings.defaultPosts) {
    console.log('Creating default Posts.');
    Meteor.settings.defaultPosts.map(data => addData(data));
  }
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Posts', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
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
