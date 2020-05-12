import React from 'react'

import AppBar from "../components/AppBar";
import BottomNav from "../components/BottomNav";
import Chart from "../components/Chart";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: "100px"
  
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

const MainPage = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar/>
            <Container className={classes.root}>
            <h2>Welcome to the stock market!</h2>
             <Chart/>

            <br></br>
            <Typography variant="body1" gutterBottom>
            This is stock market.
            </Typography>

            <Typography variant="body1" gutterBottom>
            You can check the company list and click to see the details. 
            </Typography>


            <Typography variant="body1" gutterBottom>
            Also, you can see the news for each company. Enjoy!
            </Typography>

            </Container>
            <BottomNav/>
        </div>
    )
};
export default MainPage; 