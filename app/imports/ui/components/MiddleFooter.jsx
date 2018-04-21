import React from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class MiddleFooter extends React.Component {
  render() {
    const divStyle = { paddingTop: '15px', color: 'white' };
    return (
        <footer>
          <div style={divStyle} className="ui center aligned container">
            <hr />
              <Grid container stackable centered columns={3}>
                <Grid.Column textAlign='center'>
                  <Icon size='huge' name='user circle outline' inverted/>
                  <Header as='h2' inverted >User Accounts</Header>
                  <Header as='h3' inverted >Create an account using your University of Hawai&apos;i
                    system login.</Header>
                </Grid.Column>

                <Grid.Column textAlign='center'>
                  <Icon size='huge' name='list' inverted/>
                  <Header as='h2' inverted >Language Forums</Header>
                  <Header as='h3' inverted >Post in one of the many language forums on the site - one for
                    each of the four-semester sequenced languages offered in the UH System!</Header>
                </Grid.Column>

                <Grid.Column textAlign='center'>
                  <Icon size='huge' name='comments outline' inverted/>
                  <Header as='h2' inverted >Communicate with Other Students</Header>
                  <Header as='h3' inverted >Comment on student&apos;s posts within each
                    language forum to interact.</Header>
                </Grid.Column>
              </Grid>
          </div>
        </footer>
    );
  }
}

export default MiddleFooter;
