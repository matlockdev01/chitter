import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DeckCard from './deck-preview';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
            <DeckCard />
        </Grid>
        <Grid item xs={4}>
            <DeckCard />
        </Grid>
        <Grid item xs={4}>
            <DeckCard />
        </Grid>
      </React.Fragment>
    );
  }

export default function DeckGrid() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid container item spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item spacing={3}>
            <FormRow />
          </Grid>
        </Grid>
      </Box>
    );
  }