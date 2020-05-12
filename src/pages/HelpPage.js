import React from 'react'
import AppBar from "../components/AppBar";
import BottomNav from "../components/BottomNav";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const HelpPage = () => {
    return (
        <div>
            <AppBar/>
            <Container>
              <div>
                  <h2>
                  Help
                  </h2>
              </div>
            <Typography>
            If you have a problem, email me.
              </Typography>
            </Container>
            <BottomNav/>
        </div>
    )
};
export default HelpPage; 