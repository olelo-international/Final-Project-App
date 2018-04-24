import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Card, Header, Loader } from 'semantic-ui-react';
import { Posts } from '/imports/api/posts/post';
import { Comments } from '/imports/api/comment/comment';
import Post from '/imports/ui/components/Post';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class FilipinoForum extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center" inverted>Filipino Forum</Header>
          <Card.Group>
            {this.props.posts.map((post, index) => <Post key={index} post={post}
            comments={this.props.comments.filter(comment => (comment.contactId === post._id))}/>)}
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
FilipinoForum.propTypes = {
  posts: PropTypes.array.isRequired,
    comments: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Posts');
    const subscription2 = Meteor.subscribe('Comments');
  return {
    posts: Posts.find({ language: 'Filipino' }).fetch(),
      comments: Comments.find({}).fetch(),
      ready: (subscription.ready() && subscription2.ready()),
  };
})(FilipinoForum);
