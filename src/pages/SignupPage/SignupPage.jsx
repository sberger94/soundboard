import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Button, Form, Grid, Header, Icon, Image, Segment } from 'semantic-ui-react'
import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";

export default function SignUpPage(props) {

  const navigate = useNavigate()
  
  const [error, setError] = useState('');
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '', 
  });
  const [selectedFile, setSelectedFile] = useState('');

  async function handleSubmit(e){
    e.preventDefault()
    const formData = new FormData()
    formData.append('photo', selectedFile)

    for (let fieldName in state){
      console.log(fieldName, state[fieldName])
      formData.append(fieldName, state[fieldName])
    }

    try {
      await userService.signup(formData);
      props.handleSignUpOrLogin();
      navigate('/')
      
    } catch(err) {
      console.log(err.message);
      setError(err.message)
    }
  }

  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleFileInput(e){
    console.log(e.target.files, '<-e.target.files from signup')
    setSelectedFile(e.target.files[0])
  }
  
  return (
    <Grid textAlign="center" verticalAlign="middle" style={{ height: "100vh" }}>
      <Grid.Column style={{ maxWidth: 500 }}>
        <Header as='h2' icon >
          <Icon name='users' />
          <Header.Content>Sign Up</Header.Content>
        </Header>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              name="username"
              placeholder="Username"
              value={state.username}
              onChange={handleChange}
              required
            />
            <Form.Input
              type="email"
              name="email"
              placeholder="Email"
              value={state.email}
              onChange={handleChange}
              required
            />
            <Form.Input
              type="password"
              name="password"
              placeholder="Password"
              value={state.password}
              onChange={handleChange}
              required
            />
            <Form.Input
              type="password"
              name="passwordConfirm"
              placeholder="Confirm Password"
              value={state.passwordConfirm}
              onChange={handleChange}
              required
            />
            <Form.Field>
              <Form.Input
                type="file"
                name="photo"
                placeholder="Profile Picture"
                onChange={handleFileInput}
              />
            </Form.Field>
            <Button type="submit" className="btn">
              Sign Up!
            </Button>
          </Segment>
          {error ? <ErrorMessage error={error} /> : null}
        </Form>
      </Grid.Column>
    </Grid> 
    //<>
    //   <h1>Signup PAGE</h1>
    //   <ul>
    //     <li>Read the User Model, You can change it to fit your needs</li>
    //     <li>
    //       Make sure you read the Signup up func in the User Controller, to know
    //       how it is setup to find the user!
    //     </li>
    //   </ul>
    // </>
  );
}
