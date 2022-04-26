import React from 'react'

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Container } from '@mui/material';

function Success() {
  return (
    <Container >
      <Alert severity="success">
        <AlertTitle>Info</AlertTitle>
        The claim has been submitted successfully. <strong>check your email!</strong>
      </Alert>
    </Container>
  )
}

export default Success