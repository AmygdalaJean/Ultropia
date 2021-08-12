import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbarStyle: {
    minHeight: 150,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



export default function TitleBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar className={classes.toolbarStyle}>

          <Typography variant="h6" className={classes.title}></Typography>

          <ButtonGroup variant="contained" color="primary" orientation="vertical">
            <Button>
              Get in Touch
            </Button>
            <Button>
              About us
            </Button>
          </ButtonGroup>

        </Toolbar>
      </AppBar>
    </div>
  );
}


