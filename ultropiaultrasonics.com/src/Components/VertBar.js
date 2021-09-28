import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Logo from './Images/logosmall1.png'
import Control from './Control';
import {Link} from 'react-scroll'

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Typography } from '@material-ui/core';
import { ButtonGroup } from '@material-ui/core';

import arrowimg from './Images/arrowv2.png'


import useWindowDimensions from './WindowSize';


const drawerWidth = 65;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height:'100%'
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
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height:'100%',
    },
  },
  drawerPaper: {
    width: drawerWidth,

  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  button: {

  },
  newDrawer:{
    height:'100%',
    backgroundColor: [theme.palette.secondary.main],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    <div className={classes.newDrawer}>
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onClose={toggleDrawer(anchor, false)}
      
    >
      <Paper style={{paddingBottom:'40px',margin:'0px', float:'center', textAlign:'center'}} elevation={0} >
            <Button fullWidth>
              <Link 
                activeClass="active"
                to="Top"
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
            <div  style={{paddingBottom:'50px'}}>
              <Control/>
            </div>
               
            <div  style={{paddingBottom:'50px'}}>
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
              </div>
                           
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
  
          {/* <Container style={{padding: 0, paddingTop: 50}}>
            
          <div style={{ textAlign:'center'}}>
            <Paper style={{backgroundColor:'white', paddingBottom:'25px', paddingTop:'10px'}}>
                  
              </Paper>
            </div>
              <Divider style={{marginTop:'0px', marginBottom:'10px'}}/>
  
              <div style={{ textAlign:'center'}}>
        <Paper style={{backgroundColor:'white', paddingBottom:'25px', paddingTop:'10px'}}>
           
        </Paper> */}
        
{/*         
    </div>
              <Divider style={{marginTop:'0px', marginBottom:'50px'}}/>
  
          </Container>  */}
          </Box>
          </div>
          
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
              <Button onClick={toggleDrawer('left', true)}>
                <div >
                  <img src={arrowimg} style={{height:'100%', width:'auto'}}/>
                </div>
                
              </Button>
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
