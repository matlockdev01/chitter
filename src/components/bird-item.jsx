import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function BirdItem() {
  return (
    <Card sx={{ width: '75' }}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            American Goldfinch {/*will eventually be bird.name */}
          </Typography>
          <Typography variant="body2" color="text.secondary">
             Goldfinches are strictly vegetarian - they only eat seeds (sunflower and Nyjer are their favorites!)
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="80"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="bird photo"
        />
      </CardActionArea>
    </Card>
  );
}