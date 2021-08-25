import React from "react";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ReactPlayer from "react-player"

import "./../static/App.css";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
    },
    superheading: {
        textAlign: 'center',
        padding: '150px',
        paddingTop: '35px',
        paddingBottom: '35px',
    },
    subHeading: {
        textAlign: 'center',
        padding: '150px',
        paddingTop: '50px',
        paddingBottom: '50px',
    }
}));

function WhyUltramatic() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

    </div>
  );
}

export default WhyUltramatic;