import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Container from '@material-ui/core/Container';
import Logo from './Images/ultropia1.png'
import { Typography } from '@material-ui/core';
import Control from './Control';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
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
        <div className={classes.toolbar} />

        <img src={Logo} alt="Logo Here"/>


        <Control/>
        

        <Divider />

        <Container style={{padding: 15}}>
            <Typography variant="h6">
                About the Product
            </Typography>
            <List >
                <ListItem>Lorem ipsum </ListItem>       
                <ListItem>Dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing </ListItem>                
            </List>
        </Container>

        <Divider />

        <Container style={{padding: 15}}>
            <Typography variant="h6">
                Enviromental Effects
            </Typography>
            <List >
                <ListItem>Lorem ipsum </ListItem>       
                <ListItem>Dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing </ListItem>                
            </List>
        </Container>

        <Divider />

            <Container style={{padding: 15}}>
                <Typography variant="h6">
                    Our Timeline
                </Typography>
                <List >
                    <ListItem>Lorem ipsum </ListItem>       
                    <ListItem>Dolor sit amet</ListItem>
                    <ListItem>Consectetur adipiscing </ListItem>                
                </List>
            </Container>

          <Divider />

      </Drawer>
    </div>
  );
}
