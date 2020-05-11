import React, { useEffect, useState } from "react"
import { API_URL, API_KEY } from '../actions';

import AppBar from "../components/AppBar";
import BottomNav from "../components/BottomNav";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      "& .makeStyles-paper-150": {
        marginBottom: '20px'
      },
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
      "& .makeStyles-paper-150": {
        marginBottom: '20px'
      },
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));

// const useStyles = makeStyles({
//     root: {
//       minWidth: 275,
//     },
//     bullet: {
//       display: 'inline-block',
//       margin: '0 2px',
//       transform: 'scale(0.8)',
//     },
//     title: {
//       fontSize: 14,
//     },
//     pos: {
//       marginBottom: 12,
//     },
//   });

// request('https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2020-04-30&to=2020-05-01&token=bqbdflvrh5r8t7qng0fg', 

//     { json: true }, (err, res, body) => {
//   if (err) { return console.log(err); }
//   console.log(body.url);
//   console.log(body.explanation);
// });



// https://financialmodelingprep.com/api/v3/company/profile/AAPL

const CompanyPage = () => {

    const classes = useStyles();


    const { symbol } = useParams();
    console.log("symnbol:", symbol);
    // stores 중에 내가 원하는 스토어를 가져올 수 있어야 한다. 
    const company = useSelector(state => state.symbolsList[symbol])

    const [posts, setPosts] = useState([])
    const [info, setinfo] = useState([])

    useEffect(() => {
      fetch(`https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=2020-04-30&to=2020-05-01&token=bqbdflvrh5r8t7qng0fg`)
        .then(response => response.json())
        .then(data => {
          setPosts(data) // new
        })
    }, [symbol])

    useEffect(() => {
        fetch(`https://financialmodelingprep.com/api/v3/company/profile/${symbol}`)
      //   fetch(`${API_URL}news/${symbol}?token=${API_KEY}`)
        //   .then(response => response.json())
        //   .then(data => {
        //     setinfo(data) // new
        //   })

          .then(response => {
            if (response.data) {
                setinfo(response.data.info)
            } else {
                alert('Failed to get info')
            }
        })
      }, [symbol])
    
    return (
        <div className={classes.root}>
            <AppBar/>
                <Container maxWidth="sm">
                <br></br>
                Detail: {company.symbol}
                <br></br>
                Price: {company.price}


                {info.map(item => (
                    <div key={item.symbol}>
                    <ListItem>
                        <ListItemText
                        primary={item.profile.industry}
                        secondary={item.profile.industry}
                        />
                    </ListItem>
                    </div>
                ))}  
                
                {posts.map(item => (
                    <div key={item.title}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src={item.image} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                            {item.headline}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                            {item.summary}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                            {item.source}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" style={{ cursor: 'pointer' }}>
                            <Button className={classes.btn} size="small">
                                <a href={item.url}>
                                More Detail
                                </a>
                            </Button>
                            </Typography>
                        </Grid>
                        </Grid>
                        <Grid item>
                        <Typography variant="subtitle1">{item.id}</Typography>
                        </Grid>
                    </Grid>
                    </Grid>
                </Paper>
                </div>
                ))}  
                </Container>
            <BottomNav/>
        </div>

    )
};
export default CompanyPage; 