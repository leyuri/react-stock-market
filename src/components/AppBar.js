import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShowChartIcon from '@material-ui/icons/ShowChart';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  MuiAppBar: {
    backgroundColor: "#5b9aa0"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="relative" className={classes.MuiAppBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <ShowChartIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Stock Market
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}