import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {  ThemeProvider, useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({
  root: {
   // backgroundImage:`url('https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_960_720.jpg')`,
    backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_960_720.jpg')`,
    
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    height:'100vh',
    [theme.breakpoints.down('sm')]: {
        height:'80vh'
      },
  },
  text:{
  
    marginLeft:'100px',
    paddingTop:'150px',
    color:'white',
    maxWidth:500,
    [theme.breakpoints.down('sm')]:{
      marginLeft:'20px',
      paddingTop:'40px',
    }


  },
  buttonstyle:{
    color:'white',
    background:'#00c8c8',
    marginLeft:'100px',
    marginTop:'50px',
    padding:'15px',
    fontWeight:'bold',
    paddingLeft:'60px',
    paddingRight:'60px',
    [theme.breakpoints.down('sm')]: {
        marginLeft:'20px',
        marginTop:'20px',
        padding:'10px',
        paddingLeft:'20px',
        paddingRight:'20px',
    },
    
  },
}));

const Body3 = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    return ( 
        <div className={classes.root}>
          <div className={classes.text}>
          <Typography style={{fontWeight:'bold'}} variant="h4" >START WRITING</Typography>
          <Typography variant="h6"> Sweek is the ideal writing app for both established and aspiring authors to reach a wide audience. Publish your book, poetry or short stories. Not sure how to write a story yet? Test your skills in creative writing by joining Sweek writing contests. Get your book published by an established publishing house.</Typography>
          </div>
          <Button variant="text" className={classes.buttonstyle}>
                 <Typography variant={matches ? 'h5' : "subtitle1"} color="initial">START</Typography>
                </Button>
        </div>
     );
}
 
export default Body3;