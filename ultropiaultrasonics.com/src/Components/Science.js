import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'

import dirty from './Images/dirtshirt1.png'
import soundwave from './Images/ultrawave.png'
import exp from './Images/explosion.png'
import time from './Images/time.png'
import complex from './Images/glasses.png'
import drying from './Images/shirt.png'
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
        textAlign: 'center',
    },
    subContainer: {
        paddingTop: '0px',
        paddingBottom: '25px',
        textAlign:'center',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        
        height: 250,
        [theme.breakpoints.down(750)]: {
            padding:'5px'
        },

    },
    img: {
        width: '75%',
        maxWidth: '300px',
        height: 'auto',
        float: 'center',
        
    },
    beforeimg:{

    },
    scienceText: {
        [theme.breakpoints.up(915)]:{
            fontSize: 32,
        },
        [theme.breakpoints.down(915)]: {
            fontSize: 20,
        }
        
        
    },
    div: {
        marginTop:'50px',
        marginBottom:'50px'
    },
    container:{
        padding:50,
        [theme.breakpoints.down(750)]: {
            padding:0
        }
    }
}));

function Science() {
  const classes = useStyles();

  return (
    <div id="UltramaticScience">       

        
        <Typography variant="h1" className={classes.subheading} >
            <b>How Does it Work?</b>
        </Typography>
        <Container className={classes.container} maxWidth="md">

        <Grid container spacing={2} className={classes.subContainer}>
                <Grid item xs={8}>   
                    <Typography variant="subtitle2" className={classes.topText}>  
                        <div className={classes.scienceText}>    
                            <a href="https://en.wikipedia.org/wiki/Ultrasonic_cleaning" target='_blank' rel="noreferrer" >Ultrasonic Cleaning</a> is 
                            the practice of blasting dirty items with ultrasonic high frequency waves. 
                        </div>
                    </Typography>     
                </Grid>
                <Grid item xs={4}>
                    <div  className={classes.beforeimg}>
                        <img src={dirty} className={classes.img} 
                        alt="Dirty shirt."/>
                    </div>
                </Grid>
            </Grid>

            <Divider className={classes.div}/>

            <Grid container spacing={2} className={classes.subContainer}>
                <Grid item xs={4}>
                    <div   className={classes.beforeimg}>
                        <img src={soundwave} className={classes.img}
                        alt="An artistic rendering of sound waves"/>
                    </div>
                </Grid>
                <Grid item xs={8}>   
                
                    <Typography variant="subtitle2" className={classes.topText}>  
                        <div className={classes.scienceText}>    
                            These waves rip through the water and create micro-vacuums within the medium. 
                        </div>
                    </Typography>     
                </Grid>

            </Grid>

            <Divider className={classes.div}/>

            <Grid container spacing={2} className={classes.subContainer}>
                <Grid item xs={8}>   
                    <Typography variant="subtitle2" className={classes.topText}>  
                        <div className={classes.scienceText}>    
                            When these vacuums collapse it knocks loose dirt and
                            kills bacteria and viruses. This quickly cleans and sanitizes any item. 
                        </div>
                    </Typography>     
                </Grid>

                <Grid item xs={4}>
                    <div   className={classes.beforeimg}>
                        <img src={exp} className={classes.img}
                        alt="An explosion, sanitizes viruses"/>
                    </div>
                </Grid>             

            </Grid>

            <Divider className={classes.div}/>

            <Grid container spacing={2} className={classes.subContainer}>
                <Grid item xs={4}>
                    <div   className={classes.beforeimg}>
                        <img src={time} className={classes.img}
                        alt="A ticking clock"/>
                    </div>
                </Grid>
                <Grid item xs={8}>   
                
                    <Typography variant="subtitle2" className={classes.topText}>  
                        <div className={classes.scienceText}>    
                            Ultrasonic cleaning is very fast, with deep cleans 
                            taking around 5 – 20 minutes on complex objects.
                        </div>
                    </Typography>     
                </Grid>

            </Grid>

            <Divider className={classes.div}/>

            <Grid container spacing={2} className={classes.subContainer}>
                <Grid item xs={8}>   
                    <Typography variant="subtitle2" className={classes.topText}>  
                        <div className={classes.scienceText}>    
                            Currently, ultrasonic cleaning is used frequently to clean complex and/or 
                            fragile items, such as electronics, watches, and jewelry.
                        </div>
                    </Typography>     
                </Grid>

                <Grid item xs={4}>
                    <div   className={classes.beforeimg}>
                        <img src={complex} className={classes.img}
                        alt="Frigile and high-tech glasses"/>
                    </div>
                </Grid>             

            </Grid>

            <Divider className={classes.div}/>

            <Grid container spacing={2} className={classes.subContainer}>
                <Grid item xs={4}>
                    <div  className={classes.beforeimg} >
                        <img src={drying} className={classes.img}
                        alt="Sound waves moving through a shirt"/>
                    </div>
                </Grid>
                <Grid item xs={8}>   
                
                    <Typography variant="subtitle2" className={classes.topText}>  
                        <div className={classes.scienceText}>    
                        Ultrasonic drying works very similarly. Given a wet object, 
                        it can be quickly dried by blasting it with ultrasonic waves.
                        </div>
                    </Typography>     
                </Grid>

            </Grid>

            <Divider className={classes.div}/>

            <Grid container spacing={2} className={classes.subContainer}>
                <Grid item xs={7}>   
                    <Typography variant="subtitle2" className={classes.topText}>  
                        <div className={classes.scienceText}>    
                        These waves are absorbed by water, heating it up and causing quick 
                        evaporation. This process is significantly faster than traditional 
                        drying methods. 
                        </div>
                    </Typography>     
                </Grid>

                <Grid item xs={5}>
                    <div  className={classes.beforeimg} >
                        <img src={colddry} className={classes.img} style={{width:'100%'}}
                        alt="Detailed graph of different times to dry for different drying methods"/>
                    </div>
                </Grid>             

            </Grid>


            {/* <Grid container spacing={2} className={classes.subContainer}>
                <Grid item xs={8}>   
                    <Typography variant="h6" className={classes.topText}>  
                        <div className={classes.listItem}>    
                            <a href="https://en.wikipedia.org/wiki/Ultrasonic_cleaning" target='_blank'>Ultrasonic Cleaning</a> is 
                            the practice of blasting ultrasonic high frequency waves through a travel medium (like water) 
                            to clean an item.
                            These waves rip through the water and create micro-vacuums, which violently collapse to 
                            knock loose dirt,
                            kill bacteria, and viruses. This thoroughly cleans any object quickly. Currently, 
                            ultrasonic cleaning is used frequently to clean complex and/or fragile items, 
                            such as electronics, watches, and jewelry.
                        </div>
                    </Typography>     
                </Grid>
                <Grid item xs={4}>
                    <div  >
                        <img src={ultradiagram} className={classes.img}/>
                    </div>
                </Grid>
            </Grid>

            <Divider/>

            <Grid container spacing={2} className={classes.subContainer}>
                <Grid item xs={4}>
                    <div  >
                        <img src={ultradiagram} className={classes.img}/>
                    </div>
                </Grid>
                <Grid item xs={8}>   
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

            <Divider/>

            <Grid container spacing={2} className={classes.subContainer}>
                <Grid item xs={8}>   
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
                <Grid item xs={4}>
                    <div  >
                        <img src={ultradiagram} className={classes.img}/>
                    </div>
                </Grid>
            </Grid>

            <Divider/>

            <Grid container spacing={2} className={classes.subContainer}>
                <Grid item xs={4}>
                    <div  >
                        <img src={colddry} className={classes.img}/>
                    </div>
                </Grid>
                <Grid item xs={8}>   
                    <Typography variant="h6" className={classes.topText}>
                        <div className={classes.listItem} id="UltrasonicCleaning">
                            The <i>United State Department of Energy</i> concludes 
                            in <a href="" target='_blank'>this paper</a> that drying clothes with ultrasonic 
                            waves is <b>exponentially</b> more energy efficent and faster
                            than drying those some clothes with heated air, even while tumbling. The ultramatic can take advantage 
                            of this by draining itself, and using it's same transducer to produce a different frequency of ultrasonic
                            waves to dry the clothes it just cleaned.
                        </div>
                    </Typography>      
                </Grid>
            </Grid> */}
        </Container>
    </div>
  );
}

export default Science;