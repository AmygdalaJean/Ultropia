import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Container from '@material-ui/core/Container';
import Logo from './Images/logosmall1.png'
import { Typography } from '@material-ui/core';
import Control from './Control';
import {Link} from 'react-scroll'
import ProductLinks from './ProductLinks'
import EnviroLinks from './EnviroLinks'


const drawerWidth = 240;

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
    backgroundColor:'gold'

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
        >
          <Paper style={{paddingBottom:'40px',margin:'0px', float:'center', textAlign:'center'}} elevation={10}>
          <Button fullWidth>
            <Link 
              activeClass="active"
              to="Top"
              spy={true}
              smooth={true}
              offset={-70}
              duration={250}
            >  
              <img src={Logo} alt="Logo Here" style={{padding: 20, float:'center', height:'auto', width:'150px'}}/>  
            </Link>
          </Button>        

          <Control />     

        </Paper>  

        <Container style={{padding: 0, paddingTop: 50}}>
          
            <ProductLinks/>
            <Divider style={{marginTop:'0px', marginBottom:'10px'}}/>

            <EnviroLinks/>
            <Divider style={{marginTop:'0px', marginBottom:'50px'}}/>

        </Container>
      </Drawer>
    </div>
  );
}
