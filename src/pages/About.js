import React, { Component } from 'react';
import profile from "./profile.jpg";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import popcorn from "./Oreo-popcorn-recipe-square.jpg";
import "./About.css";  
import { CardHeader } from '@mui/material';

const card = (
  <React.Fragment>
    <CardMedia
          component="img"
          image={popcorn}
          alt="picture of food"
          className='popcornImg'
        />
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Oreo Popcorn is pretty good</Typography>
    <CardContent >
      <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body">
        I love watching sports -- soccer and basketball -- and listening to music.
        <br />
        {"Just watched the new spiderman movie. I recommend seeing it if you haven't already because I thought it was pretty good yeah yeah."}
      </Typography>
    </CardContent>

  </React.Fragment>
);

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
    <div className="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src={profile}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">
        <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
          Sebastian Barroso
        </Typography></div>
        <div className="brief_description">
        <Box>
          <Card variant="outlined">{card}</Card>
        </Box>
        </div>
      </div>
    </div>
  </div>
      </div>
    )
  }
}