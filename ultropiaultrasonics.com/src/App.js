import React from "react";
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box'
import EntryCard from "./Components/EntryCard"
import VertBar from "./Components/VertBar"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import grey from '@material-ui/core/colors/grey';
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
    secondary: {
      light: '#ffeb3b',
      main: '#ffc107',
      dark: '#dead4e',
      contrastText: '#000',
    },
  },
})

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  backgroundimg:{
    height: 'auto', 
    width:'100%', 
    maxWidth:'2200px',
    minWidth:'1000px',
    float:'right',  
  },


  background:{
    [theme.breakpoints.down(1190)]: {
      width:'1190px', 
      height:'auto', 
      backgroundColor:'black', 
      float:'right'
    },
    [theme.breakpoints.down(750)]: {
      width:'100%', 
      height:'auto', 
      backgroundColor:'black', 
      float:'left'
    },
    [theme.breakpoints.up(1190)]: {
      width:'3840px', 
      height:'auto', 
      backgroundColor:'black', 
      float:'right',
      minWidth:'750px'
    },

  },


  content: {
    [theme.breakpoints.up(750)]: {
      width: '100%',
      marginTop: '100px',
      padding: '0px',
      borderRadius: 80/ 2
    },
    [theme.breakpoints.down(750)]: {
      width: '100%',
      marginTop: '25px',
      padding: '0px',
      borderRadius: 80/ 2
    },

  },
}));

function App() { 
  const classes = useStyles();
  const { height, width } = useWindowDimensions();

  return (
      <div style={{height: '100%', backgroundColor: [custTheme.palette.secondary.main]}}>
      <ThemeProvider theme={custTheme} >
        <VertBar/>         
        <div className={classes.root} id="Top">
          <Paper className={classes.background}>
            <img src={bgImg} alt="The ultropia prototype" className={classes.backgroundimg}/>
          </Paper>
            <Grid container spacing={3} style={{minWidth:'360px'}}>
       
                  
              <EntryCard/>

              
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
    </div>
        
  );
}

export default App;