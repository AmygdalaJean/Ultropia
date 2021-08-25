import React from "react";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ReactPlayer from "react-player"

import "./../static/App.css";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
    },
    superheading: {
        textAlign: 'center',
        padding: '150px',
        paddingTop: '35px',
        paddingBottom: '35px',
    },
    subHeading: {
        textAlign: 'center',
        padding: '150px',
        paddingTop: '50px',
        paddingBottom: '50px',
    }
}));

function HumanRight() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="WhatWeNeed">
        <Paper className={classes.paper} elevation={5} style={{borderRadius:20}}>

            <Typography variant="h3" className={classes.superheading}>
                <div>Washing Clothes Should Be a <b>Human Right</b> </div>
            </Typography>

            <div style={{margin:'75px',  paddingTop:'25px', marginTop:'25px', marginBottom:'0px'}}>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=6sqnptxlCcw"
                    width='100%'
                    controls='true'
                />
            </div>

            <Typography variant="h5" className={classes.subHeading}>
                <div>
                    <b>
                        ...but the traditional washing machines is not equipped 
                        for such a challenge.
                    </b>
                </div>
            </Typography >

        </Paper>


    </div>
  );
}

export default HumanRight;