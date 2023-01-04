import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

export default function Create() {
  return (
    <Container>
      <Typography 
        variant='h6'
        component='h2'
        gutterBottom
        color='textSecondary'
        >
        Create A New Note
      </Typography>

      <Button
        onClick={() => console.log('you clicked me ')}
        type='submit'
        color='secondary'
        variant="contained"
      >
        Submit
      </Button>

    </Container>
  )
}
