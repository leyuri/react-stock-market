import React from 'react'
import {
    Link,
} from "react-router-dom";
import { useSelector } from 'react-redux'
import _ from "lodash";

import AppBar from "../components/AppBar";
import BottomNav from "../components/BottomNav";


import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';

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
}));

// props으로 받는 것
const CompanyItem = ({e}) => {
    const { name, symbol, price, exchange } = e;
    
    return (
    <ListItem
        button = {true}
        component = {Link}
        to={`/companies/${e.symbol}`}
    >
        <ListItemText 
            primary={name} 
            secondary={`symbol: ${symbol}, current price: ${price}`}
        />
    </ListItem>
    )
}

const CompanyListPage = () => {
    const classes = useStyles();

    
    const symbolsList = useSelector(state => state.symbolsList)
    // useSelector hook을 통하여 redux store의 state에 접근할 수 있다. 
    // companies에 접근!

    return (
        <div>
            <AppBar/>
            <Container>
            <div>
                    <h2>
                    Company List
                    </h2>
                </div>
            <List className={classes.root}>
                {/* Hooks에서 selector를 가지고 redux에 있는 것 중 어떤 것을 props로 가져오면 된다 .*/}
                {/* {companies.map(e => <CompanyItem e={e}/>)} */}
                {_.map(symbolsList, e => <CompanyItem key={e.symbol} e={e}/>)}
            </List>
            </Container>

            <BottomNav/>
        </div>
    )
};
export default CompanyListPage; 