import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {  ThemeProvider, useTheme } from '@material-ui/core/styles';



const useStyles = makeStyles((theme)=>({
  root: {
   marginTop:'100px',
   padding:'50px',
   display:'flex',
   flexDirection:'row',
   justifyContent:'space-between',
   flexWrap:'wrap',
   [theme.breakpoints.down('md')]:{
     justifyContent:'center',
     marginTop:'40px',
     padding:'30px',
     
   },
  },
  width:{
    maxWidth:700,
  },
  box:{
   maxWidth:700,
   padding:'30px',
   backgroundColor:'white',
   marginTop:'100px',
   maxHeight:700,
   display:'flex',
   flexDirection:'column',
   [theme.breakpoints.down('sm')]:{
     padding:'15px',
     marginTop:'40px',
     maxHeight:450,
     
   },
  },
  line:{
    borderBottomStyle:'solid',
    borderBottomWidth:'thin',
    marginTop:'5px',
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
      
        marginTop:'20px',
        padding:'10px',
        paddingLeft:'20px',
        paddingRight:'20px',
    },
    
  },
}));


const Body4 = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    return ( 
        <div className={classes.root}>
            <img style={{height:'550px',}} src="https://sweek.com/assets/img/publishing.9a665f0949e57f6e175f4553371c9b22.png" />
            <div className={classes.width}>
            <Typography style={{fontWeight:'bold'}} variant="h4" >TURN STORIES INTO BOOKS WITH SWEEK PUBLISHING</Typography>
            <Typography style={{marginTop:'20px', color:'#798185',}} variant="subtitle1">Have you always wondered how to publish a book? Sweek has the solution for you. We will guide you from manuscript to cover design with Sweek Publishing. At no cost!</Typography>
            <div style={{display:'flex',alignItems:'center', color:'#798185',}}>
            <FiberManualRecordIcon  fontSize="small"  />
            <Typography  style={{marginTop:'20px',marginLeft:'5px'}} variant="subtitle1">Sell books globally as paperback and ebook directly to your fan base via social media, the Sweek webshop and via relevant bookshops</Typography>
            </div>
            <div style={{display:'flex',alignItems:'center', color:'#798185',}}>
            <FiberManualRecordIcon  fontSize="small"  />
            <Typography  style={{marginTop:'20px',marginLeft:'5px'}} variant="subtitle1">Publish for free and earn a very attractive royalty per sold copy (up to 60% of the sales price). It’s easy and fast - publish your book today!</Typography>
            </div>
            <div style={{display:'flex',alignItems:'center', color:'#798185',}}>
            <FiberManualRecordIcon  fontSize="small"  />
            <Typography  style={{marginTop:'20px',marginLeft:'5px'}} variant="subtitle1">It’s easy and fast - publish your book today!</Typography>
            </div>
            <Box className={classes.box}> 
                <Typography variant="subtitle1" style={{fontWeight:'bold'}} >Example paperback pocket book - 150 pages - paper cream</Typography>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginLeft:'20px',marginRight:'20px'}}>
                    <Typography variant="subtitle1" style={{fontWeight:'bold'}}>Sales price</Typography>
                    <Typography variant="subtitle1" style={{fontWeight:'bold'}}>$14.99</Typography>
                </div>
                <div className={classes.line}></div>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginLeft:'20px',marginRight:'20px'}}>
                    <Typography variant="subtitle1" style={{color:'#949f99'}}>Net sales price (excl. tax)</Typography>
                    <Typography variant="subtitle1" style={{color:'#949f99'}}>$14.99</Typography>
                </div>
                <div className={classes.line}></div>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginLeft:'20px',marginRight:'20px'}}>
                    <Typography variant="subtitle1" style={{fontWeight:'bold'}} >Your margin</Typography>
                    <Typography variant="subtitle1" style={{fontWeight:'bold'}}>$5.77</Typography>
                </div>
                <div className={classes.line}></div>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginLeft:'20px',marginTop:'2px',marginRight:'20px',marginBottom:'5px'}}>
                <Typography variant="caption" style={{color:'#949f99'}}>That's 38% of the net sales price</Typography>
                </div>
               
            </Box>
            <Button variant="text" className={classes.buttonstyle}>
                 <Typography variant={matches ? 'h5' : "subtitle1"} color="initial">More INFO</Typography>
                </Button>
            </div>

        </div>
     );
}
 
export default Body4;