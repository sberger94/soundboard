import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/Header/Header";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import RecFeed from "../../components/RecFeed/RecFeed";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";

import { Grid } from "semantic-ui-react";

export default function ProfilePage(props){

  const [recs, setRecs] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { username } = useParams();

  async function getProfile() {
    try {
      const data = await userService.getProfile(username)
      console.log(data, '<-- data from getProfile')
      setLoading(() => false);
      setRecs(() => [...data.recs]);
      setUser(() => data.user);
    } catch(err) {
      console.log(err)
      setError("Profile doesn't exist...probably")
    }
  }

  useEffect(() => {
    getProfile()
  }, []);

  if(error) {
    return (
      <>
      
      </>
    )
  }

  if(loading) {
    return(
      <>
      
      </>
    )
  }

  return(
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <PageHeader handleLogout={props.handleLogout} user={props.user}/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 600}}>
          <ProfileInfo user={user}/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row >
        <Grid.Column style={{ maxWidth: 500}}>
          <RecFeed
            recs={recs}
            user={props.user}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}