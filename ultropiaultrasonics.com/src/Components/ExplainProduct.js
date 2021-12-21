import React from "react";
import { Container } from "@material-ui/core";

import Box from '@material-ui/core/Box'
import { Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

import ProductIntroduction from './ProductIntroduction'
import Typography from '@material-ui/core/Typography';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

import prototypeDiagram from './Images/smallprototypeCr.png'



const useStyles = makeStyles((theme) => ({
    heading:{
        paddingTop:25,
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
        height: 900,
        textAlign:'center',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    imgClass:{

    },
    spacingItem:{
        [theme.breakpoints.up(750)]: {
            width:'80%',
            paddingTop:25,
            paddingBottom:25,
            textAlign:'justify',
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop:'0px',
        },
        [theme.breakpoints.down(750)]: {
            margin:'5px',
            height:'75px',
            textAlign:'justify',
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
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
                Introducing the <b>Ultramatic</b>
            </div>
        </Typography>  
        <Container maxWidth="lg" >
    
            
            <Grid container spacing={1}>
                <Grid item xs={6} className={classes.gridObj}> 
                    <div className={classes.spacingItem}>
                        <Typography className={classes.textItem}>
                            <b>Two machines in one</b>, replace 
                            both your washer and dryer with the Ultramatic, 
                            saving you time, money, and space.
                        </Typography>
                    </div>
                    
                    <div className={classes.spacingItem}>
                        <Typography className={classes.textItem}>
                            Fully wash and dry your clothes in just <b > 20 minutes</b>.
                        </Typography>
                    </div>
                    
                    <div className={classes.spacingItem}>
                        <Typography className={classes.textItem}>
                            Uses less water and electricity 
                            to operate than a washing and 
                            drying machine, making it <b>cheaper 
                            to clean your clothes!</b>
                        </Typography>
                    </div>
                    <div className={classes.spacingItem}>
                        <Typography className={classes.textItem}>
                            <b>Extends the life of your clothing</b> by 
                            avoiding the wear and tear caused by
                            needless friction in a traditional washing machine.
                        </Typography>
                    </div>
                    
                    <div className={classes.spacingItem}>
                        <Typography className={classes.textItem}>
                            Does not require water hooks and works at 
                            any standard electrical outlet, 
                            making the Ultramatic <b>highly portable</b >.
                        </Typography>
                    </div>
                    
                    <div className={classes.spacingItem}>
                        <Typography className={classes.textItem}>
                            Never before has cleaning clothes been 
                            so <b >accessible, cheap, and easy</b>. The 
                            Ultramatic will revolutionize how you clean your clothes.
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={6} className={classes.gridObj}>
                    <div style={{ textAlign:'center' }}>
                        <img src={prototypeDiagram} alt="Diagram of the current Prototype" className={classes.imgClass}/>
                    </div>
                </Grid>
                {/* <Grid item xs={4} > 
                    <div className={classes.spacingItem}>
                        <Typography className={classes.textItem}>
                            <b>Extends the life of your clothing</b> by 
                            avoiding the wear and tear caused by
                            needless friction in a traditional washing machine.
                        </Typography>
                    </div>
                    
                    <div className={classes.spacingItem}>
                        <Typography className={classes.textItem}>
                            Does not require water hooks and works at 
                            any standard electrical outlet, 
                            making the Ultramatic <b>highly portable</b >.
                        </Typography>
                    </div>
                    
                    <div className={classes.spacingItem}>
                        <Typography className={classes.textItem}>
                            Never before has cleaning clothes been 
                            so <b >accessible, cheap, and easy</b>. The 
                            Ultramatic will revolutionize how you clean your clothes.
                        </Typography>
                    </div>
                </Grid> */}
            </Grid>

        </Container> 
    </div>
  );


}

export default ExplainProduct;