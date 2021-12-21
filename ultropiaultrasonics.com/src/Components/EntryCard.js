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

    logostyle:{
        width:'100%',

    }, 
    moveRight:{
        textAlign:'left',
        width:'80%', 
        paddingTop:'45px',

    },
    overlay: {
        [theme.breakpoints.down(1250)]: {
          position: 'absolute', left: '50%', top: 100,
          transform: 'translate(-50%, -15%)',
          minWidth:'800px'
        },
        [theme.breakpoints.up(1250)]: {
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
    introText:{
        color:'#ffc107',
        paddingLeft:50,
        paddingRight:'40%',
        textAlign:'justify',
        fontSize:20,
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

    // const mobilePaperSize = (inwidth) => ({
    //     width:360,
    //   });

    // if (width >= 750) {
    //     return ( 
    //         <div className={classes.overlay}>
    //             <div style={{ maxWidth:'100%', textAlign:'center', alignSelf:'center'}}>
    //                 <img src={Logo} className={classes.logostyle} alt="Ultropia"/>
    //                 <div style={{textAlign:'center', paddingBottom:'10px', paddingTop:'0px'}}>
    //                     <ButtonGroup    >
    //                         <div style={{textAlign:'left', paddingRight:'200px'}}>
    //                             <GetInTouch />
    //                         </div>
    //                         <div style={{textAlign:'right'}}>
    //                             <Button disableElevation  variant="contained" color="secondary" orientation="horizontal"  href='https://www.linkedin.com/company/ultropia/' 
    //                             >
    //                                 About us
    //                             </Button>
    //                         </div>
    //                     </ButtonGroup>
    //                 </div>
    //             </div>    
    //         </div>
    //     )
    // }
    // else {
    //     return ( 
    //         <div className={classes.overlay} style={{textAlign:'center'}} >
    //             <div>
    //             <img src={Logo} style={{width:360}} alt="Ultropia"/>
    //             </div>
    //                 <ButtonGroup   style={{paddingTop:'25px'}} >
    //                     <div style={{textAlign:'left', paddingRight:'60px' }}>
    //                         <GetInTouch />
    //                     </div>
    //                     <div style={{textAlign:'right'}}>
    //                         <Button disableElevation  variant="contained" color="secondary" orientation="horizontal"  href='https://www.linkedin.com/company/ultropia/' 
    //                         >
    //                             About us
    //                         </Button>
    //                     </div>
    //                 </ButtonGroup>
            
    //         </div>

    //     )
    // }
        

  }
  
  export default EntryCard;
