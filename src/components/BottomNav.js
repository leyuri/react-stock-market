import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BusinessIcon from '@material-ui/icons/Business';
import HelpIcon from '@material-ui/icons/Help';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import { Link, useLocation } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    background: "#eee",
    width: "100%",
    position: "fixed",
    bottom: 0,
    "& .MuiBottomNavigationAction-root.Mui-selected": {
        color: "#622569"
    },
    "& .MuiBottomNavigationAction-root": {
        minWidth: 0
    }
  },
});
export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const location = useLocation();
  const [value, setValue] = React.useState(() =>{

    const path = location.pathname;
    //pathname은 URL의 경로 이름을 설정하거나 반환
    if (path === "/list") return 1;
    if (path === "/help") return 2;
    if (path === "/about") return 3;
    return 0; 
});

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
    <BottomNavigationAction 
        label="Home" 
        icon={<HomeIcon />} 
        component={Link}
        to="/"
    />
    <BottomNavigationAction 
        label="List" 
        icon={<BusinessIcon />} 
        component={Link}
        to="/list"
    />
    <BottomNavigationAction 
        label="Help" 
        icon={<HelpIcon />} 
        component={Link}
        to="/help"
    />
    <BottomNavigationAction 
        label="About" 
        icon={<InfoIcon />} 
        component={Link}
        to="/about"
    />
    </BottomNavigation>
  );
}