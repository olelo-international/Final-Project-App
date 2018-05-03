import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

/* eslint-disable no-console */

function createUser(email, password, role, firstName, lastName, student_faculty, proficiency, desc) {
  console.log(`  Creating user ${email}.`);
  const userID = Accounts.createUser({
    firstName: firstName,
    lastName: lastName,
    student_faculty: student_faculty,
    proficiency: proficiency,
    username: email,
    email: email,
    password: password,
    desc: desc,
  });
  if (role === 'admin') {
    Roles.addUsersToRoles(userID, 'admin');
  }
}

/** When running app for first time, pass a settings file to set up a default user account. */
if (Meteor.users.find().count() === 0) {
  if (Meteor.settings.defaultAccounts) {
    console.log('Creating the default user(s)');
    Meteor.settings.defaultAccounts.map(({ email, password, role, firstName, lastName, student_faculty, proficiency, desc }) => createUser(email, password, role, firstName, lastName, student_faculty, proficiency, desc));
  } else {
    console.log('Cannot initialize the database!  Please invoke meteor with a settings file.');
  }
}
