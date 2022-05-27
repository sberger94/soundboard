import React, { useState, useEffect } from "react";

import PageHeader from "../../components/Header/Header";
import AddRecForm from "../../components/AddRecForm/AddRecForm";
import RecFeed from "../../components/RecFeed/RecFeed";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import * as recsAPI from "../../utils/recApi";

import { Grid } from "semantic-ui-react";

function HomePage({user, handleLogout}){
  const [recs, setRecs] = useState([]);
  const [error, setError] = useState("");

  async function handleAddRec(rec){
    try {
      console.log(rec)
      const data = await recsAPI.create(rec);
      console.log(data.rec, '<-- data.rec', data, '<- data from recsAPI')
      setRecs([data.rec, ...recs])
    } catch(err) {
      console.log(err)
      setError(err.message)
    }
  }

  async function getRecs() {
    try {
      const data = await recsAPI.getAll();
      setRecs([...data.recs])
    } catch(err) {
      console.log(err)
      setError(err.message);
    }
  }

  useEffect(() => {
    getRecs();
  }, []);

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
            <RecFeed
              recs={recs}
              user={user}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
}

export default HomePage