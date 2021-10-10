import React from "react";

import Box from '@material-ui/core/Box'

import ProductIntroduction from './ProductIntroduction'
import Typography from '@material-ui/core/Typography';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';



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

    subtitle:{
      paddingTop:'50px',
      [theme.breakpoints.down(750)]: {
        fontSize:0,
      },
      [theme.breakpoints.up(750)]: {
        fontSize:60,
      },
    },
    superheading:{
      [theme.breakpoints.down(750)]: {
        fontSize:60,
      },
      [theme.breakpoints.up(750)]: {
        fontSize:120,
      },
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
        marginTop: '25px',
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

function Content() {
  const classes = useStyles();

  return (
    <div id="UltramaticIntro" style={{textAlign:'center'}}>

        <Box  className={classes.content}>        
            <Typography variant="h3" className={classes.subtitle}>
                <i>Introducing...</i>
            </Typography>      
            <Typography variant="h1" className={classes.superheading}>
                <div>The <b>Ultramatic</b></div>

            </Typography >
        <ProductIntroduction/>
        </Box>
  </div>
  );


}

export default Content;