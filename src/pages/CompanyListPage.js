import React from 'react'
import { useSelector } from 'react-redux'
import _ from "lodash";

import AppBar from "../components/AppBar";
import BottomNav from "../components/BottomNav";
import { fetchCompanyList } from "../actions";

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';

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
    const { name, symbol } = e;
    return (
    <ListItem>
        <ListItemText 
            primary={symbol} 
            secondary={name} 
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
            <List className={classes.root}>
                {/* Hooks에서 selector를 가지고 redux에 있는 것 중 어떤 것을 props로 가져오면 된다 .*/}
                {/* {companies.map(e => <CompanyItem e={e}/>)} */}
                {_.map(symbolsList, e => <CompanyItem key={e.symbol} e={e}/>)}
            </List>
            <BottomNav/>
        </div>
    )
};
export default CompanyListPage; 