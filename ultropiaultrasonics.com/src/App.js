import React from "react";
import Content from "./Components/Content";
import EntryCard from "./Components/EntryCard"
import VertBar from "./Components/VertBar"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import grey from '@material-ui/core/colors/grey';
import amber from '@material-ui/core/colors/amber';
import AboutProduct from './Components/AboutProduct';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

import placeholder from './Components/Images/placeholder.jpg'

import Box from '@material-ui/core/Box'

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
    position: 'absolute', left: '50%', top: '30%',
    transform: 'translate(-50%, -30%)'
 }
}));

function App() { 
  const classes = useStyles();

  return (
    <ThemeProvider theme={custTheme}>
      <div className={classes.root}>
      <img className="mainImg" src={placeholder} alt="The ultropia prototype"/>
        <Grid container spacing={3}>
          <Grid item xs={3}>            
            <VertBar/>         
          </Grid>
          <Grid item xs={6}>
          
            <Container maxWidth="md" className={classes.overlay}>    
                  
              <EntryCard/>
              
            </Container>   
            
            <Content/>

          </Grid>
          <Grid item xs={3}>            
            
          </Grid>
        </Grid>
      </div>      
    </ThemeProvider>
      
  );
}

export default App;