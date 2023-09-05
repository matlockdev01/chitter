import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function InfoCard() {
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

        <p>This is the deck's description</p>

        <Stack spacing={3} direction='row'>
          <Button variant='contained'>Play Now</Button>
          <Button variant='contained'>Study</Button>
        </Stack>
      </Card>
    );
  }