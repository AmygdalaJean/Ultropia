import React from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import "./../static/App.css";

function Arg(props) {

    if (props.alignImage==="left"){
        return (
            <div>
              <Typography variant="h6">
              <u>{props.heading}</u>
              </Typography>
              <Grid container spacing={2}>
              <Grid item xs={5}>
                  <img className="aboutProductImg" src={props.image} alt="product" align="right"/>
              </Grid>
              <Grid item xs={7}>            
                  <Typography align="justify">
                      {props.body}
                  </Typography>
              </Grid>

              </Grid>
          </div>
      
        );
    }
    else {
        return (
            <div>
              <Typography variant="h6">
              <u>{props.heading}</u>
              </Typography>
              <Grid container spacing={2}>
              <Grid item xs={7}>            
                  <Typography align="justify">
                      {props.body}
                  </Typography>
              </Grid>
              <Grid item xs={5}>
                  <img className="aboutProductImg" src={props.image} alt="product" align="right"/>
              </Grid>
              </Grid>
          </div>
      
        );
    }

  
}

export default Arg;