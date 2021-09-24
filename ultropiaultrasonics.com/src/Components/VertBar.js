import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Logo from './Images/logosmall1.png'
import Control from './Control';
import {Link} from 'react-scroll'
import ProductLinks from './ProductLinks'
import EnviroLinks from './EnviroLinks'

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Typography } from '@material-ui/core';
import { ButtonGroup } from '@material-ui/core';


import useWindowDimensions from './WindowSize';


const drawerWidth = 45;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: [theme.palette.secondary.main]

  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  button: {

  }
}));



export default function PermanentDrawerLeft() {
  const classes = useStyles();
  const { height, width } = useWindowDimensions();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (

    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onClose={toggleDrawer(anchor, false)}
    >
      <Paper style={{paddingBottom:'40px',margin:'0px', float:'center', textAlign:'center'}} elevation={10} >
            <Button fullWidth>
              <Link 
                activeClass="active"
                
                spy={true}
                smooth={true}
                offset={-70}
                duration={250}
              >  
                <img src={Logo} alt="Logo Here" style={{padding: 20, float:'center', height:'auto', width:'150px'}}
                  onClick={toggleDrawer(anchor, false)}  
                />  
              </Link>
            </Button>        
  
            <Control />     
  
          </Paper>  
  
          <Container style={{padding: 0, paddingTop: 50}}>
            
          <div style={{ textAlign:'center'}}>
            <Paper style={{backgroundColor:'white', paddingBottom:'25px', paddingTop:'10px'}}>
                  <Typography variant="button" style={{fontSize:16}}>
                      <b>THE ULTRAMATIC</b>
                  </Typography>
                  <ButtonGroup fullWidth variant="contained" color="secondary" orientation="vertical" style={{paddingTop:'10px'}} >
                  <Button  >            
                      <Link
                      activeClass="active"
                      to="UltramaticIntro"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={250}
                      className={classes.button}
                      onClick={toggleDrawer(anchor, false)}
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
                          onClick={toggleDrawer(anchor, false)}
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
                          onClick={toggleDrawer(anchor, false)}
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
                          onClick={toggleDrawer(anchor, false)}
                          >
                              Can You Show Me?
                      </Link>  
                  </Button>               
              </ButtonGroup>   
                          
              </Paper>
            </div>
              <Divider style={{marginTop:'0px', marginBottom:'10px'}}/>
  
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
                onClick={toggleDrawer(anchor, false)}
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
                    onClick={toggleDrawer(anchor, false)}
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
                    onClick={toggleDrawer(anchor, false)}
                    >
                        We Can Help 
                </Link>  
            </Button>                
        </ButtonGroup>          
        </Paper>
        
        
    </div>
              <Divider style={{marginTop:'0px', marginBottom:'50px'}}/>
  
          </Container> 
          </Box>
          
  );
  
  if (width > 1190) {
    return (
      <div className={classes.root}>
        <CssBaseline />


          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
            anchor="left"
            onClick={toggleDrawer('left', true)}
            onClose={toggleDrawer('left', false)}
            role="presentation"
            onKeyDown={toggleDrawer('left', false)}
          >
            <React.Fragment key={'left'}
            >
              <Button onClick={toggleDrawer('left', true)}>left</Button>
              <SwipeableDrawer
              
                anchor={'left'}
                open={state['left']}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
              >
                {list('left')}
              </SwipeableDrawer>
            </React.Fragment>

          
        </Drawer>
      </div>
    );
  }
  else {
    return (
      <div>
        
      </div>
    )
  }
  

  
}
