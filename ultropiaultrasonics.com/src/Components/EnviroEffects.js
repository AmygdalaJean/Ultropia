import React from "react";
import HumanRight from './HumanRight'
import WeDoItBetter from './WeDoItBetter'
import BestOption from './BestOption'
import { Container } from "@material-ui/core";

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
      <HumanRight />
      <Container maxWidth='md'>
        <WeDoItBetter />
      </Container>
      <BestOption/>
      
     
      
      
    </div>
  );
}

export default Content;