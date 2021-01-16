import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { useAuth } from "../../contexts/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';



const Login: React.FC = () => {
  const { signIn } = useAuth();
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  

  const handleSignIn = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event?.preventDefault();
    await signIn({ username, password })
    .catch((() => toast("Desculpe, Login ou Password incorretos. Tente novamente!!")));
  };
  const Copyright=()=>{
      return (
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © Franklin '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      );
  }
  const useStyles = makeStyles((theme)=>({
    root : {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor: 
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8,4),
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
    submit:{
      margin: theme.spacing(3,0,2),
       '&:hover':{ 
         color: 'green',
         borderColor: 'green',
        }
    },

  }));
  const classes = useStyles();
  return (
    <>
    <ToastContainer/>
        <Grid container component="main" className={classes.root}>
        <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className={classes.image}></Grid>
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Estudando Material-ui
            </Typography>
            <form className={classes.form} noValidate onSubmit={handleSignIn}>
              <TextField 
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="username"
                autoComplete="email"
                autoFocus
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              /> 
               <TextField 
                variant="outlined"
                margin="normal"
                required
                type="password"
                fullWidth
                id="password"
                label="Password"
                name="password"
                autoComplete="password"
                autoFocus
                onChange={(e)=> setPassword(e.target.value)}
                value={password}
              /> 
            <FormControlLabel
              control={<Checkbox value="remember" color="primary"/>}
              label="Salvar credênciais"
            />
            <Button
              type="submit"
              fullWidth
              className={classes.submit}
              variant="outlined"
              color="primary"
            >
              Entrar
            </Button>

            <Grid container>
              <Grid item xs>
                <Link to="/register">
                  Não possui uma conta? Cadastre-se
                </Link>
              </Grid>
              </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
            </form>
          </div>
          </Grid>
        </Grid>
    </>
  );
};
export default Login;
