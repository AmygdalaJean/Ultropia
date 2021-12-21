import React from "react";
import { Container } from "@material-ui/core";

import Box from '@material-ui/core/Box'
import { Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

import ProductIntroduction from './ProductIntroduction'
import Typography from '@material-ui/core/Typography';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

import prototypeDiagram from './Images/smallprototypeCr.png'

import dirty from './Images/dirtshirt1.png'
import soundwave from './Images/ultrawave.png'
import exp from './Images/explosion.png'
import time from './Images/time.png'
import complex from './Images/glasses.png'
import drying from './Images/shirt.png'
import colddry from './Images/ultrasoniccolddrying.png'


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
    gridObj:{
        height: 'auto',
        textAlign:'center',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    img:{
        width:'35%',
        padding:25,
    },
    spacingItem:{
        textAlign:'left',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        [theme.breakpoints.up(750)]: {
            width:'80%',
            marginTop:'0px',
        },
        [theme.breakpoints.down(750)]: {
            margin:'5px',
            height:'75px',
            padding: theme.spacing(3, 2),
            marginTop:'0px'
        },
    },
  }));

function ExplainProduct() {
  const classes = useStyles();

  return (
    <div >
        <Typography variant="overline" >
            <div className={classes.heading} >
                How does it work?
            </div>
        </Typography>  
        <Container maxWidth="lg" >
    
            
        <Grid container spacing={1}  >
                <Grid item xs={6} className={classes.gridObj}>   
                    <div className={classes.spacingItem}>
                        <Typography className={classes.textItem} style={{textAlign:'right'}}>  
  
                            Ultrasonic Cleaning is 
                            the practice of blasting dirty items with ultrasonic high frequency waves. 

                        </Typography>     
                    </div>
                </Grid>
                <Grid item xs={6} className={classes.gridObj} >
                    <div  >
                        <img src={dirty} className={classes.img}  
                        alt="Dirty shirt."/>
                    </div>
                </Grid>
            </Grid>

            <Grid container spacing={1} >
                <Grid item xs={6} className={classes.gridObj}>
                    <div   >
                        <img src={soundwave} className={classes.img}
                        alt="An artistic rendering of sound waves"/>
                    </div>
                </Grid>
                <Grid item xs={6} className={classes.gridObj}>   
                
                    <div className={classes.spacingItem}>  
                        <Typography  className={classes.textItem}>    
                            These waves rip through the water and create micro-vacuums within the medium. 
                        
                        </Typography> 
                    </div>    
                </Grid>

            </Grid >


            <Grid container spacing={1} >
                <Grid item xs={6} className={classes.gridObj}>  
                    <div className={classes.spacingItem}>    
                        <Typography  className={classes.textItem} style={{textAlign:'right'}}>  
                         
                            When these vacuums collapse it knocks loose dirt and
                            kills bacteria and viruses. This quickly cleans and sanitizes any item. 
                        
                        </Typography> 
                    </div>   
                </Grid>

                <Grid item xs={6} className={classes.gridObj}>
                    <div  >
                        <img src={exp} className={classes.img} 
                        alt="An explosion, sanitizes viruses"/>
                    </div>
                </Grid>             

            </Grid>



            <Grid container spacing={1} >
                <Grid item xs={6} className={classes.gridObj}>
                    <div   >
                        <img src={time} className={classes.img}
                        alt="A ticking clock"/>
                    </div>
                </Grid>
                <Grid item xs={6} className={classes.gridObj}>   
                
                    <div className={classes.spacingItem}>  
                        <Typography  className={classes.textItem}>  
                          
                            Ultrasonic cleaning is very fast, with deep cleans 
                            taking around 5 – 20 minutes on complex objects.
                        
                        </Typography>     
                    </div>
                </Grid>

            </Grid>

   

            <Grid container spacing={1} >
                <Grid item xs={6} className={classes.gridObj}>    
                    <div className={classes.spacingItem}>    
                        <Typography  className={classes.textItem} style={{textAlign:'right'}}>  
                        
                            Currently, ultrasonic cleaning is used frequently to clean complex and/or 
                            fragile items, such as electronics, watches, and jewelry.
                        
                        </Typography>   
                    </div> 
                </Grid>

                <Grid item xs={6} className={classes.gridObj}>
                    <div   >
                        <img src={complex} className={classes.img}
                        alt="Frigile and high-tech glasses"/>
                    </div>
                </Grid>             

            </Grid>

     

            <Grid container spacing={1} >
                <Grid item xs={6} className={classes.gridObj}>
                    <div   >
                        <img src={drying} className={classes.img}
                        alt="Sound waves moving through a shirt"/>
                    </div>
                </Grid>
                <Grid item xs={6} className={classes.gridObj}>   
                    <div className={classes.spacingItem}> 
                        <Typography  className={classes.textItem}>  
                           
                            Ultrasonic drying works very similarly. Given a wet object, 
                            it can be quickly dried by blasting it with ultrasonic waves.
                            
                        </Typography>    
                    </div> 
                </Grid>

            </Grid>

         

            <Grid container spacing={1} >
                <Grid item xs={6} className={classes.gridObj}>   
                    <div className={classes.spacingItem}>  
                        <Typography  className={classes.textItem} style={{textAlign:'right'}}>  
                          
                            These waves are absorbed by water, heating it up and causing quick 
                            evaporation. This process is significantly faster than traditional 
                            drying methods. 
                            
                        </Typography>     
                    </div>
                </Grid>

                <Grid item xs={6} className={classes.gridObj}>
                    <div >
                        <img src={colddry} className={classes.img} style={{width:'65%'}}
                        alt="Detailed graph of different times to dry for different drying methods"/>
                    </div>
                </Grid>             

            </Grid>


        </Container> 
    </div>
  );


}

export default ExplainProduct;