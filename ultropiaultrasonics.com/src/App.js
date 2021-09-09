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

import useWindowDimensions from './Components/WindowSize';


import "./static/App.css";

const custTheme = createTheme({
  palette: {
    primary: grey,
    secondary: amber
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1190,
      xl: 1920,
    },
  },

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
    [theme.breakpoints.down(1190)]: {
      position: 'absolute', left: '50%', top: '25%',
      transform: 'translate(-50%, -25%)'
    },
    [theme.breakpoints.up(1190)]: {
      position: 'absolute', left: '60%', top: '25%',
      transform: 'translate(-55%, -25%)'
    },

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
  const { height, width } = useWindowDimensions();

  return (
    <ThemeProvider theme={custTheme}>
      <div style={{textAlign:'right'}}>
        {width}
      </div>
      <div className={classes.root} id="Top">
        <img src={bgImg} alt="The ultropia prototype" style={{
          height: 'auto', 
          width:'100%', 
          maxWidth:'2200px',
          minWidth:'1600px',
          minHeight:'750px',
          backgroundColor:'black',
          float:'right',     
          }}/>
          <Grid container spacing={3} style={{minWidth:'750px'}}>
          
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