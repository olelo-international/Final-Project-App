import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader } from 'semantic-ui-react';
import { Profiles } from '/imports/api/profile/profile';
import Profile from '/imports/ui/components/Profile';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListProfile extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="Left aligned">Profile</Header>
          <Table celled>
              <Table.Header>
                  <Table.Row>
                      <Table.HeaderCell>Language you are interesting in ...</Table.HeaderCell>
                  </Table.Row>
              </Table.Header>
            <Table.Body>
              {this.props.profiles.map((profile) => <Profile key={profile._id} stuff={profile} />)}
            </Table.Body>
          </Table>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListProfile.propTypes = {
  profiles: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Profile');
  return {
    stuffs: Profiles.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListProfile);
