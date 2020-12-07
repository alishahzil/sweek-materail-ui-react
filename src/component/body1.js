import React from 'react';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'




const useStyles = makeStyles({
  root: {
    backgroundColor: '#00c8c8',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 200 200'%3E%3Cg fill='none' stroke='%23FFF' stroke-width='0.8' stroke-opacity='0.2'%3E%3Crect x='-40' y='40' width='75' height='75'/%3E%3Crect x='-35' y='45' width='65' height='65'/%3E%3Crect x='-30' y='50' width='55' height='55'/%3E%3Crect x='-25' y='55' width='45' height='45'/%3E%3Crect x='-20' y='60' width='35' height='35'/%3E%3Crect x='-15' y='65' width='25' height='25'/%3E%3Crect x='-10' y='70' width='15' height='15'/%3E%3Crect x='-5' y='75' width='5' height='5'/%3E%3Crect width='35' height='35'/%3E%3Crect x='5' y='5' width='25' height='25'/%3E%3Crect x='10' y='10' width='15' height='15'/%3E%3Crect x='15' y='15' width='5' height='5'/%3E%3Crect x='40' width='75' height='75'/%3E%3Crect x='45' y='5' width='65' height='65'/%3E%3Crect x='50' y='10' width='55' height='55'/%3E%3Crect x='55' y='15' width='45' height='45'/%3E%3Crect x='60' y='20' width='35' height='35'/%3E%3Crect x='65' y='25' width='25' height='25'/%3E%3Crect x='70' y='30' width='15' height='15'/%3E%3Crect x='75' y='35' width='5' height='5'/%3E%3Crect x='40' y='80' width='35' height='35'/%3E%3Crect x='45' y='85' width='25' height='25'/%3E%3Crect x='50' y='90' width='15' height='15'/%3E%3Crect x='55' y='95' width='5' height='5'/%3E%3Crect x='120' y='-40' width='75' height='75'/%3E%3Crect x='125' y='-35' width='65' height='65'/%3E%3Crect x='130' y='-30' width='55' height='55'/%3E%3Crect x='135' y='-25' width='45' height='45'/%3E%3Crect x='140' y='-20' width='35' height='35'/%3E%3Crect x='145' y='-15' width='25' height='25'/%3E%3Crect x='150' y='-10' width='15' height='15'/%3E%3Crect x='155' y='-5' width='5' height='5'/%3E%3Crect x='120' y='40' width='35' height='35'/%3E%3Crect x='125' y='45' width='25' height='25'/%3E%3Crect x='130' y='50' width='15' height='15'/%3E%3Crect x='135' y='55' width='5' height='5'/%3E%3Crect y='120' width='75' height='75'/%3E%3Crect x='5' y='125' width='65' height='65'/%3E%3Crect x='10' y='130' width='55' height='55'/%3E%3Crect x='15' y='135' width='45' height='45'/%3E%3Crect x='20' y='140' width='35' height='35'/%3E%3Crect x='25' y='145' width='25' height='25'/%3E%3Crect x='30' y='150' width='15' height='15'/%3E%3Crect x='35' y='155' width='5' height='5'/%3E%3Crect x='200' y='120' width='75' height='75'/%3E%3Crect x='40' y='200' width='75' height='75'/%3E%3Crect x='80' y='80' width='75' height='75'/%3E%3Crect x='85' y='85' width='65' height='65'/%3E%3Crect x='90' y='90' width='55' height='55'/%3E%3Crect x='95' y='95' width='45' height='45'/%3E%3Crect x='100' y='100' width='35' height='35'/%3E%3Crect x='105' y='105' width='25' height='25'/%3E%3Crect x='110' y='110' width='15' height='15'/%3E%3Crect x='115' y='115' width='5' height='5'/%3E%3Crect x='80' y='160' width='35' height='35'/%3E%3Crect x='85' y='165' width='25' height='25'/%3E%3Crect x='90' y='170' width='15' height='15'/%3E%3Crect x='95' y='175' width='5' height='5'/%3E%3Crect x='120' y='160' width='75' height='75'/%3E%3Crect x='125' y='165' width='65' height='65'/%3E%3Crect x='130' y='170' width='55' height='55'/%3E%3Crect x='135' y='175' width='45' height='45'/%3E%3Crect x='140' y='180' width='35' height='35'/%3E%3Crect x='145' y='185' width='25' height='25'/%3E%3Crect x='150' y='190' width='15' height='15'/%3E%3Crect x='155' y='195' width='5' height='5'/%3E%3Crect x='160' y='40' width='75' height='75'/%3E%3Crect x='165' y='45' width='65' height='65'/%3E%3Crect x='170' y='50' width='55' height='55'/%3E%3Crect x='175' y='55' width='45' height='45'/%3E%3Crect x='180' y='60' width='35' height='35'/%3E%3Crect x='185' y='65' width='25' height='25'/%3E%3Crect x='190' y='70' width='15' height='15'/%3E%3Crect x='195' y='75' width='5' height='5'/%3E%3Crect x='160' y='120' width='35' height='35'/%3E%3Crect x='165' y='125' width='25' height='25'/%3E%3Crect x='170' y='130' width='15' height='15'/%3E%3Crect x='175' y='135' width='5' height='5'/%3E%3Crect x='200' y='200' width='35' height='35'/%3E%3Crect x='200' width='35' height='35'/%3E%3Crect y='200' width='35' height='35'/%3E%3C/g%3E%3C/svg%3E");`,
    width:'100%',
  },
  boxstyle:{
      padding :'70px',
      color:'white',
  },
  imgbox:{
      marginTop:'50px',
      display:'flex',
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent:'space-between'
  },
});
const Body1 = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
              <Box className={classes.boxstyle}>
              <Typography style={{fontWeight:'bold'}} variant="h4" >FREE READING AND WRITING APP</Typography>
              <Typography variant="h6" style={{marginTop:'5px'}} >Sweek is a global community for reading and writing stories. Short stories, poetry, fantasy, science fiction, fanfiction, or classic books - you will find thousands of them on Sweek.</Typography>
              <div className={classes.imgbox}>
              <div style={{display:'flex',flexDirection:'column', }}>
              <img style={{height:'80vh'}} src="https://sweek.com/assets/img/ENG%20-%20Read.84ea565e99b62da69b6da9a6eb3dcf93.png" />
              <Typography variant="h5" style={{marginLeft:'auto',marginRight:'auto',fontWeight:'bold'}} >Read</Typography>
              <Typography variant="subtitle2"style={{marginLeft:'auto',marginRight:'auto', width:'300px'}} >Whether you are commuting or at home, whether you are into short stories or addictive serials: you can find them all on Sweek. Your reading progress is always saved, and you’ll never miss an update!</Typography>
              </div>
              <div style={{display:'flex',flexDirection:'column', }}>
              <img style={{height:'80vh'}} src="https://sweek.com/assets/img/ENG%20-%20Write.7a77830d64b1b2bdd82f46bdf476d4fa.png"/>
              <Typography variant="h5" style={{marginLeft:'auto',marginRight:'auto',fontWeight:'bold'}} >Write</Typography>
              <Typography variant="subtitle2"style={{marginLeft:'auto',marginRight:'auto', width:'300px'}} >Write and publish your stories in just a few steps, wherever you are. Join Sweek writing competitions to win cash prizes or get your book published by a well-known publisher. Build your fan base and get feedback from your readers.</Typography>
              </div>
              <div style={{display:'flex',flexDirection:'column', }}>
              <img style={{height:'80vh'}} src="https://sweek.com/assets/img/ENG%20-%20Share.15d4b5106a372c5ba62eaf4d35284339.png"/>
              <Typography variant="h5" style={{marginLeft:'auto',marginRight:'auto',fontWeight:'bold'}} >Connect</Typography>
              <Typography variant="subtitle2"style={{marginLeft:'auto',marginRight:'auto', width:'300px'}} >Write and publish your stories in just a few steps, wherever you are. Join Sweek writing competitions to win cash prizes or get your book published by a well-known publisher. Build your fan base and get feedback from your readers.</Typography>
              </div>
              </div>
              </Box> 

        </div>

     );
}
 
export default Body1;