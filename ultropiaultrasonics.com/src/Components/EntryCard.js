import React from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
    },
}));

function EntryCard() {
    const classes = useStyles();

    return ( 
        <div className={classes.root}>
            <Grid container spacing={3}>

                <Grid item xs={2}>

                </Grid><Grid item xs={8}>
                    <Paper className={classes.paper} >
                        <Container align="center" style={{padding: 25}} > 

                            <Typography variant="h3"  >
                                Lorem ipsum dolor sit amet 
                            </Typography>

                            <Typography variant="p" color="textSecondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography>

                        </Container>
                    </Paper>            
                </Grid>   
                <Grid item xs={2}></Grid>
            </Grid>
        </div>

    );
  }
  
  export default EntryCard;
