import React ,{ useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LongMenu from './Lang';
import Drawer from '@material-ui/core/Drawer';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
     
    },
    menuButton: {
      marginRight: theme.spacing(5),
      [theme.breakpoints.up('md')]: {
        display:'none',
      },
    },
    title: {
      flexGrow: 1,
    },
    customizetoolbar:{
      minHeight:'52px',
      display:'flex',
      justifyContent:'space-between',
    },
    left:{
      display:'flex',
      flexDirection:'row',
      [theme.breakpoints.down('sm')]: {
        display:'none',
      },
    },
    right:{
      display:'flex',
      flexDirection:'row',
      marginRight:'50px',
      [theme.breakpoints.down('sm')]: {
        marginRight:'30px',
        justifyContent:'space-between',
      },
    },
    appbar:{
      
        zIndex: theme.zIndex.drawer + 1
    },
  }));
  const styles = {
    navBar: {'top': AppBar.height}
  }

const Appbar = () => {
    const classes = useStyles();
    const [app,setapp] = useState(false);
    const handleToggle = () => {setapp(!app)};
   
  
    return ( 
        <div className={classes.root}>
      <AppBar className={classes.appbar}  style={{backgroundColor:'#00c8c8'}} position="static">
        <Toolbar  className={classes.customizetoolbar} >
          <IconButton onClick={handleToggle} className={classes.disicon} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <div className={classes.left}>
          <img style={{height:"20px",marginRight:'20px'}} src="https://sweek.com/assets/img/sweek_logo_icon.e7f51fa86e80dd3e838f258e065f53c6.svg" />
          <Typography style={{marginRight:'20px'}} variant="body2" className={classes.title}>
          READ STORIES 
          </Typography>
          <Typography  style={{marginRight:'20px'}} variant="body2" className={classes.title}>
          WRITE STORIES
          </Typography>
          <Typography  style={{marginRight:'20px'}} variant="body2" className={classes.title}>
          WRITING CONTESTS
          </Typography>
          <Typography  style={{marginRight:'20px'}} variant="body2" className={classes.title}>
          SELF-PUBLISHING

          </Typography>
          </div>
          <div className={classes.right}>
          <LongMenu />
          <Button  style={{border:'1px solid',width:'100px',marginLeft:'15px'}} color="inherit">LOGIN</Button>
          </div>
        </Toolbar>
        <Drawer
        
            anchor='top'
            open={app}
            onClose={()=>setapp(!app)}
            elevation ={0}
            width={200}
           >
              <Typography  style={{marginRight:'20px'}} variant="body2" className={classes.title}>
          WRITE STORIES
          </Typography>
          <Typography  style={{marginRight:'20px'}} variant="body2" className={classes.title}>
          WRITING CONTESTS
          </Typography>
          <Typography  style={{marginRight:'20px'}} variant="body2" className={classes.title}>
          SELF-PUBLISHING

          </Typography>
          </Drawer>   
      </AppBar>
      
    </div>
     );
}
 
export default Appbar;