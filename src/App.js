import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useStyles from '../src/styleMaker'
import { connect } from "react-redux";
import { FormGroup } from '@material-ui/core';
const axios = require('axios').default;

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import validator from '../src/validator';


function App(props) {
  // more detail can be found here for validation tutorial
  // https://www.codementor.io/muhammedali956/implementing-dynamic-form-validators-in-reactjs-6j7q0l8e7
  const validators = validator;
  const classes = useStyles();
  const [values, setValues] = React.useState({
    ssn: '',
    phone: '',
    email: '',
    country: '',
    multiline: 'Controlled',
  });

  const [open, setOpen] = React.useState(false);

  const fetchAPI = () => {
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      props.dispatch({ type: 'GET', response });
    })
  }

  const handleOpen = () => {
    fetchAPI()
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  
  // // const [country, setValues] = React.useState('');

  const updateValidators = (fieldName, value) => {
    console.log(fieldName, value)
    validators[fieldName].errors = [];
    validators[fieldName].state = value;
    validators[fieldName].valid = true;
    validators[fieldName].rules.forEach((rule) => {
      if (rule.test instanceof RegExp) {
        if (!rule.test.test(value)) {
          validators[fieldName].errors.push(rule.message);
          validators[fieldName].valid = false;
        }
      } else if (typeof rule.test === 'function') {
        if (!rule.test(value)) {
          validators[fieldName].errors.push(rule.message);
          validators[fieldName].valid = false;
        }
      }
    });
  }

  const displayValidationErrors = (fieldName) => {
    const validator = validators[fieldName];
    const result = '';
    if (validator && !validator.valid) {
      const errors = validator.errors.map((info, index) => {
        return <span className="error" key={index}>* {info}</span>;
      });

      return (
        <div className="col s12 row">
          {errors}
        </div>
      );
    }
    return result;
  }


  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
    updateValidators(name, event.target.value);
  };


  const onSubmit = () => {
    const data = {
      ssn: values.ssn,
      phone: values.phone,
      email: values.email,
      country: values.country,
    }
    console.log(data)
    props.dispatch({type: 'SUBMIT', data})
  }

  // This function resets all validators for this form to the default state
  // const resetValidators =() => {
  //   Object.keys(this.validators).forEach((fieldName) => {
  //     validators[fieldName].errors = [];
  //     validators[fieldName].state = '';
  //     validators[fieldName].valid = false;
  //   });
  // }

  // const isFormValid = () => {
  //   let status = true;
  //   Object.keys(validators).forEach((field) => {
  //     if (!validators[field].valid) {
  //       status = false;
  //     }
  //   });
  //   return status;
  // }

 

  return (
    
    <React.Fragment>
    <div className={classes.container}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>MENU GOES THERE</Paper>
      </Grid>

      <Grid item xs={12}>
          <Grid item xs={12}>
            <FormGroup className={classes.formGroup} noValidate autoComplete="on">
              <TextField
                id=""
                label="SSN"
                value={values.ssn}
                onChange={handleChange('ssn')}
                type="text"
                className={classes.textField}
                name='ssn'
              />
              {displayValidationErrors('ssn')}
              <TextField
                id=""
                label="Phone"
                value={values.phone}
                onChange={handleChange('phone')}
                type="number"
                className={classes.textField}
                name='phone'
              />
              {displayValidationErrors('phone')}
              <TextField
                id=""
                label="Email"
                value={values.email}
                onChange={handleChange('email')}
                type="email"
                className={classes.textField}
                name='email'
              />
               {displayValidationErrors('email')}


              <FormControl className={classes.textField}>
                <InputLabel htmlFor="country">Country</InputLabel>
                <Select
                  label="Country"
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  value={values.country}
                  onChange={handleChange('country')}
                  inputProps={{
                    name: 'country',
                    id: 'country',
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {props.country.map(country => (
                    <MenuItem onChange={handleChange('country')} value={country.name}>{country.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>


              <Button
                onClick={() => onSubmit()}
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Save
              </Button>
            </FormGroup>
          </Grid>
      </Grid>
    </div>

    </React.Fragment>
   
  );
}

const mapStateToProps = (state) => ({ formData: state.formData, country: state.country });

export default connect(mapStateToProps)(App);