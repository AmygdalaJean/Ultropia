import React from "react";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Container } from "@material-ui/core";

import "./../static/App.css";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop:25
      },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      marginBottom: '0px',
      borderRadius: 40/ 2,
      marginBottom:25
    },
    superheading: {
        textAlign: 'center',
        paddingTop: '35px',
    },
    callText: {
      padding:'80px',
      paddingTop:'0px',
      paddingBottom:'20px',
      [theme.breakpoints.down(750)]: {
        padding:20,
    },
    }
}));

function Content() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.root} id="WeDoItBetter">

            <Typography variant='h4' style={{textAlign:'center'}}>
                <div style={{padding:'0px'}}>
                  <Typography variant='h3'>
                    <i><b>The Ultramatic is the Answer.</b></i>
                  </Typography>
                </div>
                <div className={classes.callText}>
                  The future requires a better way to clean our clothes. Traditional washing machines 
                  are inefficient and outdated, and neither solve the problems 
                  of today, or tomorrow. 
                </div>
                <div className={classes.callText}>
                  Using less water, less energy, less space, being easier to use, transport, 
                  and to trust, <b>the Ultramatic is the solution that 
                  we need. </b>
              </div>
            </Typography>

    </Container>
  );
}

export default Content;