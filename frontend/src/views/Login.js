import React,{useState} from 'react';
import {Grid, Button, Link, Paper, CssBaseline, TextField, Typography, Avatar} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import ImageGrid from '../components/ImageGrid'
import { makeStyles } from '@material-ui/core/styles';
import API from '../utils/serverURI';

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
        cursor: 'pointer'
    }
  }));


const Login = ()=>{
    const classes = useStyles();
    const History = useHistory ();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const body = {
          email: email,
          password: password
        }

        const res = await fetch(`${API}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),

        })
        const {status} = await res;
        if(status === 201) {
           const fff = await res.json()
            
            console.log(fff)
            History.push('/home')
        }

    }

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <ImageGrid />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              value={email}
              onChange={(e)=>{
                  setEmail(e.target.value);
              }}
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
              value={password}
              onChange={(e)=>{
                  setPassword(e.target.value);
              }}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link onClick={
                    ()=>{
                        History.push('/')
                    }
                } className={classes.Link} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
        </Grid>
    )
}

export default Login;