import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useStyles from '../src/styleMaker'
import { connect } from "react-redux";
import { FormGroup } from '@material-ui/core';


function App(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    ssn: '',
    phone: '',
    email: '',
    multiline: 'Controlled',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = () => {
    const data = {
      ssn: values.ssn,
      phone: values.phone,
      email: values.email
    }
    props.dispatch({type: 'SUBMIT', data})
    console.log(props.formData)
  }

  

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
                type="number"
                className={classes.textField}
                name='ssn'
              />
              <TextField
                id=""
                label="Phone"
                value={values.phone}
                onChange={handleChange('phone')}
                type="number"
                className={classes.textField}
                name='phone'
              />
              <TextField
                id=""
                label="Email"
                value={values.email}
                onChange={handleChange('email')}
                type="email"
                className={classes.textField}
                name='email'
              />

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

const mapStateToProps = (state) => ({ formData: state.formData });

export default connect(mapStateToProps)(App);