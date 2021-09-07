import React from 'react';
import {Grid, Button, Link, Paper, CssBaseline, TextField, Typography, Avatar, Container} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import API from '../utils/serverURI';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
  const Register = ()=> {
    const classes = useStyles();
    const History = useHistory();
  
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="name"
              label="name"
              id="userName"
              placeholder="Username"
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={()=>{
                History.push('/Home')
              }}
            >
              Go To Home.
            </Button>
            <Button
    
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={()=>{
                History.push('/jobs')
              }}
            >
              Go To Jobs.
            </Button>
          </form>
        </div>
      </Container>
    );
  }

export default Register;

