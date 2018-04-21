import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Landing;
