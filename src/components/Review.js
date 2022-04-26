import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

import { AppContext } from '../context/AppProvider';
import { formatDate } from '../util/DateUtil';

function Review() {
  const { formData } = useContext(AppContext);
  const navigate = useNavigate();
  const onBack = () => {
    navigate('/');
  }
  const onSubmit = () => {
    navigate('/success')
  }

  if (!formData) {
    return null;
  }
  return (
    <Container className='mt5'>
      <Card style={{ padding: '32px' }}>
        <Grid container
          direction="row"
          justifyContent="center"
          alignItems="center"
          item xs={12}>
          <h2>Review Claim Details</h2>
        </Grid>
        <div>
          <h3>Contact Information</h3>
          <Divider />
          <div className='mt16'>
            <Typography><strong>Name</strong> : {formData.name}</Typography>
            <Typography><strong>Phone</strong> : {formData.phone}</Typography>
            <Typography><strong>Email</strong> : {formData.email}</Typography>
          </div>
        </div>
        <div>
          <h3>Claim Information</h3>
          <Divider />
          <div className='mt16'>
            <Typography><strong>Claim date</strong> : {formatDate(formData.date)}</Typography>
            <Typography><strong>Loss</strong> : {formData.loss}</Typography>
            <Typography><strong>Insurance company</strong> : {formData.company}</Typography>
          </div>
        </div>
        <div>
          <h3>Property Information</h3>
          <Divider />
          <div className='mt16'>
            <Typography><strong>Address</strong> : {formData.address}</Typography>
            <Typography><strong>City</strong> : {formData.city}</Typography>
            <Typography><strong>Zipcode</strong> : {formData.code}</Typography>
            <Typography><strong>State</strong> : {formData.state}</Typography>
          </div>
        </div>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          style={{ marginTop: '10px' }}
          item xs={12}>
          <CardActions>
            <Stack spacing={2} direction="row">
              <Button variant="outlined" startIcon={<ArrowBackIcon />} onClick={onBack}>Back</Button>
              <Button variant="contained" endIcon={<SendIcon />} onClick={onSubmit}>Submit</Button>
            </Stack>
          </CardActions>
        </Grid>
      </Card>
    </Container>
  )
}

export default Review