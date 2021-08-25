import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Typography } from '@material-ui/core';
import {Link} from 'react-scroll'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import ButtonGroup from '@material-ui/core/ButtonGroup';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  button: {
    // fontSize:12
  }
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div style={{ textAlign:'center'}}>
        <Paper style={{backgroundColor:'white', paddingBottom:'25px', paddingTop:'10px'}}>
            <Typography variant="button" style={{fontSize:16}}>
                <b>Modern Sanitation</b>
            </Typography>
            <ButtonGroup fullWidth variant="contained" color="secondary" orientation="vertical" style={{paddingTop:'10px'}} >
            <Button>            
                <Link
                activeClass="active"
                to="WhatWeNeed"
                spy={true}
                smooth={true}
                offset={-70}
                duration={250}
                className={classes.button}
                >
                    Why Change?
                </Link>
            </Button>       
            <Button>
                <Link
                    activeClass="active"
                    to="WhyChange"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={250}
                    className={classes.button}
                    >
                        How can it Help?
                </Link>
            </Button>
            <Button>
                <Link
                    activeClass="active"
                    to="WeDoItBetter"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={250}
                    className={classes.button}
                    >
                        We Can Help 
                </Link>  
            </Button>                
        </ButtonGroup>          
        </Paper>
        
        
    </div>
  );
}
