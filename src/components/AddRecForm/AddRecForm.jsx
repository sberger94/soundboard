import React, { useState } from "react";
import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";

export default function AddRecForm(props){

  const [selectedFile, setSelectedFile] = useState('');
  const [state, setState] = useState({
    title: '',
    description: ''
  });

  function handleFileInput(e){
    setSelectedFile(e.target.files[0])
  };

  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  };

  function handleSubmit(e){
    e.preventDefault()

    const formData = new FormData()
    formData.append('recording', selectedFile)
    for (let fieldName in state){
      console.log(fieldName, state[fieldName])
      formData.append(fieldName, state[fieldName])
    }
    props.handleAddRec(formData);
  }

  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 500 }}>
        <Segment>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Form.Input 
              name="title"
              value={state.title}
              placeholder="Title"
              onChange={handleChange}
              required
            />
            <Form.Input
              name="description"
              value={state.description}
              placeholder="Description"
              onChange={handleChange}
            />
            <Form.Input
              type="file"
              name="recording"
              onChange={handleFileInput}
            />
            <Button
              type="submit"
            >
              Upload
            </Button>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  )
};