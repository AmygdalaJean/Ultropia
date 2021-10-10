import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'

import "./../static/App.css";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    listItem: {
        paddingTop: '25px',
        paddingBottom: '25px',
        textAlign: 'justify',
    },
    subcontainer: {
        
        textAlign:'center',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: theme.spacing(3, 2),
        height: '350px'
    },
    horizontal: {
        marginTop: '15px',
        marginBottom: '15px',
    },
    tableItem: {
        padding: '65px',
        paddingLeft: '30px',
        paddingRight: '30px',
        textAlign: 'center',

        [theme.breakpoints.down(800)]: {
            fontSize:20
        },
        [theme.breakpoints.up(800)]: {
            fontSize:28
        },
        [theme.breakpoints.down(650)]: {
            fontSize:15,
            padding:'5px',
            margin:'5px'
        },
        

 
    },
    emphasis:{
        [theme.breakpoints.down(800)]: {
            fontSize:23
        },
        [theme.breakpoints.up(800)]: {
            fontSize:40
        },
        [theme.breakpoints.down(600)]: {
            fontSize:17,

        },
    },
    subheading: {
        paddingTop: '50px',
        textAlign:'center'
    },
    paper: {
        borderRadius:1000,
        [theme.breakpoints.up(750)]: {
            margin:'50px',
            height:'500px',
            textAlign:'center',
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop:'0px'
        },
        [theme.breakpoints.down(750)]: {
            margin:'5px',
            height:'300px',
            textAlign:'center',
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: theme.spacing(3, 2),
            marginTop:'0px'
        },
        


    }
}));

function Content() {
  const classes = useStyles();

  return (
    <div id="UltramaticValue" >

        <Typography variant="h4" className={classes.subheading} >       
            {/* <b>What Does it Do?</b> */}
        </Typography>
           
          <Grid container spacing={2} style={{textAlign:'center'}} >
            <Grid item xs={6} >  
                <Paper className={classes.paper} elevation={5}> 
                    <Typography variant="h5" className={classes.tableItem} >      
                    <i><u><b className={classes.emphasis}>Two machines in one,</b></u> replace both your washer and dryer with the Ultramatic, 
                        saving you time, money, and space.</i>
                    </Typography>      
                </Paper>
            </Grid>
            <Grid item xs={6}>   
                <Paper className={classes.paper} elevation={5} > 
                    <Typography variant="h5" className={classes.tableItem}>      
                        <i>Washes and dries your  
                            clothes in just <u><b className={classes.emphasis}> 20 minutes.</b></u></i>
                    </Typography>      
                </Paper>
            </Grid>
        </Grid>

        <Grid container spacing={2}>
            <Grid item xs={6}>   
                <Paper className={classes.paper} elevation={5} > 
                    <Typography variant="h5" className={classes.tableItem}>      
                        <i>Uses less water and electricity to operate than a washing and drying machine, making it  <u><b className={classes.emphasis}>cheaper to clean your clothes!</b></u></i>
                    </Typography>      
                </Paper>
            </Grid>
            
            <Grid item xs={6}>   
                <Paper className={classes.paper} elevation={5} > 
                    <Typography variant="h5" className={classes.tableItem}>      
                        <i><u><b className={classes.emphasis}>Extends the life of your clothing</b></u> by avoiding the wear and tear caused by
                        needless friction in a traditional washing machine.</i>
                    </Typography>      
                </Paper>
            </Grid>
        </Grid>

        <Grid container spacing={2} style={{marginBottom:'50px'}}>
            <Grid item xs={6}>   
                <Paper className={classes.paper} elevation={5} > 
                    <Typography variant="h5" className={classes.tableItem}>      
                        <i>Does not require water hooks and works at any standard electrical outlet, 
                        making the <i>Ultramatic</i> <u><b className={classes.emphasis}>highly portable</b ></u>.</i>
                    </Typography>     
                </Paper>
            </Grid>
            
            <Grid item xs={6}>   
                <Paper className={classes.paper} elevation={5} > 
                    <Typography variant="h5" className={classes.tableItem}>      
                        <i>Never before has cleaning clothes been so <u><b className={classes.emphasis}>accessible, cheap, and easy</b></u>. The Ultramatic will revolutionize how you clean your clothes.</i>
                    </Typography>      
                </Paper>
            </Grid>
        </Grid>
       
    </div>
  );
}

export default Content;