import React from "react";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'

import { makeStyles } from '@material-ui/core/styles';

import dryingriver from './Images/dryriogrande.jpg'
import badwater from './Images/badwaterC.jpg'
import waterwalk from './Images/waterwalkC.jpg'
import coalpower from './Images/coalpowerC.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
    cause: {
      padding: theme.spacing(2),
      textAlign: 'left',
      margin:'50px',
      marginLeft:'50px',
      marginRight:'50px',
      borderRadius: 400/ 2
    },
    causeDiv: {
        textAlign: 'center',
        padding: '75px',
        paddingTop: '12px',
        paddingBottom: '0px',  
    },
    causeText: {
        fontSize:27,    
        marginBottom:'20px'  
    },
    causeSubtitle: {
        fontSize:16,    
    }
}));

function WeDoItBetter() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="WhyChange">
        <Paper className={classes.cause} elevation={5} style={{marginLeft:'25px'}}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <img src={dryingriver} style={{width:'200px', height:'200px', borderRadius:400/2, float:'left'}}/>
                </Grid>
                <Grid item xs={8}>
                    <div className={classes.causeDiv}>
                        <Typography variant='h4' className={classes.causeText}>
                            By 2025 half the world’s population will be living in a water stressed area.
                        </Typography>
                        <Typography variant='subtitle2' className={classes.causeSubtitle}>
                            But the average household washing machine uses 5,605 gallons of water each year.
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </Paper>
        <Paper className={classes.cause} elevation={5} style={{marginRight:'25px'}}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <div className={classes.causeDiv}>
                        <Typography variant='h4' className={classes.causeText}>
                            One out of every three people do not have access to clean drinking water.
                        </Typography>
                        <Typography variant='subtitle2' className={classes.causeSubtitle}>
                            How are they going to wash their clothes with dirty water?
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <img src={badwater} style={{width:'200px', height:'200px', borderRadius:400/2, float:'right'}}/>
                </Grid>
            </Grid>
        </Paper>
        <Paper className={classes.cause} elevation={5} style={{marginLeft:'25px'}}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <img src={waterwalk} style={{width:'200px', height:'200px', borderRadius:400/2, float:'left'}}/>
                </Grid>
                <Grid item xs={8}>
                    <div className={classes.causeDiv}>
                        <Typography variant='h4' className={classes.causeText}>
                            One in ten people do not have a reliable source of water close to home.
                        </Typography>
                        <Typography variant='subtitle2' className={classes.causeSubtitle}>
                            But a washing machine requires a continuous source of water to clean clothes.
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </Paper>
        <Paper className={classes.cause} elevation={5} style={{marginRight:'25px'}}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <div className={classes.causeDiv} style={{paddingRight:'60px', paddingLeft:'60px'}}>
                        <Typography variant='h4' className={classes.causeText} style={{fontSize:26}}>
                            Sustainable energy goals are not being met, while 11% of the world are without electricity.
                        </Typography>
                        <Typography variant='subtitle2' className={classes.causeSubtitle}>
                            But a household washing machine and dryer on average consume 1,842 pounds of coal annually.
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <img src={coalpower} style={{width:'200px', height:'200px', borderRadius:400/2, float:'right'}}/>
                </Grid>
            </Grid>
        </Paper>
    </div>
  );
}

export default WeDoItBetter;