import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Posts = new Mongo.Collection('Posts');

/** Create a schema to constrain the structure of documents associated with this collection. */
const PostSchema = new SimpleSchema({
  topic: String,
  description: String,
  owner: String,
    language: {
        type: String,
       allowedValues: ['Aradic', 'Janpanese', 'Korean', 'Russian', 'Russian', 'Russian', 'Russian', 'Hawaiian', 'Indonesian', 'Greek', 'French', 'Hindi', 'Samoan', 'Spanish', 'Thai'],
        defaultValue: 'Aradic',
    },
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Posts.attachSchema(PostSchema);

/** Make the collection and schema available to other code. */
export { Posts, PostSchema };
