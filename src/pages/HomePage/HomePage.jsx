import React from "react";

import PageHeader from "../../components/Header/Header";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import { Grid } from "semantic-ui-react";

function HomePage({user, handleLogout}){

    return(
      <Grid centered>
        <Grid.Row>
          <Grid.Column>
            <PageHeader handleLogout={handleLogout} user={user} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
}

export default HomePage