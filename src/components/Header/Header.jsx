import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Image, Icon } from "semantic-ui-react";

export default function PageHeader({ user, handleLogout }) {
    console.log(user, '<- user in header')
  return(
    <Segment clearing>
      <Header as='h2' textAlign='center' >
        <Link to='/'>
          <Icon name='home' />
        </Link>
      </Header>
      <Header as='h2' floated='right'>
        <Link to='' onClick={handleLogout}>
          Logout
        </Link>
      </Header>
      <Header as='h2'  floated='left'>
        <Link to={`/${user?.username}`}>
          <Image
            src={
              user?.photoUrl ? user?.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"
            }
            avatar
          ></Image>{user.username}
        </Link>
      </Header>
    </Segment>
  )
}