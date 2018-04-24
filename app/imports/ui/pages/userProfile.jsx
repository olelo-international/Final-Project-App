import React, { Component } from 'react';
import { Header, Form, Container } from 'semantic-ui-react';

const options = [
  { key: 'S', text: 'Student', value: 'Student' },
  { key: 'F', text: 'Faculty', value: 'Faculty' },
];

class userProfile extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })
  render() {
    const { value } = this.state
    return (
        <Container>
          <Header inverted textAlign="centered">My Profile</Header>
          <Form>
            <Form.Group widths='equal'>
              <Form.Input fluid label='First name' placeholder='First name' />
              <Form.Input fluid label='Last name' placeholder='Last name' />
              <Form.Select fluid label='Student/Faculty' options={options} placeholder='Student/Faculty' />
            </Form.Group>
            <Form.Group inline>
              <label>Proficiency</label>
              <Form.Radio label='Native' value='native' checked={value === 'native'} onChange={this.handleChange} />
              <Form.Radio label='Learning' value='learning' checked={value === 'learning'} onChange={this.handleChange} />
            </Form.Group>
            <Form.TextArea label='About' placeholder='Tell us more about you (What languages do you speak? Any courses? etc)' />
            <Form.Button>Submit</Form.Button>
          </Form>

        </Container>
    );
  }

}

export default userProfile;
