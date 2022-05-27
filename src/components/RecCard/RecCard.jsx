import React from "react";
import { Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import { Card, Image, Icon } from "semantic-ui-react";

function RecCard({ rec, isProfile, user }) {

  return (
    <Card key={rec._id} fluid>
      <Card.Content>
        <Card.Header>
        <Link to={`/${user.username}`}><Image
            avatar
            src={rec.user.photoUrl}
          /></Link>
          {rec.title}<span style={{ opacity: 0.6 }}> - {rec.user.username}</span></Card.Header>
      </Card.Content>
      <Card.Content textAlign="center">
        <ReactAudioPlayer src={rec.audioUrl} controls />
      </Card.Content>
      <Card.Content extra textAlign={"left"}>
        <Icon name={"heart"} size="large" color={"grey"} />
        {rec.likes.length} Users like this song
      </Card.Content>
    </Card>
  )
}

export default RecCard