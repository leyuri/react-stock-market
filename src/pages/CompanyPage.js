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


// request('https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2020-04-30&to=2020-05-01&token=bqbdflvrh5r8t7qng0fg', 

//     { json: true }, (err, res, body) => {
//   if (err) { return console.log(err); }
//   console.log(body.url);
//   console.log(body.explanation);
// });



// https://financialmodelingprep.com/api/v3/company/profile/AAPL

const CompanyPage = () => {

    const { symbol } = useParams();
    console.log("symnbol:", symbol);
    // stores 중에 내가 원하는 스토어를 가져올 수 있어야 한다. 
    const company = useSelector(state => state.symbolsList[symbol])

    const [posts, setPosts] = useState([])
    const [info, setinfo] = useState([])

    useEffect(() => {
      fetch(`https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=2020-04-30&to=2020-05-01&token=bqbdflvrh5r8t7qng0fg`)
    //   fetch(`${API_URL}news/${symbol}?token=${API_KEY}`)
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
        <div>
            <AppBar/>
                <Container>
                Detail: {company.symbol}
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

                <List component="nav" aria-label="main mailbox folders">
                {posts.map(item => (
                    <div key={item.title}>
                    <a href={item.url}>
                    <ListItem button onClick >
                        <ListItemText
                        primary={item.headline}
                        secondary={item.summary}
                        />
                    </ListItem>
                    <Divider/>
                    </a>
                    </div>
                ))}  
                </List>
                </Container>
            <BottomNav/>
        </div>

    )
};
export default CompanyPage; 