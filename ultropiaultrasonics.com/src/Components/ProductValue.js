import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

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
        padding: '85px',
        paddingTop: '50px',
        paddingBottom: '50px',
        textAlign: 'center',
    },
    subheading: {
        paddingTop: '75px',
        textAlign:'center'
    },
    topText: {
        padding: '25px',
        textAlign: 'justify'
    },
    img: {
        width: '100%',
        maxWidth: '300px',
        height: 'auto',
        alignSelf: 'center',
    },
}));

function Content() {
  const classes = useStyles();

  return (
    <div >

        <Typography variant="h4" className={classes.subheading} >       
            {/* <b>What Does it Do?</b> */}
        </Typography>
           
          <Grid container spacing={2} >
            <Grid item xs={6} >   
                <Typography variant="h5" className={classes.tableItem} >      
                    <i><b>Two machines in one</b>, replace both your washer and dryer with the ultramat, 
                    saving you time, money, and space.</i>
                </Typography>      
            </Grid>
            <Grid item xs={6}>   
                <Typography variant="h5" className={classes.tableItem}>      
                    <i>Washes and drys your clothes <b>in just 20 minutes</b>.</i>
                </Typography>      
            </Grid>
        </Grid>

        <Divider variant='inset' className={classes.horizontal}/>

        <Grid container spacing={2}>
            <Grid item xs={6}>   
                <Typography variant="h5" className={classes.tableItem}>      
                    <i>Uses less water and electricity to operate than a washing and drying machine, 
                    <b> making it cheaper to clean your clothes!</b></i>
                </Typography>      
            </Grid>
            
            <Grid item xs={6}>   
                <Typography variant="h5" className={classes.tableItem}>      
                    <i><b>Extends the life of your clothing</b>, but avoiding the wear and tear caused by
                    needless friction in a traditional washing machine.</i>
                </Typography>      
            </Grid>
        </Grid>

        <Divider variant='inset' className={classes.horizontal}/>

        <Grid container spacing={2}>
            <Grid item xs={6}>   
                <Typography variant="h5" className={classes.tableItem}>      
                    <i><b>Does not require water hooks</b> and can be plugged directly into the wall 
                    at any standard outlet, making the <i>Ultramat</i> <b>highly portable</b>.</i>
                </Typography>     
            </Grid>
            
            <Grid item xs={6}>   
                <Typography variant="h5" className={classes.tableItem}>      
                    <i>Never before has cleaning clothes been so <b>accessible, cheap, and easy.</b>
                    The Ultramat will revolutionize how you clean your clothes.</i>
                </Typography>      
            </Grid>
        </Grid>
       
    </div>
  );
}

export default Content;