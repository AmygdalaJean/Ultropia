import React from "react";


import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

import { Typography } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
  heading:{
    paddingTop:10,
    fontSize:40,
    textAlign:'center', 
    backgroundColor:'#ffc107',
    [theme.breakpoints.down(950)]:{
        fontSize:30
    },
    [theme.breakpoints.down(750)]:{
        fontSize:25,
    },
    [theme.breakpoints.down(550)]:{
        fontSize:18,
    }
},

}));

function Header({text, emphasis}) { 
  const classes = useStyles();

  return (
    <div >
        <Typography variant="overline" >
            <div className={classes.heading} >
                {text} <b>{emphasis}</b>
            </div>
        </Typography> 
    </div>
        
  );
}

export default Header;