import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Image, Icon, Grid } from "semantic-ui-react";
import SoundBoard from "../../assets/SoundBoard.png"


export default function PageHeader({ user, handleLogout }) {
    
  return(
    <Segment className="header" clearing>
      <Header floated='left' image={SoundBoard}>
        <Link to='/'>
          <Image src={SoundBoard} style={{maxWidth: 100}} centered />
        </Link>
      </Header>
      <Segment.Inline>
        <Header as='h2' floated='right'>
          <Link to='' onClick={handleLogout}>
            Logout
          </Link>
        </Header>
        <Header as='h2'  floated='right'>
          <Link to={`/${user?.username}`}>
            <Image
              src={
                user?.photoUrl ? user?.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"
              }
              avatar
            ></Image>{user.username}
          </Link>
        </Header>
      </Segment.Inline>
    </Segment>
  )
}