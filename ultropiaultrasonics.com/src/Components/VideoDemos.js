import React from "react";
import Grid from '@material-ui/core/Grid';
import ReactPlayer from "react-player"
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";

import Header from "./Header";

import "./../static/App.css";

import { makeStyles } from '@material-ui/core/styles';
import useWindowDimensions from './WindowSize';

const useStyles = makeStyles((theme) => ({
    heading:{
        paddingTop:5,
        paddingBottom:0,
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
    textItem:{
        fontSize:20,
        [theme.breakpoints.down(750)]:{
            fontSize:15
        }
    },

    tableItem: {
        padding: '85px',
        textAlign: 'center',
    },
    videoHeading: {
        padding:'20px',
        textAlign: 'center',
        [theme.breakpoints.down(750)]: {
            paddingTop:'50px',
        },
    },
    img: {
        width: '100%',
        maxWidth: '300px',
        height: 'auto',
        alignSelf: 'center',
    },

    videoHeader:{
        fontSize:15,
        [theme.breakpoints.down(750)]: {
            fontSize:12,
        },
    }

}));

function Demos() {
  const classes = useStyles();
  const { height, width } = useWindowDimensions();
  
  if (width >= 750){

  
    return (
        <div  id="UltrasonicCleaning" >   
        <div  style={{textAlign:'center'}}>  
        <Header text = "ultrasonics in action" /> 
        <Container maxWidth="lg">
            <Grid container spacing={4} >
                <Grid item xs={4} > 
                    <div className={classes.videoHeading} >
                        <Typography variant="caption" className={classes.videoHeader}>
                            Large ultrasonic washer removes all rust and grease from an old engine.
                        </Typography>
                    </div>
                    <div>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=r-OqfliEzOQ"
                            width='100%'
                            controls='true'
                        />
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className={classes.videoHeading}>
                        <Typography variant="caption" className={classes.videoHeader}>
                            Demonstration of both the speed and precision of an ultrasonic washer. 
                        </Typography>
                    </div>
                    <div>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=ydrCPtU2atU"
                            width='100%'
                            controls='true'
                        />
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className={classes.videoHeading}>
                        <Typography variant="caption" className={classes.videoHeader}>
                            Filters quickly and thoroughly cleaned by an ultrasonic washer without damage.
                        </Typography>
                    </div>
                    <div>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=uJ3y7ZW1eS4"
                            width='100%'
                            controls='true'
                        />
                    </div>
                </Grid>
            </Grid>
            </Container>
            </div>  
        </div>

    );
  }
  else{
      return (
          <div  id="UltrasonicCleaning">
                     <Typography variant="overline" >
            <div className={classes.heading} >
                Ultrasonics in Action
            </div>
        </Typography>  
        <Container maxWidth="lg">
              <div className={classes.videoHeading} >
                        <Typography variant="caption" style={{fontSize:12}}>
                            Large ultrasonic washer removes all rust and grease from an old engine.
                        </Typography>
                    </div>
                    <div>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=r-OqfliEzOQ"
                            width='100%'
                            controls='true'
                        />
                    </div>
                    <div className={classes.videoHeading}>
                        <Typography variant="caption" style={{fontSize:12}}>
                            Demonstration of both the speed and precision of an ultrasonic washer. 
                        </Typography>
                    </div>
                    <div>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=ydrCPtU2atU"
                            width='100%'
                            controls='true'
                        />
                    </div>
                    <div className={classes.videoHeading}>
                        <Typography variant="caption" style={{fontSize:12}}>
                            Filters quickly and thoroughly cleaned by an ultrasonic washer without damage.
                        </Typography>
                    </div>
                    <div>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=uJ3y7ZW1eS4"
                            width='100%'
                            controls='true'
                        />
                        
                    </div>
                </Container>
          </div>
      )
  }
}

export default Demos;