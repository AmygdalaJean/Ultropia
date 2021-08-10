import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavigationalBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
  
          <img src="ultropia1.png"/>

          <Typography variant="h6" className={classes.title}>
            
          </Typography>

          <Button color="inherit">Get in Touch</Button>
          <Button color="inherit">About us</Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}


