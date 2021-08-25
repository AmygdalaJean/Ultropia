import React from "react";
import { Image } from 'react-native'
import Box from '@material-ui/core/Box'
import EntryCard from "./Components/EntryCard"
import VertBar from "./Components/VertBar"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import grey from '@material-ui/core/colors/grey';
import amber from '@material-ui/core/colors/amber';
import AboutProduct from './Components/AboutProduct';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

import bgImg from './Components/Images/bgImg1.png'

import EnviroEffects from './Components/EnviroEffects'
import FooterBar from './Components/FooterBar'


import "./static/App.css";

const custTheme = createTheme({
  palette: {
    primary: grey,
    secondary: amber
  }
})

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  overlay: {
    position: 'absolute', left: '50%', top: '25%',
    transform: 'translate(-60%, -25%)'
 },
  content: {
    width: '100%',
    backgroundColor: 'gold',
    marginTop: '100px',
    padding: '25px',
    borderRadius: 80/ 2
  },
}));

function App() { 
  const classes = useStyles();

  return (
    <ThemeProvider theme={custTheme}>
      <div className={classes.root} id="Top">
        <img src={bgImg} alt="The ultropia prototype" style={{
          height: 'auto', 
          width:'100%', 
          maxWidth:'2200px',
          backgroundColor:'black',
          float:'right',     
          }}/>
          <Grid container spacing={3}>
          
            <VertBar/>         
          
            <Container maxWidth="md" className={classes.overlay}>    
                  
              <EntryCard/>
              
            </Container>   
            
            <Container maxWidth="md" >    
                  
            <div >
              <div id="UltramaticIntro">
                <Box  className={classes.content}>              
                  <AboutProduct />
                </Box>
              </div>
              
              <div style={{paddingTop: '0px'}}>
                <Box  className={classes.content}>              
                  <EnviroEffects/>
                </Box> 
              </div>   
            


            <div style={{paddingTop: '0px', marginBottom:'100px'}}>
                <Box  className={classes.content}>              
                <FooterBar/>
                </Box> 
              </div>   
            </div>

            
                  
            </Container>       
        </Grid>
      </div>      
    </ThemeProvider>
      
  );
}

export default App;