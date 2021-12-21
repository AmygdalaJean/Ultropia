import React from "react";
import Typography from '@material-ui/core/Typography';
import Header from "./Header";
import ReactPlayer from "react-player"
import { Container } from "@material-ui/core";

import "./../static/App.css";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    heading:{
        marginTop:50,
        marginBottom:15,
        paddingTop:10,
        fontSize:50,
        textAlign:'center', 
        backgroundColor:'#ffc107',
        [theme.breakpoints.down(950)]:{
            fontSize:35
        },
        [theme.breakpoints.down(750)]:{
            fontSize:25,
            paddingBottom:5,
        },
        [theme.breakpoints.down(550)]:{
            fontSize:18,
            paddingBottom:5,
        }
    },
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
      <div style={{paddingTop:75}}>
          <Header text = "Washing Clothes Should Be a" emphasis ="Human Right" />
        <Container maxWidth="lg" style={{paddingTop:35}}>
            <div className={classes.root} id="WhatWeNeed">
            
                    <div >
                        

                        <Container maxWidth='md'>
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=6sqnptxlCcw"
                                width='100%'
                                controls='true'
                            />
                        
                        {/* <div >
                        <Typography variant="h4" className={classes.subHeading} >
                            <div style={{width:'100%', }}>
                                <b >
                                    ...but traditional washing machines are not equipped 
                                    for such a challenge.
                                </b>
                            </div>
                        </Typography >
                        </div> */}
                        </Container>
                    </div>



            </div>
        </Container>
    </div>
  );
}

export default HumanRight;