import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import ultrasonicCleaner from './Images/Filter_ultrasonic_cleaner.jpg'
import ultradiagram from './Images/ultrasonic-diagram.webp'
import colddry from './Images/ultrasoniccolddrying.png'

import "./../static/App.css";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    tableItem: {
        padding: '85px',
        textAlign: 'center',
    },
    subheading: {
        paddingTop: '75px',
        textAlign:'center',
        paddingBottom: '20px'
    },
    topText: {
        padding: '5px',
        textAlign: 'justify'
    },
    img: {
        width: '100%',
        maxWidth: '300px',
        height: 'auto',
        alignSelf: 'center',
    },
}));

function Science() {
  const classes = useStyles();

  return (
    <div>       

        <Typography variant="h4" className={classes.subheading} >
            <b>How Does it Work?</b>
        </Typography>

        <Grid container spacing={2}>
            <Grid item xs={6}>   
                <Typography variant="h6" className={classes.topText}>  
                    <div className={classes.listItem}>    
                        <a href="https://en.wikipedia.org/wiki/Ultrasonic_cleaning" target='_blank'>Ultrasonic Washing</a> is 
                        the practice of blasting dirty items with ultrasonic high frequency waves to 
                        clean them thoroughly and quickly. Ultrasonic cleaning is used frequently to clean 
                        complex and/or fragile items, such as electronics, watches, and jewelry. 
                    </div>
                </Typography>     
                <Typography variant="caption" className={classes.topText}>
                    <div className={classes.topText}>
                        The image on the right is a standard market ultrasonic cleaning device
                        for medium tooling equipment.
                    </div>
                </Typography> 
            </Grid>
            <Grid item xs={6}>
                <div style={{paddingTop: '0px'}} >
                    <img src={ultrasonicCleaner} className={classes.img}/>
                </div>
            </Grid>
        </Grid>

        <Grid container spacing={2}>
            <Grid item xs={6}>
                <div style={{paddingTop: '0px'}} >
                    <img src={ultradiagram} className={classes.img}/>
                </div>
            </Grid>
            <Grid item xs={6}>   
                <Typography variant="h6" className={classes.topText}>
                    <div className={classes.listItem}>
                        Ultrasonic cleaning is facilitated by 
                        a <a href="https://en.wikipedia.org/wiki/Transducer" target='_blank'>transducer</a>, which
                        which shoots ultrasonic waves into an attached fluid medium (usually water) where the cleaning
                        takes place. These oscilating waves displace the water as it moves through it, creating millions
                        of small vacuums in the water. When these vacuums collapse from the pressure of the surrounding 
                        fluid, energy is released which knocks loose dirt and debree.                         
                    </div>
                </Typography>      
            </Grid>
        </Grid>


        <Grid container spacing={2}>
            <Grid item xs={6}>   
                <Typography variant="h6" className={classes.topText}>  
                    <div className={classes.listItem}>    
                        Ultrasonic Cleaning works in conjunction 
                        with <a href="https://en.wikipedia.org/wiki/Surfactant" target='_blank'>surfactants</a> (such 
                        as your standard laundry detergant) to disolve non-polar compounds which won't disolve normally
                        in water. This in combiniation with lower frequency ultrasonic waves allows the ultramat to 
                        safetly clean your laundry, with less water, less electricity, and less time.  
                    </div>
                </Typography>     
                <Typography variant="caption" className={classes.topText}>
                    <div className={classes.topText}>
                    </div>
                </Typography> 
            </Grid>
            <Grid item xs={6}>
                <div style={{paddingTop: '0px'}} >
                    <img src={ultradiagram} className={classes.img}/>
                </div>
            </Grid>
        </Grid>


        <Grid container spacing={2}>
            <Grid item xs={6}>
                <div  >
                    <img src={colddry} className={classes.img}/>
                </div>
            </Grid>
            <Grid item xs={6}>   
                <Typography variant="h6" className={classes.topText}>
                    <div className={classes.listItem}>
                        The <i>United State Department of Energy</i>                 
                    </div>
                </Typography>      
            </Grid>
        </Grid>
    </div>

  );
}

export default Science;