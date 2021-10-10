import React from "react";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'

import { makeStyles } from '@material-ui/core/styles';

import dryingriver from './Images/dryriogrande.jpg'
import badwater from './Images/badwaterC.jpg'
import waterwalk from './Images/waterwalkC.jpg'
import coalpower from './Images/coalpowerC.jpg'
import useWindowDimensions from './WindowSize';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
    cause: {
        backgroundColor: [theme.palette.secondary.main],
        [theme.breakpoints.up(1190)]: {
            padding: theme.spacing(2),
            textAlign: 'left',
            margin:'50px',
            marginLeft:'25px',
            marginRight:'25px',
            borderRadius: 400/ 2
        },
        [theme.breakpoints.down(1190)]: {
            padding: theme.spacing(2),
            textAlign: 'left',
            margin:'50px',
            marginLeft:'10px',
            marginRight:'10px',
            borderRadius: 400/ 2
        }
    },
    causeMobile:{
        padding: theme.spacing(2),
        backgroundColor:'gold',
        textAlign: 'center',
        margin:'50px',
        borderRadius: 400/ 2,
        [theme.breakpoints.down(750)]: {
            borderRadius: 75,
            margin:25,
            padding:10
        },
        
    },
    causeDiv: {        
        textAlign: 'center',
        padding: '75px',
        paddingTop: '12px',
        paddingBottom: '0px',  
        [theme.breakpoints.down(750)]: {
            padding:10
        },
    },
    causeText: {
        fontSize:30,    
        marginBottom:'20px',
        [theme.breakpoints.down(900)]: {
            fontSize:19,  
        },

    },
    causeSubtitle: {
        fontSize:22,    
    }
}));

function WeDoItBetter() {
  const classes = useStyles();
  const { height, width } = useWindowDimensions();

  if (width >= 1280){
    return (
        <div className={classes.root} id="WhyChange" >
                    <div style={{padding:'40px'}}>  
                        <Typography variant='h3' style={{textAlign:'center', marginBottom:25}}>                 
                            <b><i>
                            ...but traditional washing machines are not equipped for such a challenge.
                            </i></b>
                        </Typography>
                    </div>
            <Paper className={classes.cause} elevation={5} style={{marginRight:'200px', paddingTop:0, marginTop:0}}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <img src={dryingriver} style={{width:'250px', height:'250px', borderRadius:400/2, float:'left'}}
                        alt="dried river"/>
                    </Grid>
                    <Grid item xs={8}>
                        <div className={classes.causeDiv}>
                            <Typography variant='h3' className={classes.causeText}>
                                By 2025 half the world’s population will be living in a water stressed area.
                            </Typography>
                            <Typography variant='h5' className={classes.causeSubtitle}>
                                But the average household washing machine uses 5,605 gallons of water each year.
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.cause} elevation={5} style={{marginLeft:'200px'}}>
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
                        <img src={badwater} style={{width:'250px', height:'250px', borderRadius:400/2, float:'right'}}
                        alt="unclean drinking water"/>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.cause} elevation={5} style={{marginRight:'200px'}}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <img src={waterwalk} style={{width:'250px', height:'250px', borderRadius:400/2, float:'left'}}
                        alt="A long walk for water"/>
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
            <Paper className={classes.cause} elevation={5} style={{marginLeft:'200px'}}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <div className={classes.causeDiv} style={{paddingRight:'60px', paddingLeft:'60px'}}>
                            <Typography variant='h4' className={classes.causeText} >
                                Sustainable energy goals are not being met, while 11% of the world are without electricity.
                            </Typography>
                            <Typography variant='subtitle2' className={classes.causeSubtitle}>
                                But a household washing machine and dryer on average consume 1,842 pounds of coal annually.
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={coalpower} style={{width:'250px', height:'250px', borderRadius:400/2, float:'right'}}
                        alt="Polution from Factories"/>
                    </Grid>
                </Grid>
            </Paper>
        </div>
      );
  }
  else{
      return (
          <div className={classes.root} id="WhyChange"> 
            <Paper className={classes.causeMobile} elevation={5} >
                <div className={classes.causeDiv}>
                    <Typography variant='h4' className={classes.causeText}>
                        By 2025 <b>half the world’s population </b>will be living in a water stressed area.
                    </Typography>
                    <div>
                    <img src={dryingriver} style={{width:'200px', height:'auto', borderRadius:600/2}}
                        alt="dried river"/>
                </div>
                    <Typography variant='subtitle2' className={classes.causeSubtitle}>
                        But the average household washing machine uses 5,605 gallons of water each year.
                    </Typography>
                </div>
                        
            </Paper>
            <Paper className={classes.causeMobile} elevation={5} >
                <div className={classes.causeDiv}>
                    <Typography variant='h4' className={classes.causeText}>
                        One out of every three people do not have access to clean drinking water.
                    </Typography>
                    <div>
                        <img src={badwater} style={{width:'200px', height:'auto', borderRadius:600/2}}
                            alt="dried river"/>
                    </div>
                    <Typography variant='subtitle2' className={classes.causeSubtitle}>
                        How are they going to wash their clothes with dirty water?
                    </Typography>
                </div>
                        
            </Paper>
            <Paper className={classes.causeMobile} elevation={5} >
                <div className={classes.causeDiv}>
                    <Typography variant='h4' className={classes.causeText}>
                        One in ten people do not have a reliable source of water close to home.
                    </Typography>
                    <div>
                        <img src={waterwalk} style={{width:'200px', height:'auto', borderRadius:600/2}}
                            alt="dried river"/>
                    </div>
                    <Typography variant='subtitle2' className={classes.causeSubtitle}>
                        But a washing machine requires a continuous source of water to clean clothes.
                    </Typography>
                </div>
                        
            </Paper>
            <Paper className={classes.causeMobile} elevation={5} >
                <div className={classes.causeDiv}>
                    <Typography variant='h4' className={classes.causeText} >
                        Sustainable energy goals are not being met, while 11% of the world are without electricity.
                    </Typography>
                    <div>
                        <img src={coalpower} style={{width:'200px', height:'auto', borderRadius:600/2}}
                            alt="dried river"/>
                    </div>
                    <Typography variant='subtitle2' className={classes.causeSubtitle}>
                        But a household washing machine and dryer on average consume 1,842 pounds of coal annually.
                    </Typography>
                </div>
                        
            </Paper>
          </div>
      )
  }
  
}

export default WeDoItBetter;