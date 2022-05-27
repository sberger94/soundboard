import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { Card, Image, Icon } from "semantic-ui-react";

function RecCard({ rec, isProfile, user }) {

  return (
    <Card key={rec._id}>
      <Card.Content>
        <Card.Header>
          <Image
            avatar
            src={rec.user.photoUrl}
          />
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Card.Header>{rec.title}<span style={{ opacity: 0.6 }}> - {rec.user.username}</span></Card.Header>
      </Card.Content>
      <Card.Content>
        <ReactAudioPlayer src={rec.audioUrl} controls />
      </Card.Content>
    </Card>
  )
}

export default RecCard