import React from "react";
import Content from "./Components/Content";
import { makeStyles } from '@material-ui/core/styles';
import VertBar from "./Components/VertBar"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import "./static/App.css";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() { 
  const classes = useStyles();

  return (

      <div className={classes.root}>
        <Grid container spacing={3}>

          <Grid item xs={1}>
            
            <VertBar/> 
        
          </Grid>

          <Grid item xs={11}>

            <Container maxWidth="md" >          
              <Content/>
            </Container>   

          </Grid>

        </Grid>
      </div>      
      
  );
}

export default App;