import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import GetInTouch from "./GetInTouch";
import Container from "@material-ui/core/Container";

import Logo from './Images/ultropia2.png'

import { makeStyles } from '@material-ui/core/styles';

import useWindowDimensions from './WindowSize';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1),

      },
    paper: {
      padding: theme.spacing(2),
      width:'100%',

    },

    smallLogo:{
        width:'75%',
        [theme.breakpoints.down(550)]: {
            width: '50%',
        },
    },

    logostyle:{
        width:'100%',

    }, 
    moveRight:{
        textAlign:'left',
        width:'80%', 
        paddingTop:'45px',
        [theme.breakpoints.down(750)]:{
            textAlign:'center',
            width:'100%', 
        }

    },
    overlay: {
        [theme.breakpoints.down(1190)]: {
          position: 'absolute', left: '50%', top: 100,
          transform: 'translate(-50%, -15%)',
          minWidth:'800px'
        },
        [theme.breakpoints.up(1190)]: {
          position: 'absolute', left: '50%', top: 300,
          transform: 'translate(-50%, -25%)',
          width:'1200px'
        },    
        [theme.breakpoints.down(750)]: {
          position: 'absolute', left: '50%', top: 100,
          transform: 'translate(-50%, -10%)',
          width:400
        },
        
    },
    smalltext:{
        width:375,
        textAlign:'justify',  
        color:'#ffc107',
        [theme.breakpoints.down(550)]: {
            fontSize:12
        },
    },
    introText:{
        color:'#ffc107',
        paddingLeft:50,
        paddingRight:'40%',
        textAlign:'justify',
        fontSize:18,
        [theme.breakpoints.down(850)]: {
            fontSize:15
        },

    },
    buttonClass:{
        paddingTop:25,
        textAlign:'left'
    },
    

}));

function EntryCard() {
    const classes = useStyles();
    const { height, width } = useWindowDimensions();

    if (width >= 750)
    {
        return (
            <div className={classes.overlay}>
                <div className={classes.moveRight}>
                    <div>
                        <img src={Logo} className={classes.logostyle} alt="Ultropia"/>
                    </div>
                    <div className={classes.introText}>
                        
                        <strong >Say goodbye to your washer and dryer!</strong> Ultropia's 
                        flagship product is the <i>Ultramatic</i>;
                        a two-in-one washing and drying machine that uses
                        a high frequency ultrasonic emitter to clean, sanitize, and dry clothing
                        faster and more efficient than ever possible before.
                        <div   className={classes.buttonClass}>
                            <ButtonGroup>
                                <div style={{paddingRight:10}}>
                                    <GetInTouch />
                                </div>
                                <div >
                                    <Button 
                                        disableElevation  
                                        variant="contained" 
                                        color="secondary" 
                                        orientation="horizontal"  
                                        href='https://www.linkedin.com/company/ultropia/' 
                                    >
                                        More About us
                                    </Button>
                                </div>
                            </ButtonGroup>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
    else
    {
        return (
            <div className={classes.overlay}>
                <div className={classes.moveRight}>
                    <div>
                        <img src={Logo} className={classes.smallLogo} alt="Ultropia"/>
                    </div>
                    <Container maxWidth='lg' className={classes.smalltext}>
                            
                            <strong >Say goodbye to your washer and dryer!</strong> Ultropia's 
                            flagship product is the <i>Ultramatic</i>;
                            a two-in-one washing and drying machine that uses
                            a high frequency ultrasonic emitter to clean, sanitize, and dry clothing
                            faster and more efficient than ever possible before.
                            <div   className={classes.buttonClass}>
                                <ButtonGroup>
                                    <div style={{paddingRight:10}}>
                                        <GetInTouch />
                                    </div>
                                    <div >
                                        <Button 
                                            disableElevation  
                                            variant="contained" 
                                            color="secondary" 
                                            orientation="horizontal"  
                                            href='https://www.linkedin.com/company/ultropia/' 
                                        >
                                            More About us
                                        </Button>
                                    </div>
                                </ButtonGroup>
                            </div>
                        </Container>
                </div>
            </div>
        )
    }
    


        

  }
  
  export default EntryCard;
