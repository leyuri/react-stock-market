import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BusinessIcon from '@material-ui/icons/Business';
import HelpIcon from '@material-ui/icons/Help';
import InfoIcon from '@material-ui/icons/Info';
import ShowChartIcon from '@material-ui/icons/ShowChart';

const useStyles = makeStyles({
  root: {
    background: "#eee",
    width: "100%",
    color: "#622569",
    "& .MuiBottomNavigationAction-root.Mui-selected": {
        color: "#622569"
    }
    // MuiBottomNavigationAction: {
    //     color: "#e06377",
    //     selected: {
    //         color: "#c83349"
    //     }
    // }

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
      <BottomNavigationAction label="Main" icon={<ShowChartIcon />} />
      <BottomNavigationAction label="List" icon={<BusinessIcon />} />
      <BottomNavigationAction label="Help" icon={<HelpIcon />} />
      <BottomNavigationAction label="About" icon={<InfoIcon />} />
    </BottomNavigation>
  );
}