import React from "react";
import { Card, Dimmer, Segment, Image } from "semantic-ui-react";
import RecCard from "../RecCard/RecCard";

export default function RecFeed({ recs, addLike, removeLike, user }){

  return (
    <Card.Group style={{ maxWidth: 500 }} centered>
      {recs.map((rec) => {
        return (
          <RecCard
            rec={rec}
            key={rec._id}
            addLike={addLike}
            removeLike={removeLike}
            user={user}
          />
        )
      })}
    </Card.Group>
  )
}