import React from 'react';
import { Header, Container, Card, Button } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import Post from '/imports/ui/components/Post';
import { Comments } from '/imports/api/comment/comment';
import { Posts } from '/imports/api/posts/post';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';


class HomePage extends React.Component {
  render() {
    return (
        <Container>
          <Header as="h2" inverted textAlign="centered">Announcements</Header>
          <Header inverted textAlign="centered">E Komo Mai! Announcements about upcoming events and communications from Admin and other organiztions can be found here</Header>
          <Button floated='right' href='#AddPost' inverted>New Post</Button>
          <Card.Group>
            {this.props.posts.map((post, index) => <Post key={index} post={post} comments={this.props.comments.filter(comment => (comment.contactId === post._id))}/>)}
          </Card.Group>
        </Container>

  );
  }
}


HomePage.propTypes = {
  posts: PropTypes.array.isRequired,
  comments: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  const subscription = Meteor.subscribe('Posts');
  const subscription2 = Meteor.subscribe('Comments');
  return {
    posts: Posts.find({ language: 'All' }).fetch(),
    comments: Comments.find({}).fetch(),
    ready: (subscription.ready() && subscription2.ready()),
  };
})(HomePage);
