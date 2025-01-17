import React from 'react';

import AppBar from "../components/AppBar";
import BottomNav from "../components/BottomNav";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


// .makeStyles-paper-150
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    "& .MuiContainer-root": {
      marginTop: '20px'
    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function AboutPage() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.root}>
        <AppBar/>
            <Container>
            <div>
                  <h2>
                  About
                  </h2>
              </div>

            <Card>
                    <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                   
                    </Typography>
                    <Typography variant="h5" component="h2">
                    Lee{bull}Yu{bull}Ri
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    
                    </Typography>
                    <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
                </Card>


                </Container>
        <BottomNav/>
    </div>



  );
}
