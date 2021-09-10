import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper'

import "./../static/App.css";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
    },
    listItem: {
        paddingTop: '25px',
        paddingBottom: '25px',
        textAlign: 'justify',
    },
    horizontal: {
        marginTop: '15px',
        marginBottom: '15px',
    },
    tableItem: {
        [theme.breakpoints.down(800)]: {
            padding:'25px'
        },
        [theme.breakpoints.up(800)]: {
            padding: '65px',
            paddingTop: '50px',
            paddingBottom: '50px',

        },
        textAlign: 'center',
        fontSize:23
    },
    subheading: {
        paddingTop: '50px',
        textAlign:'center'
    },
    paper: {
        margin:'30px',
        height:'85%',
    }
}));

function Content() {
  const classes = useStyles();

  return (
    <div id="UltramaticValue">

        <Typography variant="h4" className={classes.subheading} >       
            {/* <b>What Does it Do?</b> */}
        </Typography>
           
          <Grid container spacing={2} >
            <Grid item xs={6} >  
                <Paper className={classes.paper} elevation={5} style={{borderRadius:20}}> 
                    <Typography variant="h5" className={classes.tableItem} >      
                        <i><b>Two machines in one</b>, replace both your washer and dryer with the Ultramatic, 
                        saving you time, money, and space.</i>
                    </Typography>      
                </Paper>
            </Grid>
            <Grid item xs={6}>   
                <Paper className={classes.paper} elevation={5} style={{borderRadius:20}}> 
                    <Typography variant="h5" className={classes.tableItem}>      
                        <i>Washes and dries your clothes <b>in just 20 minutes</b>.</i>
                    </Typography>      
                </Paper>
            </Grid>
        </Grid>

        <Grid container spacing={2}>
            <Grid item xs={6}>   
                <Paper className={classes.paper} elevation={5} style={{borderRadius:20}}> 
                    <Typography variant="h5" className={classes.tableItem}>      
                        <i>Uses less water and electricity to operate than a washing and drying machine, 
                        <b> making it cheaper to clean your clothes!</b></i>
                    </Typography>      
                </Paper>
            </Grid>
            
            <Grid item xs={6}>   
                <Paper className={classes.paper} elevation={5} style={{borderRadius:20}}> 
                    <Typography variant="h5" className={classes.tableItem}>      
                        <i><b>Extends the life of your clothing</b>, but avoiding the wear and tear caused by
                        needless friction in a traditional washing machine.</i>
                    </Typography>      
                </Paper>
            </Grid>
        </Grid>

        <Grid container spacing={2} style={{marginBottom:'50px'}}>
            <Grid item xs={6}>   
                <Paper className={classes.paper} elevation={5} style={{borderRadius:20}}> 
                    <Typography variant="h5" className={classes.tableItem}>      
                        <i><b>Does not require water hooks</b> and works at any standard electrical outlet, 
                        making the <i>Ultramatic</i> <b>highly portable</b>.</i>
                    </Typography>     
                </Paper>
            </Grid>
            
            <Grid item xs={6}>   
                <Paper className={classes.paper} elevation={5} style={{borderRadius:20}}> 
                    <Typography variant="h5" className={classes.tableItem}>      
                        <i>Never before has cleaning clothes been so <b>accessible, cheap, and easy</b>.
                        The Ultramatic will revolutionize how you clean your clothes.</i>
                    </Typography>      
                </Paper>
            </Grid>
        </Grid>
       
    </div>
  );
}

export default Content;