import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BusinessIcon from '@material-ui/icons/Business';
import HelpIcon from '@material-ui/icons/Help';
import InfoIcon from '@material-ui/icons/Info';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    background: "#eee",
    width: "100%",
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
  const [value, setValue] = React.useState(0);

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
        label="Map" 
        icon={<ShowChartIcon />} 
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