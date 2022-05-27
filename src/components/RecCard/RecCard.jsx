import React from "react";
import { Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import { Card, Image, Icon } from "semantic-ui-react";

function RecCard({ rec, removeLike, addLike, user }) {

  const liked = rec.likes.findIndex(like => like.username === user.username);
  const clickHandler = liked > -1 ? () => removeLike(rec.likes[liked]._id) : () => addLike(rec._id);
  const likeColor = liked > -1 ? 'orange' : 'grey'

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
      <Card.Content extra>{rec.description ? rec.description : null}</Card.Content>
      <Card.Content extra textAlign={"left"}>
        <Icon name={"heart"} size="large" color={likeColor} onClick={clickHandler} />
        {rec.likes.length} Users like this song
      </Card.Content>
    </Card>
  )
}

export default RecCard