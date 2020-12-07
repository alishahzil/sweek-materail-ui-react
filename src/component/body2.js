import React from 'react';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';



const useStyles = makeStyles((theme)=>({
  root: {
      margin:'80px',
      marginTop:'100px',
      marginBottom:'50px',
  },
  scroll:{
      display:'flex',
      flexDirection:'row',
      overflowX:'auto',
      marginTop:'20px',
      
  },
  card:{
      margin:'10px',
  },
  buttonstyle:{
    color:'white',
    background:'#00c8c8',
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
const theme = createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "*::-webkit-scrollbar": {
            height:'9px',
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#929190",
            borderRadius:'5px',
          },
        }
      }
    }
  });



const Body2 = () => {
    const classes = useStyles();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    return ( 
        <div className={classes.root}> 
            <Typography variant="h4" style={{fontWeight:'bold'}} color="initial">DISCOVER THOUSANDS OF STORIES</Typography>
            <Typography variant="button" style={{color:'#929190',marginTop:'5px'}}>From flash fiction to romance novels - Sweek will provide the best reading experience on any of your devices. Not sure which books to read? Browse different genres and trending topics. You can easily save your favourites in your library to read them offline later!</Typography>
            <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className={classes.scroll}>
                <div className={classes.card}>
                    <img style={{height:'200px',width:'150px'}} src="https://1597566015.rsc.cdn77.org/v2/file/279338,1400000162" />
                    <Typography variant="h6">The Mismatched Half</Typography>
                </div>
                <div className={classes.card}>
                    <img style={{height:'200px',width:'150px'}} src="https://1597566015.rsc.cdn77.org/v2/file/7220,1102674648" />
                    <Typography variant="h6">The Mismatched Half</Typography>
                </div>
                <div className={classes.card}>
                    <img style={{height:'200px',width:'150px'}} src="https://1597566015.rsc.cdn77.org/v2/file/247,1102674648" />
                    <Typography variant="h6">The Mismatched Half</Typography>
                </div>
                <div className={classes.card}>
                    <img style={{height:'200px',width:'150px'}} src="https://1597566015.rsc.cdn77.org/v2/file/998083,1400000162" />
                    <Typography variant="h6">The Mismatched Half</Typography>
                </div>
                <div className={classes.card}>
                    <img style={{height:'200px',width:'150px'}} src="https://1597566015.rsc.cdn77.org/v2/file/5473,1102674648" />
                    <Typography variant="h6">The Mismatched Half</Typography>
                </div>
                <div className={classes.card}>
                    <img style={{height:'200px',width:'150px'}} src="https://1597566015.rsc.cdn77.org/v2/file/5473,1102674648" />
                    <Typography variant="h6">The Mismatched Half</Typography>
                </div>
                <div className={classes.card}>
                    <img style={{height:'200px',width:'150px'}} src="https://1597566015.rsc.cdn77.org/v2/file/31754,1102674648" />
                    <Typography variant="h6">The Mismatched Half</Typography>
                </div>
                <div className={classes.card}>
                    <img style={{height:'200px',width:'150px'}} src="https://1597566015.rsc.cdn77.org/v2/file/998083,1400000162" />
                    <Typography variant="h6">The Mismatched Half</Typography>
                </div>
                <div className={classes.card}>
                    <img style={{height:'200px',width:'150px'}} src="https://1597566015.rsc.cdn77.org/v2/file/31754,1102674648" />
                    <Typography variant="h6">The Mismatched Half</Typography>
                </div>
                <div className={classes.card}>
                    <img style={{height:'200px',width:'150px'}} src="https://1597566015.rsc.cdn77.org/v2/file/998083,1400000162" />
                    <Typography variant="h6">The Mismatched Half</Typography>
                </div>
            </div>
            <Button variant="text" className={classes.buttonstyle}>
            <Typography variant={matches ? 'h5' : "subtitle1"} color="initial">SIGN UP TODAY</Typography>
            </Button>
            </ThemeProvider>
        </div>
     );
}
 
export default Body2;