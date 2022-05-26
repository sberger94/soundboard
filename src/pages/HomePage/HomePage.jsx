import React, { useState } from "react";

import PageHeader from "../../components/Header/Header";
import AddRecForm from "../../components/AddRecForm/AddRecForm";
import RecFeed from "../../components/RecFeed/RecFeed";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import * as recsAPI from "../../utils/recApi";

import { Grid } from "semantic-ui-react";

function HomePage({user, handleLogout}){
  const [recs, setRecs] = useState([]);

  async function handleAddRec(rec){
    console.log(rec)
    const data = await recsAPI.create(rec);
    console.log(data.rec, '<-- data.rec', data, '<- data from recsAPI')
    setRecs(recs => [data.rec, ...recs])
  }

    return(
      <Grid centered verticalAlign="middle">
        <Grid.Row>
          <Grid.Column>
            <PageHeader handleLogout={handleLogout} user={user} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 500}}>
            <AddRecForm handleAddRec={handleAddRec}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 500}}>
            <RecFeed />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
}

export default HomePage