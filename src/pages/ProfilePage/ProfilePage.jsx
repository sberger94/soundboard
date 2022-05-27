import React from "react";
import PageHeader from "../../components/Header/Header";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import RecFeed from "../../components/RecFeed/RecFeed";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import { Grid } from "semantic-ui-react";

export default function ProfilePage(){

  return(
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <PageHeader />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <ProfileInfo />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column>
          <RecFeed />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}