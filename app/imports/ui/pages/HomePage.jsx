import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';3

class HomePage extends React.Component
{
  render()
  {
    return (
     <div className='olelo-landing-background'>
        <div className='NavBar'>
         <Header>
           <title>Announcements</title>
         </Header>
        </div>

       <Container>
         <Card.Group>
           {this.post.map((post, index) => <Contact key={index} post={post} />)}
         </Card.Group>
       </Container>
     </div>
    );
  }
}

export default HomePage;
