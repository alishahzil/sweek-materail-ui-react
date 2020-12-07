import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {  ThemeProvider, useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({
  root: {
    backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('https://cdn.pixabay.com/photo/2016/01/27/04/32/books-1163695_960_720.jpg')`,
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    height:'92vh',
    [theme.breakpoints.down('sm')]: {
        height:'80vh'
      },
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
  h2type:{
    color:'white',
    fontWeight:'bold',
    marginTop:'60px',
    marginLeft:'100px',
    [theme.breakpoints.down('sm')]: {
        marginLeft:'20px',
        marginTop:'20px',
      },
  },
  imgtype:{
    height:'50px',
    marginTop:'150px',
    marginLeft:'100px',
    [theme.breakpoints.down('sm')]: {
        height:'20px',
        marginTop:'80px',
        marginLeft:'20px',
    },
  },
  
  h5type:{
    color:'white' ,
    marginLeft:'100px',
    [theme.breakpoints.down('sm')]: {
        marginLeft:'20px',
      },
  },
}));
const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));


    return (
        <ThemeProvider theme={theme}>
        <Box className={classes.root}>
            <Box>
                <img className={classes.imgtype} src="https://sweek.com/assets/img/sweek_logo.03c9b125b51aa2355137055205f41b56.svg"/>
                <Typography variant={matches ? "h2" : "h4"} className={classes.h2type} >Read, write and share stories</Typography>
                <Typography variant={matches ? "h5" : "subtitle1"} className={classes.h5type} >Read thousands of free books and stories. Challenge yourself in writing.</Typography>
                <Typography variant={matches ? 'h5' : "subtitle1"} className={classes.h5type}>Join the global community of readers and writers.</Typography>
                <Button variant="text" className={classes.buttonstyle}>
                 <Typography variant={matches ? 'h5' : "subtitle1"} color="initial">SIGN UP TODAY</Typography>
                </Button>
            </Box>

        </Box>
        </ThemeProvider>
      );
}
 
export default Header;