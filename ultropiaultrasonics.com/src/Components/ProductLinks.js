import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import {Link} from 'react-scroll'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import ButtonGroup from '@material-ui/core/ButtonGroup';


const useStyles = makeStyles((theme) => ({
    button: {
        // fontSize:12
      }
}));

export default function ProductLinks() {
  const classes = useStyles();

  return (
    <div style={{ textAlign:'center'}}>
        <Paper style={{backgroundColor:'white', paddingBottom:'25px', paddingTop:'10px'}}>
            <Typography variant="button" style={{fontSize:16}}>
                <b>THE ULTRAMATIC</b>
            </Typography>
            <ButtonGroup fullWidth variant="contained" color="secondary" orientation="vertical" style={{paddingTop:'10px'}} >
            <Button>            
                <Link
                activeClass="active"
                to="UltramaticIntro"
                spy={true}
                smooth={true}
                offset={-70}
                duration={250}
                className={classes.button}
                >
                    What is it?
                </Link>
            </Button>       
            <Button>
                <Link
                    activeClass="active"
                    to="UltramaticValue"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={250}
                    className={classes.button}
                    >
                        What Does it Do?
                </Link>
            </Button>
            <Button>
                <Link
                    activeClass="active"
                    to="UltramaticScience"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={250}
                    className={classes.button}
                    >
                        How Does it Work?
                </Link>  
            </Button>       
            <Button>
                <Link
                    activeClass="active"
                    to="UltrasonicCleaning"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={250}
                    className={classes.button}
                    >
                        Can You Show Me?
                </Link>  
            </Button>               
        </ButtonGroup>   
                    
        </Paper>
        
        
    </div>
  );
}
