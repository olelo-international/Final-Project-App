import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Card, Header, Loader } from 'semantic-ui-react';
import { Requests } from '/imports/api/request/request';
import RequestAdmin from '/imports/ui/components/RequestAdmin';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListRequestAdmin extends React.Component {

    /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
    render() {
        return (this.props.ready) ? this.renderPage() : <Loader>Getting data</Loader>;
    }

    /** Render the page once subscriptions have been received. */
    renderPage() {
        return (
            <Container>
                <Header as="h2" textAlign="center">Request for Forum (Admin only)</Header>
                <Card.Group>
                    {this.props.requests.map((request, index) => <RequestAdmin key={index} request={request}/>)}
                </Card.Group>
            </Container>
        );
    }
}

/** Require an array of Stuff documents in the props. */
ListRequestAdmin.propTypes = {
    requests: PropTypes.array.isRequired,
    ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe('RequestAdmin');
    return {
        requests: Requests.find({}).fetch(),
        ready: subscription.ready(),
    };
})(ListRequestAdmin);
