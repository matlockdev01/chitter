import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import DeckButton from './button';
import Typography from '@mui/material/Typography';

export default function DeckCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/american-goldfinch.jpg"
        title="American East"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          North America - East
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions>
        <DeckButton />
      </CardActions>
    </Card>
  );
}