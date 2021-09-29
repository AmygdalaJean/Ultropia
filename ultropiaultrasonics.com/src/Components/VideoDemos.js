import React from "react";
import Grid from '@material-ui/core/Grid';
import ReactPlayer from "react-player"
import Typography from "@material-ui/core/Typography";

import "./../static/App.css";

import { makeStyles } from '@material-ui/core/styles';
import useWindowDimensions from './WindowSize';

const useStyles = makeStyles((theme) => ({

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

}));

function Demos() {
  const classes = useStyles();
  const { height, width } = useWindowDimensions();
  
  if (width >= 750){

  
    return (
        <div style={{padding:'20px'}} id="UltrasonicCleaning" >       
            <Grid container spacing={4} >
                <Grid item xs={4} > 
                    <div className={classes.videoHeading} >
                        <Typography variant="caption" >
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
                        <Typography variant="caption">
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
                        <Typography variant="caption">
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

        </div>

    );
  }
  else{
      return (
          <div style={{padding:'20px'}} id="UltrasonicCleaning">
              <div className={classes.videoHeading} >
                        <Typography variant="caption" style={{fontSize:16}}>
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
                        <Typography variant="caption" style={{fontSize:16}}>
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
                        <Typography variant="caption" style={{fontSize:16}}>
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
          </div>
      )
  }
}

export default Demos;