import React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    const divStyle = { paddingTop: '15px', color: 'white' };
    return (
        <div>
          <div className='olelo-landing-background'>
            <Grid container stackable centered columns={1}>

              <Grid.Column textAlign='center'>
                <div className='olelo-landing-format'>
                  <div className='animated-sentence'>
                  <span><Header as='h1' inverted>Connect with UH Manoa students and improve your foreign language
                    studies!</Header></span>
                    <span><Header as='h1' inverted>E hui me nā haumāna Manoa a me ka hoʻomaikaʻiʻana i kāu
                    mau&apos;ōlelo&apos;oko&apos;a haole!</Header></span>
                    <span><Header as='h1' inverted>Connectez-vous avec les étudiants de UH Manoa et améliorez vos études
                    de langues étrangères!</Header></span>
                    <span><Header as='h1' inverted>¡Conéctese con los estudiantes de UH Manoa y mejore sus estudios de
                    idiomas!</Header></span>
                  </div>
                </div>
              </Grid.Column>

            </Grid>
          </div>
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
                <Header as='h3' inverted >Post in one of the many language forums on the site!</Header>
              </Grid.Column>

              <Grid.Column textAlign='center'>
                <Icon size='huge' name='comments outline' inverted/>
                <Header as='h2' inverted >Communicate with Fellow Students</Header>
                <Header as='h3' inverted >Comment on student&apos;s posts within each
                  language forum to interact.</Header>
              </Grid.Column>
            </Grid>
          </div>
        </div>
    );
  }
}

export default Landing;
