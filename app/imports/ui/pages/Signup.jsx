import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Accounts } from 'meteor/accounts-base';

const sf_options = [
  { key: 'S', text: 'Student', value: 'Student' },
  { key: 'F', text: 'Faculty', value: 'Faculty' },
];

const prof_options = [
  { key: 'N', text: 'Native Speaker', value: 'Native' },
  { key: 'L', text: 'Learning', value: 'Learning' },
];

/**
 * Signup component is similar to signin component, but we attempt to create a new user instead.
 */
export default class Signup extends React.Component {
  /** Initialize state fields. */
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', firstName:'', lastName:'', student_faculty:'', proficiency:'', desc:'', error: '' };
    // Ensure that 'this' is bound to this component in these two functions.
    // https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /** Update the form controls each time the user interacts with them. */
  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }

  /** Handle Signup submission using Meteor's account mechanism. */3
  handleSubmit() {
    const { email, password, firstName, lastName, student_faculty, proficiency, desc } = this.state;
    Accounts.createUser({ email, firstName, lastName, student_faculty, proficiency, desc, username: email, password }, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        // browserHistory.push('/login');
      }
    });
  }

  /** Display the signup form. */
  render() {
    return (
        <Container>
          <Grid textAlign="center" verticalAlign="middle" centered columns={2}>
            <Grid.Column>
              <Header as="h2" textAlign="center">
                Register your account
              </Header>
              <Form onSubmit={this.handleSubmit}>
                <Segment stacked>
                  <Form.Input
                      label="First Name"
                      icon="user"
                      iconPosition="left"
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      onChange={this.handleChange}
                  />
                  <Form.Input
                      label="Last Name"
                      icon="user"
                      iconPosition="left"
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      onChange={this.handleChange}
                  />
                  <Form.Select fluid label='Student or Faculty' options={sf_options} placeholder='Student or Faculty'/>
                  <Form.Select fluid label='Proficiency' options={prof_options} placeholder='Native Speaker or Learning'/>
                  <Form.TextArea
                      label="Description"
                      name="desc"
                      placeholder="Tell us about yourself.."
                      onChange={this.handleChange}
                  />
                  <Form.Input
                      label="Email"
                      icon="user"
                      iconPosition="left"
                      name="email"
                      type="email"
                      placeholder="email@hawaii.edu"
                      onChange={this.handleChange}
                  />
                  <Form.Input
                      label="Password"
                      icon="lock"
                      iconPosition="left"
                      name="password"
                      placeholder="Password"
                      type="password"
                      onChange={this.handleChange}
                  />
                  <Form.Button content="Submit" />
                </Segment>
              </Form>
              <Message>
                Already have an account? Login <Link to="/signin">here</Link>
              </Message>
              {this.state.error === '' ? (
                  ''
              ) : (
                  <Message
                      error
                      header="Registration was not successful"
                      content={this.state.error}
                  />
              )}
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}
