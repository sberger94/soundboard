import React from "react";
import { Image, Grid, Item } from "semantic-ui-react";

function ProfileInfo({user}){
  return (
    <Item.Group>
        <Item>
          <Item.Image src={user.photoUrl} size='small'/>
          <Item.Content>
            <Item.Header as='h1'>{user.username}</Item.Header>
            <Item.Meta>Bio</Item.Meta>
            <Item.Description>--Bio goes here--</Item.Description>
          </Item.Content>
        </Item>
    </Item.Group>
  )
}

export default ProfileInfo;