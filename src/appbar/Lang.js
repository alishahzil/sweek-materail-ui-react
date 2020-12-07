import React,{useState} from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const options = [
  'None',
  'English',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];
const ITEM_HEIGHT = 48;
export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [language,setlanguage] = useState(0);
  const [show,setshow] = useState('English');
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    if(event.nativeEvent.target.outerText != ''){
    setshow(event.nativeEvent.target.innerText);
     console.log(event.target.value);
    }
    setAnchorEl(null);
  };
  return (
    <div >
      <Button style={{color:'white'}}
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {show}
        <ArrowDropDownIcon />
      </Button>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 10,
            width: '20ch',
          },
        }}
      >
        {options.map((option,index) => (
          <MenuItem key={option} selected={option === 'None'} value={index} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
