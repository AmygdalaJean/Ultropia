import React from "react";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import Science from './Science'
import ProductValue from './ProductValue'
import ProductIntroduction from './ProductIntroduction'
import VideoDemos from './VideoDemos'

import "./../static/App.css";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      marginBottom: '0px',
      borderRadius: 40/ 2
    },
    superheading: {
        textAlign: 'center',
        paddingTop: '35px',
    }
}));

function Content() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Paper className={classes.paper} elevation={5}>

            <Typography variant="h3" className={classes.superheading}>
                <div>The <b>Ultramatic</b>;</div>
                <Typography variant="h4">
                    <i>Democratizing Laundry</i>
                </Typography>
            </Typography >

            <ProductIntroduction/>

        </Paper>
      
        

            <ProductValue/>

          <Paper className={classes.paper} elevation={5}>

            <Science/>    
            
            <VideoDemos/>

        </Paper>
    </div>
  );
}

export default Content;