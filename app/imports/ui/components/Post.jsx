import React from 'react';
import { Table, Button, Card, Feed } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import Comment from '/imports/ui/components/Comment';
import AddComment from '/imports/ui/components/AddComment';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Post extends React.Component {
  render() {
    return (
        <Card centered>
          <Card.Content>
            <Card.Header>
              {this.props.post.topic}
            </Card.Header>
            <Card.Description>
              {this.props.post.description}
            </Card.Description>
          </Card.Content>
            <Card.Content extra>
                <Feed>
                    {this.props.comments.map((comment, index) => <Comment key={index} comment={comment}/>)}
                </Feed>
            </Card.Content>
            <Card.Content extra>
                <AddComment owner={this.props.post.owner} contactId={this.props.post._id}/>
            </Card.Content>
        </Card>
            );
  }
}

/** Require a document to be passed to this component. */
Post.propTypes = {
  post: PropTypes.object.isRequired,
    comments:PropTypes.array.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Post);
