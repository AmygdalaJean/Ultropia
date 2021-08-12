import React from "react";
import AboutProduct from './AboutProduct';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import EnviroEffects from './EnviroEffects'

import "./../static/App.css";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
    },
}));

function Content() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box m={0} pt={5}>              
        <AboutProduct/>
      </Box>

      <Box m={0} pt={8}>              
        <EnviroEffects/>
      </Box>
    </div>
  );
}

export default Content;