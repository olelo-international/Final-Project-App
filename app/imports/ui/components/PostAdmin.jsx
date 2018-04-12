import React from 'react';
import { Table, Button, Card, Feed } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import Comment from '/imports/ui/components/Comment';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class PostAdmin extends React.Component {
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
                        {this.props.comments.map((comment, index) => <Comment key={index} note={comment}/>)}
                    </Feed>
                </Card.Content>
                <Card.Content extra>
                    <Comment owner={this.props.comments.owner} contactId={this.props.comments._id}/>
                </Card.Content>
            </Card>
        );
    }
}

/** Require a document to be passed to this component. */
PostAdmin.propTypes = {
    post: PropTypes.object.isRequired,
    comments: PropTypes.array.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(PostAdmin);
