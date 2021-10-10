import React from "react";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ReactPlayer from "react-player"
import { Container } from "@material-ui/core";

import "./../static/App.css";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        
      },
    paper: {
      padding: theme.spacing(2),

    },
    text:{
        margin:'75px',  
        paddingTop:'25px', 
        marginTop:'25px', 
        marginBottom:'0px',
        textAlign: 'center',
        [theme.breakpoints.down(750)]: {
            margin:'15px',
        }
    },

    subHeading: {
        textAlign: 'center',
        paddingTop: '50px',
        paddingBottom: '50px',

    }
}));

function HumanRight() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="WhatWeNeed">
        <Paper className={classes.paper} elevation={5} style={{borderRadius:20}}>
            <div className={classes.text}>
                <Typography variant="h3" style={{paddingBottom:25}}>
                    <div>Washing Clothes Should Be a <b>Human Right</b> </div>
                </Typography>

                <Container maxWidth='md'>
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=6sqnptxlCcw"
                        width='100%'
                        controls='true'
                    />
                
                <div >
                <Typography variant="h4" className={classes.subHeading} >
                    <div style={{width:'100%', }}>
                        <b >
                            ...but traditional washing machines are not equipped 
                            for such a challenge.
                        </b>
                    </div>
                </Typography >
                </div>
                </Container>
            </div>

        </Paper>


    </div>
  );
}

export default HumanRight;