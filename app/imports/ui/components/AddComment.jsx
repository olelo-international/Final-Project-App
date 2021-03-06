import React from 'react';
import { Comments, CommentSchema } from '/imports/api/comment/comment';
import { Segment } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Bert } from 'meteor/themeteorchef:bert';
import PropTypes from 'prop-types';

/** Renders the Page for adding a document. */
class AddComment extends React.Component {

    /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.insertCallback = this.insertCallback.bind(this);
        this.formRef = null;
    }

    /** Notify the user of the results of the submit. If successful, clear the form. */
    insertCallback(error) {
        if (error) {
            Bert.alert({ type: 'danger', message: `Add comment failed: ${error.message}` });
        } else {
            Bert.alert({ type: 'success', message: 'Add comment succeeded' });
            this.formRef.reset();
        }
    }

    /** On submit, insert the data. */
    submit(data) {
        const { comment, contactId, createdAt, owner } = data;
        Comments.insert({ comment, contactId, createdAt, owner }, this.insertCallback);
    }

    /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
    render() {
        return (
            <AutoForm ref={(ref) => { this.formRef = ref; }} schema={CommentSchema} onSubmit={this.submit}>
                <Segment>
                    <TextField label="Add a timestamped comment" name='comment'/>
                    <SubmitField value='Submit'/>
                    <ErrorsField/>
                    <HiddenField name='owner' value={this.props.owner}/>
                    <HiddenField name='contactId' value={this.props.contactId}/>
                    <HiddenField name='createdAt' value={new Date()}/>
                </Segment>
            </AutoForm>
        );
    }
}
AddComment.propTypes = {
    owner: PropTypes.string.object,
    contactId: PropTypes.string.object,
};
export default AddComment;
