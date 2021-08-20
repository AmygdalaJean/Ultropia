import React from "react";
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
    position: 'absolute', left: '65%', top: '25%',
    transform: 'translate(-65%, -25%)'
 },
  content: {
    width: '100%',
    backgroundColor: 'gold',
    marginTop: '100px',
    marginBottom: '100px',
    paddingBottom: '25px'
  },
}));

function App() { 
  const classes = useStyles();

  return (
    <ThemeProvider theme={custTheme}>
      <div className={classes.root}>
      <img className="mainImg" src={bgImg} alt="The ultropia prototype"/>
          <Grid container spacing={3}>
          
            <VertBar/>         

          
            <Container maxWidth="md" className={classes.overlay}>    
                  
              <EntryCard/>
              
            </Container>   
            
            <Container maxWidth="md" className={classes.content}>    
                  
            <div >
              <div>
                <Box m={0} pt={5}>              
                  <AboutProduct/>
                </Box>
              </div>
              
              <div style={{paddingTop: '100px'}}>
                <Box m={0} pt={5}>              
                  <EnviroEffects/>
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