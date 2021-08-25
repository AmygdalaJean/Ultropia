import React from "react";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

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
    },
    callText: {
      padding:'80px',
      paddingTop:'0px',
      paddingBottom:'20px'
    }
}));

function Content() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="WeDoItBetter">
        <Paper className={classes.paper} elevation={5}>
            <Typography variant='h5' style={{textAlign:'center'}}>
                <div style={{padding:'40px'}}>
                  <Typography variant='h4'>
                    <i><b>The Ultramatic is the Answer.</b></i>
                  </Typography>
                </div>
                <div className={classes.callText}>
                  The future demands a better way to clean our clothes. Traditional washing machines 
                  are inefficient and outdated, they properly solve neither the problems 
                  of today, or tomorrow. 
                </div>
                <div className={classes.callText}>
                  <b>Ultrasonics is the answer, and the Ultramatic is its 
                  vehicle</b>. Using less water, less energy, less space. Easier to 
                  travel with, to use, to rely on, the Ultramatic is the solution that 
                  we need. 
                </div>
                <div className={classes.callText}>
                  
                </div>
            </Typography>
        </Paper>
    </div>
  );
}

export default Content;