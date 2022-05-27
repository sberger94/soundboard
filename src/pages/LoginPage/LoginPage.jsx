import React, { useState } from "react";
import "./LoginPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Button, Form, Grid, Header, Icon, Image, Message, Segment } from 'semantic-ui-react'
import userService from "../../utils/userService";
import { useNavigate, Link } from "react-router-dom";
import SoundBoard from "../../assets/SoundBoard.png"

export default function LoginPage(props) {

  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [state, setState] = useState({
    username: '',
    password: ''
  });

  async function handleSubmit(e){
    e.preventDefault()

    try {
      await userService.login(state);
      props.handleSignUpOrLogin();
      navigate('/');

    } catch(err) {
      console.log(err.message)
      setError(err.message)
    }
  }

  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };


  return (
    <Grid textAlign="center" verticalAlign="middle" style={{ height: "100vh" }}>
      <Grid.Column style={{ maxWidth: 500 }}>
        <Image src={SoundBoard} size="small" centered/>
        <Header as='h2' icon>
          <Header.Content>Log in to SoundBoard</Header.Content>
        </Header>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Segment>
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
            <Button type="submit" size="big" basic color="olive" className="btn">
              Log In
            </Button>
          </Segment>
        </Form>
        <Message attached='bottom' info>
          Not signed up? <Link to='/signup'>Create an Account</Link>
        </Message>
        {error ? <ErrorMessage error={error}/> : null}
      </Grid.Column>
    </Grid>
  );
}
