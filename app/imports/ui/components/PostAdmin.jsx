import React from 'react';
import { Button, Card, Feed, Confirm } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Bert } from 'meteor/themeteorchef:bert';
import Comment from '/imports/ui/components/Comment';
import AddComment from '/imports/ui/components/AddComment';
import { Posts } from '../../api/posts/post';
/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class PostAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.formRef = null;
    }
    onClick() {
        Posts.remove((this.props.post._id), this.deleteCallback);
        this.setState({ open: false });
    }
    deleteCallback(error) {
        if (error) {
            Bert.alert({ type: 'danger', message: `Delete failed: ${error.message}` });
        } else {
            Bert.alert({ type: 'success', message: 'Delete succeeded' });
            this.formRef.reset();
        }
    }
    state = { open: false }

    handleButtonClick = () => this.setState({ open: true })
    handleCancel = () => this.setState({ open: false })
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
                <Card.Content extra>
                    <Button onClick={this.handleButtonClick}>Delete</Button>
                    <Confirm
                        open={this.state.open}
                        header='confirm'
                        content='Are you sure to delete'
                        cancelButton='no'
                        confirmButton="yes"
                        onCancel={this.handleCancel}
                        onConfirm={this.onClick}
                        size='large'
                    />
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
