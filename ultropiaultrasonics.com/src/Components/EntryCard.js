import React from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Logo from './Images/ultropia2.png'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1),

      },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
    },
    logostyle:{
        width:'100%', 
        alignSelf:'center', 
        padding:'25px',
        paddingLeft:'100px',
        paddingRight:'100px'
    }, 

}));

function EntryCard() {
    const classes = useStyles();

    return ( 
        <div className={classes.root}>


        
            <Paper style={{borderRadius:400/2, maxWidth:'1000px', alignSelf:'center'}}>
                <img src={Logo} className={classes.logostyle}/>
            </Paper>

        </div>

    );
  }
  
  export default EntryCard;
