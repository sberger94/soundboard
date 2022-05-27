import React from "react";
import { Card, Dimmer, Segment, Image } from "semantic-ui-react";
import RecCard from "../RecCard/RecCard";

export default function RecFeed({ recs, isProfile, user }){

  return (
    <Card.Group>
      {recs.map((rec) => {
        return (
          <RecCard
            rec={rec}
            key={rec._id}
            user={user}
          />
        )
      })}
    </Card.Group>
  )
}