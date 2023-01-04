import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import SendIcon from '@mui/icons-material/Send';
import { KeyboardArrowRight } from '@mui/icons-material';

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
        endIcon={<KeyboardArrowRight />}
      >
        Submit
      </Button>

    </Container>
  )
}
