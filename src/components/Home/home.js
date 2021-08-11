import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

import Polling from "../PollingUnit/pollingUnit";
import LGA from "../LocalGovernment/Lga";
import Result from "../PartyResult/PartyResult";
import Ward from "../Ward/ward";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const useStyle = makeStyles({
  root: {
    flex:1,
   //minWidth: 100,
    borderColor: "blue",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function PermanentDrawerLeft() {
  const classes = useStyles();
  const classe = useStyle();

  const [id, setId] = React.useState(0);
  
  const Tab1 = (props) => {
    const id = props.id;
    const x = id == 1;
    console.log("id of tabs", x);

    if (id == 0) {
      return (<>
      
    <Container component="main" >
      {/* maxWidth="xs" */}
      <CssBaseline />
      <Grid container spacing={3} style={{justifyContent:"center"}}>
        <Grid item xs={5}>
          <Card className={classe.root} variant="outlined">
            <CardContent>
            


              <Paper elevation={2}   style={{ height: "110px", margin: "auto" }} onClick={() => setId(1)}>
                  
                   <Typography
                style={{ textAlign: "center" ,paddingTop:"9%", fontWeight: "bold" , color:"blue", fontSize:28  }}
                color="textSecondary"
                gutterBottom
              >
               Election Polling Units

              </Typography>
                  </Paper>

         
            </CardContent>
       
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card className={classe.root} variant="outlined">
            <CardContent>
          
            <Paper elevation={2}   style={{ height: "110px", margin: "auto" }} 
            onClick={() => setId(2)}>
                  
                  <Typography
               style={{ textAlign: "center" ,paddingTop:"9%", fontWeight: "bold", color:"blue", fontSize:28  }}
               color='textPrimary'
               gutterBottom
             >
               Wards
             </Typography>
                 </Paper>
            </CardContent>
          
          </Card>
        </Grid>

       
      </Grid>

      <Grid container spacing={3} style={{justifyContent:"center"}}>
        <Grid item xs={5}>
          <Card className={classe.root} variant="outlined">
            <CardContent>
            
            <Paper elevation={2}   style={{ height: "110px", margin: "auto" }}
            onClick={() => setId(3)}>
                  
                  <Typography
               style={{ textAlign: "center",paddingTop:"9%", fontWeight: "bold", color:"blue", fontSize:28 }}
              
               gutterBottom
             >
               Parties Result
             </Typography>
                 </Paper>
            </CardContent>
          
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card className={classe.root} variant="outlined">
            <CardContent>
           
            <Paper elevation={2}   style={{ height: "110px", margin: "auto" }}
            onClick={() => setId(4)}>
                  
                  <Typography
               style={{ textAlign: "center" ,paddingTop:"9%", fontWeight: "bold", color:"blue", fontSize:28  }}
               color="textSecondary"
               gutterBottom
             >
               LGA Result
             </Typography>
                 </Paper>
            </CardContent>
     
          </Card>
        </Grid>

     
      </Grid>
    </Container>
      </>)
    }   else if (id == 1) {
      return(<> <Polling/> </>)

    }
    else if (id == 2) {
      return(<><Ward/> </>)

    }
    else if (id == 3) {
      return(<><Result/> </>)

    }
    else if (id == 4) {
      return(<><LGA/> </>)

    }
   
    
    }

 

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
          Delta State INEC 2023 Election Result
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List     onClick={() => setId(0)} >
            <ListItem button className={classes.list}>

              <ListItemIcon>
              <InboxIcon />
              </ListItemIcon> 
              <ListItemText primary="Home" />
             
           

          </ListItem>
          </List >
        <Divider />
      

      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
       {/* <Dashboard/>  */}
        <Tab1 id={id} />
      </main>
    </div>
  );
}

















// import React,{useState, useEffect,} from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import Swal from 'sweetalert2';
// import {useHistory} from "react-router-dom";
// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));


// export default function SignIn() {

  
// let [email, setEmail] = useState("");
// let [password, setPassword] = useState("");
// //let [userDetail, setLogin] = useState("");
// let [emailError, setEmailError] = useState({});
// let [passwordError, setPasswordError] = useState({});

// //console.log("userDetail",userDetail.user_id);
// // console.log("userDetail",userDetail.map((event) => {
// //   const data = JSON.parse(event.user_id);
// //   console.log("data",data)
// //   localStorage.setItem("user_id", data);
// // }) );
   
// //localStorage.setItem("user_id",)

// //localStorage.setItem("user_id", userDetail.user_id);
// let history = useHistory();
// const Redirect = () => {
//   history.push("/testApp");
// };

// const UserAuth = () => {
//   //e.preventDefault();
//   const isValid = validate();
//     if (isValid) {
//       fetch("http://localhost:8080/api/user/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password}),
//       })
//         .then((response) => response.json())
//         .then((response) => localStorage.setItem("user_id", response.result.user_id))//setLogin(response.result),

//         .then((response) => {
//           Swal.fire(response,"Login Succeeful")
//           Redirect()
         
          
          
         
//       })
//       .catch((err) => {
//           Swal.fire('an error occured pls try again later ');
//           console.log('an error occured pls try again later');
//       })
//     }
  

 
// };



// const validate = () => {
 
//   const emailError = {};
//   const passwordError = {};
  

//   let isvalid = true;


//    if (email == 0) {
//     emailError.emailV = "E-mail is Required";
//     isvalid = false;
//   } else if (password == 0) {
//     passwordError.passwordV = "Password is Required";
//     isvalid = false;
//   }

 
//   setEmailError(emailError);
//   setPasswordError(passwordError);
 

//   return isvalid;
// };

//   const classes = useStyles();

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign in
//         </Typography>
//         {/* <form className={classes.form} noValidate> */}
//           <TextField
//             variant="outlined"
//             margin="normal"
//             //required
//             fullWidth
//             //id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//             onChange={(e) => setEmail(e.target.value)}
          
//           />
//              {Object.keys(emailError).map((key) => {
//             return <div style={{ color: "red" }}>{emailError[key]}</div>;
//           })}
//           <TextField
//             variant="outlined"
//             margin="normal"
//             //required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//            // id="password"
//             autoComplete="current-password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//              {Object.keys(passwordError).map((key) => {
//             return <div style={{ color: "red" }}>{passwordError[key]}</div>;
//           })}
         
//           <Button
//             //type="Submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//             onClick={() => {
//               UserAuth();
//             }}
            
//           >
//             Sign In
//           </Button>
//           <Grid container>
           
//             <Grid item xs>
//               <Link href="/sign-up" variant="body2">
//                 {"Don't have an account? Sign Up"}
//               </Link>
//             </Grid>
//           </Grid>
      
//       </div>
//       <Box mt={8}>
//         <Copyright />
//       </Box>
//     </Container>
//   );
// }