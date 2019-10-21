import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useStyles from '../src/styleMaker'
// import { connect } from "react-redux";




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
    console.log(data)
    props.dispatch({type: 'SUBMIT', data})
  }

  return (
    <React.Fragment>
    <Grid item xs={12}>
      <Paper className={classes.paper}>xs=12</Paper>
    </Grid>

      <form className={classes.container} noValidate autoComplete="off">
       <TextField
        id=""
        label="SSN"
        value={values.ssn}
        onChange={handleChange('ssn')}
        type="number"
        className={classes.textField}
        name='ssn'
  
        margin="normal"
      />
       <TextField
        id=""
        label="Phone"
        value={values.phone}
        onChange={handleChange('phone')}
        type="number"
        className={classes.textField}
        name='phone'
       
        margin="normal"
      />
       <TextField
        id=""
        label="Email"
        value={values.email}
        onChange={handleChange('email')}
        type="email"
        className={classes.textField}
        margin="normal"
        name='email'
      />

      <Button
        onClick={() => onSubmit()}
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
      >
        Save
      </Button>
    </form>
    </React.Fragment>
   
  );
}

export default App;