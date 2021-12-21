import React from "react";
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box'
import EntryCard from "./Components/EntryCard"
import VertBar from "./Components/VertBar"
import Container from '@material-ui/core/Container';
import ProductValue from './Components/ProductValue'
import Science from './Components/Science2';
import VideoDemos from './Components/VideoDemos';
import grey from '@material-ui/core/colors/grey';
import ExplainProduct from "./Components/ExplainProduct";
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import HumanRight from "./Components/HumanRight";

import bgImg from './Components/Images/bgImg1.png'

import WeDoItBetter from "./Components/WeDoItBetter";

import BestOption from "./Components/BestOption";
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
    maxWidth:'2000px',
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
      float:'left',
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
  backgroundGoldFill: {
    backgroundColor: [custTheme.palette.secondary.main],

    // [theme.breakpoints.up(750)]: {
      
    //   width: '100%',
    //   marginTop: '100px',
    //   padding: '25px',
    //   borderRadius: 80/ 2
    // },
    // [theme.breakpoints.down(750)]: {
      
    //   width: '100%',
    //   marginTop: '25px',
    //   padding: '0px',
    //   borderRadius: 80/ 2
    // },

  },

}));

function App() { 
  const classes = useStyles();
  const { height, width } = useWindowDimensions();

  return (
      <div  id="Top">
        {width}
      <ThemeProvider theme={custTheme} >
        
          <Paper className={classes.background}>
            <img src={bgImg} alt="The ultropia prototype" className={classes.backgroundimg}/>
          </Paper>
            
       
                  
              <EntryCard/>

                <div style={{paddingTop:50}}>
                  <ExplainProduct/>
                </div>



              <Science/>    
              

                
              <VideoDemos/>

              
              <HumanRight />
               
              <div  style={{padding:5, marginTop:0}}>
 
                               
                <WeDoItBetter />             

              </div>

              <BestOption/>
  
              <div style={{paddingBottom:50, marginTop:25,  backgroundColor:'#ffc107'}}></div>

      </ThemeProvider>
    </div>
        
  );
}

export default App;