import React from 'react';
import { Header } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';

class HomePage extends React.Component{
  render() {
    return(
        <Header inverted className='centered'>Announcements</Header>
        
    );
  }
}

export default HomePage;