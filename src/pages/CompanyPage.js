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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';


import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      "& .makeStyles-paper-3": {
        marginBottom: '20px'
      },
      marginBottom: "100px"
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
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
    info: {
        width: '100%',
        maxWidth: '100%',
        backgroundColor: theme.palette.background.paper,
      },
      table: {
        minWidth: 650,
      },
  }));



const CompanyPage = () => {

    const classes = useStyles();
    const { symbol } = useParams();
    console.log("symnbol:", symbol);
    // stores 중에 내가 원하는 스토어를 가져올 수 있어야 한다. 
    const company = useSelector(state => state.symbolsList[symbol])

    const [posts, setPosts] = useState([])

    const [quote, setQuote] = useState([])

    useEffect(() => {
      fetch(`https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=2020-04-30&to=2020-05-01&token=bqbdflvrh5r8t7qng0fg`)
        .then(response => response.json())
        .then(data => {
          setPosts(data) // new
        })
    }, [symbol])


    useEffect(() => {
        fetch(`https://financialmodelingprep.com/api/v3/quote/${symbol}`)
          .then(response => response.json())
          .then(data => {
            setQuote(data) // new
          })
      }, [symbol])


    return (
        <div className={classes.root}>
            <AppBar/>
                <Container>
                {/* <Typography variant="h4" gutterBottom>
                    {symbol}'s Detail
                </Typography> */}
                <div>
                    <h2>
                    {symbol}'s Detail
                    </h2>
                </div>
                {quote.map(item => (
                <div className={classes.info}>
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItem button>

                        <ListItemText 
                        primary={`name: ${item.name}`}
                        />
                        </ListItem>
                        <ListItem button>

                        <ListItemText 
                        primary={`price: ${item.price}`}
                        />
                        </ListItem>
                        <ListItem button>

                        <ListItemText 
                        primary={`changesPercentage: ${item.changesPercentage}`}
                        />
                        </ListItem>
                        <ListItem button>

                        <ListItemText 
                        primary={`change: ${item.change}`}
                        />
                        </ListItem>
                        <ListItem button>

                        <ListItemText 
                        primary={`marketCap: ${item.marketCap}`}
                        />
                        </ListItem>
                        <ListItem button>

                        <ListItemText 
                        primary={`priceAvg50: ${item.priceAvg50}`}
                        />
                        </ListItem>
                        <ListItem button>

                        <ListItemText 
                        primary={`priceAvg200: ${item.priceAvg200}`}
                        />
                        </ListItem>
                        <ListItem button>

                        <ListItemText 
                        primary={`volume: ${item.volume}`}
                        />
                        </ListItem>
                        <ListItem button>

                        <ListItemText 
                        primary={`avgVolume: ${item.avgVolume}`}
                        />
                        </ListItem>
                        <ListItem button>

                        <ListItemText 
                        primary={`exhange: ${item.exhange}`}
                        />
                        </ListItem>
                        <ListItem button>

                        <ListItemText 
                        primary={`open: ${item.open}`}
                        />
                        </ListItem>
                        <ListItem button>

                        <ListItemText 
                        primary={`previousClose: ${item.previousClose}`}
                        />
                        </ListItem>
                    </List>
                    <Divider />
                    <List component="nav" aria-label="secondary mailbox folders">
                        <ListItem button>
                        <ListItemIcon>
                            <ArrowDownwardIcon />
                        </ListItemIcon>
                        <ListItemText 
                        primary={`dayLow: ${item.dayLow}`}
                    
                        />
                        </ListItem>
                        <ListItem button>
                        <ListItemIcon>
                            <ArrowUpwardIcon />
                        </ListItemIcon>
                        <ListItemText 
                        primary={`dayHigh: ${item.dayHigh}`}
                        />
                        </ListItem>
                        <ListItem button>
                        <ListItemIcon>
                            <TrendingDownIcon />
                        </ListItemIcon>
                        <ListItemText 
                        primary={`yearLow: ${item.yearLow}`}
                        />
                        </ListItem>
                        <ListItem button>
                        <ListItemIcon>
                            <TrendingUpIcon />
                        </ListItemIcon>
                        <ListItemText 
                        primary={`yearHigh: ${item.yearHigh}`}
                        />
                        </ListItem>

                    </List>
                </div>
                ))}  

                <br></br>

                <div>
                    <h2>
                    {symbol}'s News
                    </h2>
                </div>


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