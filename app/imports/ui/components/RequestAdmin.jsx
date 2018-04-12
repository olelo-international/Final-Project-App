import React from 'react';
import { Table, Button, Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';


/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class RequestAdmin extends React.Component {
    render() {
        return (
            <Card centered>
                <Card.Content>
                    <Card.Header>
                        {this.props.request.language}
                    </Card.Header>
                    <Card.Content extra>
                        {this.props.request.owner}
                    </Card.Content>
                </Card.Content>
            </Card>
        );
    }
}

/** Require a document to be passed to this component. */
RequestAdmin.propTypes = {
    request: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(RequestAdmin);
