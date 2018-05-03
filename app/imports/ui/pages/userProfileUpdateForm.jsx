import React from 'react';
import { Header, Form, Container } from 'semantic-ui-react';

const options = [
  { key: 'S', text: 'Student', value: 'Student' },
  { key: 'F', text: 'Faculty', value: 'Faculty' },
];

class userProfileUpdateForm extends React.Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });
  render() {
    const { value } = this.state;
    return (
        <Container>
          <Header inverted textAlign="centered">My Profile</Header>
          <Form>
            <Form.Group widths='equal'>
              <Form.Input fluid label='First name' placeholder='First name'/>
              <Form.Input fluid label='Last name' placeholder='Last name'/>
              <Form.Select fluid label='Student/Faculty' options={options} placeholder='Student/Faculty'/>
            </Form.Group>
            <Form.Group inline>
              <label>Proficiency</label>
              <Form.Radio label='Native' value='native' checked={value === 'n'} onChange={this.handleChange} />
              <Form.Radio label='Learning' value='learning' checked={value === 'l'} onChange={this.handleChange}/>
            </Form.Group>
              <Form.TextArea label='About' placeholder='Tell us more about you (Languages spoken? Courses? etc)'/>
            <Form.Button>Submit</Form.Button>
          </Form>
        </Container>
    );
  }

}

export default userProfileUpdateForm;
