import React,{useState} from 'react';
import {Grid, Button, Link, Paper, CssBaseline, TextField, Typography, Avatar} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import ImageGrid from '../components/ImageGrid'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
     backgroundColor: theme.primary,
     color: "#fff"
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    },
    Link: {
        cursor: 'pointer',
        '&:visited':{
          color:'#fff'
        },
        '&:hover':{
          color:'white'
        }
    }
    
  }));



const Auth = ()=>{
   const classes = useStyles ();
   const History = useHistory ();
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

    return (
        <>
         <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <ImageGrid />
            <Grid item xs={12} sm={8} md={5} elevation={6} component={Paper} square>
            <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                value={firstName}
                onChange={(e)=>{
                    setFirstName(e.target.value)
                }}
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                value={lastName}
                onChange={(e)=>{
                    setLastName(e.target.value);
                }}
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value);
                }}
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link onClick={()=>{
                  History.push('/login')
              }} className={classes.Link} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
            </Grid>
         </Grid>
        </>
    )
}

export default Auth;