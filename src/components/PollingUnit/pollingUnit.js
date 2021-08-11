import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" >
      <CssBaseline />
         {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5" style={{ textAlign:'center', margin:"auto", textTransform:'uppercase'}}>
          Polling Units Result
        </Typography>
      {/* <div className={classes.paper}> */}
     

        <Grid container spacing={2}>
        <Grid item xs={3}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                style={{ textAlign: "center", fontWeight: "bold" }}
                color="blue"
                gutterBottom
              >
                Unit Result
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Paper elevation={2}>
                    <img
                      style={{ height: "110px", margin: "auto" }}
                      src="images/bank_building_96px.png"
                    />
                    <Typography
                      style={{ textAlign: "center", fontWeight: 2 }}
                      color="textSecondary"
                      gutterBottom
                    >
                      Deposite
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper elevation={2}>
                    <img
                      style={{ height: "110px" }}
                      color="red"
                      src="images/transaction_128px.png"
                    />
                    <Typography
                      style={{ textAlign: "center" }}
                      color="textSecondary"
                      gutterBottom
                    >
                      Transactions
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </CardContent>
          
          </Card>


        </Grid>
        
      </Grid>
       
      {/* </div> */}
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}