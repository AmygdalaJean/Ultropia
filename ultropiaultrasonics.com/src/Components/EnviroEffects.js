import React from "react";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';



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
        
    }
}));

function Content() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Paper className={classes.paper} elevation={5}>

            <Typography variant="h3" className={classes.superheading}>
                <div>We Need to <b>Change</b> How We Wash Our Clothes</div>
            </Typography >
        </Paper>
    </div>
  );
}

export default Content;