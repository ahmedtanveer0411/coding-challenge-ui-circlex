import DatePicker from 'react-date-picker';

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import styled from '@emotion/styled';

import '../App.css';
import useClaim from '../hooks/useClaim';
 
const ErrorMessage = styled.div`
    color: red;
`;
 

function ClaimForm() {

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    onChange,
    onSelect,
    stateObj,
    dateObj, 
  } = useClaim();

  const bindContactInformation = (
    <Grid item xs={6}>
      <h3>Contact Information</h3>
      <Divider />
      <TextField
        fullWidth
        id="name"
        name="name"
        label="Name"
        variant="standard"
        onChange={handleChange}
        value={values.name}
        error={!!(touched.name && errors.name)}
      />
      {touched.name && errors.name ? (
        <ErrorMessage>{errors.name}</ErrorMessage>
      ) : null}
      <TextField
        fullWidth
        type="number"
        id="phone"
        name="phone"
        label="Phone"
        variant="standard"
        onChange={handleChange}
        value={values.phone}
        error={!!(touched.phone && errors.phone)}
        className='mt16'
      />
      {touched.phone && errors.phone ? (
        <ErrorMessage>{errors.phone}</ErrorMessage>
      ) : null}
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        variant="standard"
        onChange={handleChange}
        value={values.email}
        error={!!(touched.email && errors.email)}
        className='mt16'
      />
      {touched.email && errors.email ? (
        <ErrorMessage>{errors.email}</ErrorMessage>
      ) : null}
    </Grid>);

  const bindClaimInformation = (
    <Grid item xs={6}>
      <h3>Claim Information</h3>
      <Divider />
      <div className='mt16'>
        <DatePicker
          className='claim-date'
          name="date"
          onChange={onChange}
          value={dateObj}
        />
      </div>

      <TextField
        fullWidth
        type="number"
        id="loss"
        name="loss"
        label="Loss"
        variant="standard"
        onChange={handleChange}
        value={values.loss}
        className='mt16'
      />

      <TextField
        fullWidth
        className='mt16'
        id="company"
        name="company"
        label="Insurance company"
        variant="standard"
        onChange={handleChange}
        value={values.company}

      />
    </Grid>);

  const bindPropertyInformation = (
    <Grid item xs={12}>
      <h3>Property Information</h3>
      <Divider />
      <TextField
        fullWidth
        id="address"
        name="address"
        label="Address"
        variant="standard"
        onChange={handleChange}
        value={values.address}
      />

      <TextField
        fullWidth
        className='mt16'
        id="city"
        name="city"
        label="City"
        variant="standard"
        onChange={handleChange}
        value={values.city}

      />

      <TextField
        fullWidth
        className='mt16'
        id="code"
        name="code"
        label="Zipcode"
        variant="standard"
        onChange={handleChange}
        value={values.code}
      />

      <FormControl fullWidth className='mt16 marginleft0' variant="standard" >
        <InputLabel id="demo-simple-select-standard-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="state"
          name='state'
          label="State"
          onChange={onSelect}
          value={stateObj}
        >
          <MenuItem value="Texas">Texas</MenuItem>
          <MenuItem value="San Jose">San Jose</MenuItem>
          <MenuItem value="Louisiana">Louisiana</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  )

  return (
    <Container fixed className='mt5'>
      <form onSubmit={handleSubmit}>
        <Card className='p32'>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            item xs={12}>
            <h2>Claim Details</h2>
          </Grid>
          <Grid container spacing={2}>

            {bindContactInformation}
            {bindClaimInformation}
            {bindPropertyInformation}

            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              className='mt10'
              item xs={12}>
              <Button type="submit" size="large" variant="contained" onClick={handleSubmit}>Submit</Button>
            </Grid>
          </Grid>
        </Card>
      </form>
    </Container>
  );
}

export default ClaimForm;
