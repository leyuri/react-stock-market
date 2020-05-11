import React from 'react'

import AppBar from "../components/AppBar";
import BottomNav from "../components/BottomNav";

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const MainPage = () => {
    return (
        <div>
            <AppBar/>
            <Container maxWidth="sm">
                <br/>
                <Typography>
                    Welcome! 
                    This is stock market
                </Typography>
            </Container>
            <BottomNav/>
        </div>
    )
};
export default MainPage; 