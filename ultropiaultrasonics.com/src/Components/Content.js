import React from "react";
import AboutProduct from './AboutProduct';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import EnviroEffects from './EnviroEffects'

import "./../static/App.css";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
}));

function Content() {
  const classes = useStyles();

  return (
    <div className={classes.root}>


  
    </div>
  );
}

export default Content;