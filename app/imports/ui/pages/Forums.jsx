import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Card, Header, Loader, Button } from 'semantic-ui-react';
import { Posts } from '/imports/api/posts/post';
import { Comments } from '/imports/api/comment/comment';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Forums extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center" inverted>Language Forums</Header>
          <Card.Group itemsPerRow={3}>
            <Card>
              <Card.Content>
                <Card.Header>Arabic</Card.Header>
                <Card.Meta>101, 201</Card.Meta>
              </Card.Content>
              <Card.Content extra as={NavLink} activeClassName="active" exact to="/arabicforum" key='arabicforum'>
                <div className='ui button'>
                  <Button color='teal'>Go to Forum</Button>
                </div>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>Cambodian</Card.Header>
                <Card.Meta>101, 103, 105, 205</Card.Meta>
              </Card.Content>
              <Card.Content extra as={NavLink} activeClassName="active" exact to="/cambodianforum" key='cambodianforum'>
                <div className='ui button'>
                  <Button color='teal'>Go to Forum</Button>
                </div>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>Filipino</Card.Header>
                <Card.Meta>101, 102, 201, 202, 301, 401, 435</Card.Meta>
              </Card.Content>
              <Card.Content extra as={NavLink} activeClassName="active" exact to="/filipinoforum" key='filipinoforum'>
                <div className='ui button'>
                  <Button color='teal'>Go to Forum</Button>
                </div>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>French</Card.Header>
                <Card.Meta>101, 102, 201, 202, 301, 302, 306, 311, 312, 331, 405, 491E, 601, 735</Card.Meta>
              </Card.Content>
              <Card.Content extra as={NavLink} activeClassName="active" exact to="/frenchforum" key='frenchforum'>
                <div className='ui button'>
                  <Button color='teal'>Go to Forum</Button>
                </div>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>German</Card.Header>
                <Card.Meta>101, 102, 201, 202, 301, 303, 20, 401</Card.Meta>
              </Card.Content>
              <Card.Content extra as={NavLink} activeClassName="active" exact to="/germanforum" key='germanforum'>
                <div className='ui button'>
                  <Button color='teal'>Go to Forum</Button>
                </div>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>Greek</Card.Header>
                <Card.Meta>101, 201, 332</Card.Meta>
              </Card.Content>
              <Card.Content extra as={NavLink} activeClassName="active" exact to="/greekforum" key='greekforum'>
                <div className='ui button'>
                  <Button color='teal'>Go to Forum</Button>
                </div>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>Hawaiian</Card.Header>
                <Card.Meta>100, 101, 102, 201, 202, 284, 301, 302, 321, 331, 401, 402, 425, 433, 445, 470, 488, 601,
                605, 615, 652</Card.Meta>
              </Card.Content>
              <Card.Content extra as={NavLink} activeClassName="active" exact to="/hawaiianforum" key='hawaiianforum'>
                <div className='ui button'>
                  <Button color='teal'>Go to Forum</Button>
                </div>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>Hindi</Card.Header>
                <Card.Meta>101, 201, 301</Card.Meta>
              </Card.Content>
              <Card.Content extra as={NavLink} activeClassName="active" exact to="/hindiforum" key='hindiforum'>
                <div className='ui button'>
                  <Button color='teal'>Go to Forum</Button>
                </div>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>Ilokano</Card.Header>
                <Card.Meta>101, 201, 301, 401, 424, 486</Card.Meta>
              </Card.Content>
              <Card.Content extra as={NavLink} activeClassName="active" exact to="/ilokanoforum" key='ilokanoforum'>
                <div className='ui button'>
                  <Button color='teal'>Go to Forum</Button>
                </div>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>Indonesian</Card.Header>
                <Card.Meta>103, 203, 305, 307, 401, 452</Card.Meta>
              </Card.Content>
              <Card.Content extra as={NavLink} activeClassName="active" exact to="/indonesianforum" key='indonesianforum'>
                <div className='ui button'>
                  <Button color='teal'>Go to Forum</Button>
                </div>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>Japanese</Card.Header>
                <Card.Meta>101, 102, 201, 202</Card.Meta>
              </Card.Content>
              <Card.Content extra as={NavLink} activeClassName="active" exact to="/japaneseforum" key='japaneseforum'>
                <div className='ui button'>
                  <Button color='teal'>Go to Forum</Button>
                </div>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>Korean</Card.Header>
                <Card.Meta>101, 102, 201, 202, 301, 302</Card.Meta>
              </Card.Content>
              <Card.Content extra as={NavLink} activeClassName="active" exact to="/koreanforum" key='koreanforum'>
                <div className='ui button'>
                  <Button color='teal'>Go to Forum</Button>
                </div>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>Latin</Card.Header>
                <Card.Meta>101, 201, 303</Card.Meta>
              </Card.Content>
              <Card.Content extra as={NavLink} activeClassName="active" exact to="/latinforum" key='latinforum'>
                <div className='ui button'>
                  <Button color='teal'>Go to Forum</Button>
                </div>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>Maori</Card.Header>
                <Card.Meta>101, 201</Card.Meta>
              </Card.Content>
              <Card.Content extra as={NavLink} activeClassName="active" exact to="/maoriforum" key='maoriforum'>
                <div className='ui button'>
                  <Button color='teal'>Go to Forum</Button>
                </div>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>Russian</Card.Header>
                <Card.Meta>101, 201, 209, 303, 306, 419</Card.Meta>
              </Card.Content>
              <Card.Content extra as={NavLink} activeClassName="active" exact to="/russianforum" key='russianforum'>
                <div className='ui button'>
                  <Button color='teal'>Go to Forum</Button>
                </div>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>Samoan</Card.Header>
                <Card.Meta>101, 201, 227, 321, 421, 461</Card.Meta>
              </Card.Content>
              <Card.Content extra as={NavLink} activeClassName="active" exact to="/samoanforum" key='samoanforum'>
                <div className='ui button'>
                  <Button color='teal'>Go to Forum</Button>
                </div>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>Spanish</Card.Header>
                <Card.Meta>101, 102, 201, 202</Card.Meta>
              </Card.Content>
              <Card.Content extra as={NavLink} activeClassName="active" exact to="/spanishforum" key='spanishforum'>
                <div className='ui button'>
                  <Button color='teal'>Go to Forum</Button>
                </div>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>Thai</Card.Header>
                <Card.Meta>103, 105, 201, 401, 451</Card.Meta>
              </Card.Content>
              <Card.Content extra as={NavLink} activeClassName="active" exact to="/thaiforum" key='thaiforum'>
                <div className='ui button'>
                  <Button color='teal'>Go to Forum</Button>
                </div>
              </Card.Content>
            </Card>
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
Forums.propTypes = {
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
    posts: Posts.find({}).fetch(),
    comments: Comments.find({}).fetch(),
    ready: (subscription.ready() && subscription2.ready()),
  };
})(Forums);
