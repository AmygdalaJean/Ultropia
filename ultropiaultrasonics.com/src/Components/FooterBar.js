import React from "react";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';

import GetInTouch from "./GetInTouch";
import useWindowDimensions from './WindowSize';

import "./../static/App.css";


  
  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      marginBottom: '0px',
      margin:'0px',
      borderRadius: 40/ 2,
      [theme.breakpoints.down(750)]: {
        margin:0,
        padding:10
    },
    },
    superheading: {
        textAlign: 'center',
        padding: '35px',
        [theme.breakpoints.down(750)]: {
            padding:10
        },
    },
    boxSpacing:{
        paddingLeft:'65px', 
        paddingRight:'65px', 
        textAlign:'center',

    },

  }));


function FooterBar() {
  const classes = useStyles();
  const { height, width } = useWindowDimensions();
  
  if (width >= 750){
    return (
        <div className={classes.root} style={{}}>
            
            <Paper className={classes.paper} elevation={5} style={{paddingTop:65, paddingBottom:65}}>
                <div className={classes.boxSpacing}>
                    <Typography variant='h4' style={{textAlign:'center'}}>
                        <div>Questions? Comments?</div>
                        <div>Want to get in touch?</div>
                    </Typography>
                    <Grid container spacing={4} style={{paddingTop:'25px'}}>
                        <Grid item xs={6} style={{textAlign:'left'}}>
                            <Paper elevation={5} className={classes.paper}>
                                <Typography variant='h6' style={{textAlign:'center', paddingBottom:'25px'}}>
                                    Find more information about us here!
                                </Typography>
                                <Button  disableElevation fullWidth color='secondary' variant='contained' href='https://www.linkedin.com/company/ultropia/' 
                                >
                                    About us
                                </Button>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} style={{textAlign:'right'}}>
                            <Paper elevation={5} className={classes.paper}>
                                <Typography variant='h6' style={{textAlign:'center', paddingBottom:'25px'}}>
                                    Leave us a message and your email here!
                                </Typography>
                                <GetInTouch/>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </Paper>
    
            
        </div>
      );
  }
  else {
      return (
        <div>
            <Paper className={classes.paper} elevation={5} style={{paddingTop:65, paddingBottom:65}}>
                <div className={classes.boxSpacing}>
                    <Typography variant='h4' style={{textAlign:'center'}}>
                        <div>Questions? Comments?</div>
                        <div>Want to get in touch?</div>
                    </Typography>
                    
                            <Paper elevation={5} className={classes.paper} style={{marginTop:65}}>
                                <Typography variant='h6' style={{textAlign:'center', paddingBottom:'25px'}}>
                                    Find more information about us here!
                                </Typography>
                                <Button  disableElevation fullWidth color='secondary' variant='contained' href='https://www.linkedin.com/company/ultropia/' 
                                >
                                    About us
                                </Button>
                            </Paper>
                        
                            <Paper elevation={5} className={classes.paper} style={{marginTop:65}}>
                                <Typography variant='h6' style={{textAlign:'center', paddingBottom:'25px'}}>
                                    Leave us a message and your email here!
                                </Typography>
                                <GetInTouch/>
                            </Paper>
  
                </div>
            </Paper>
        </div>
      )
  }
  
}

export default FooterBar;