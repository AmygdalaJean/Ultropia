import React from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Logo from './Images/ultropia2.png'

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

                </Grid>
                
                <Grid item xs={8}>

            
                <Paper style={{borderRadius:400/2, width:'1000px', alignSelf:'center'}}>
                    <img src={Logo} style={{
                        width:'100%', 
                        alignSelf:'center', 
                        padding:'25px',
                        paddingLeft:'100px',
                        paddingRight:'100px'
                        }}/>
                </Paper>
                    {/* <Paper className={classes.paper} >
                        <Container align="center"  > 

                            
                            
                            

                            <Typography variant="h3"  >
                                Ultropia
                            </Typography>

                            <Typography variant="p" color="textSecondary">
                                Revolutionizing how We Do Laundry
                            </Typography>

                        </Container>
                    </Paper>             */}
                </Grid>   
                <Grid item xs={2}></Grid>
            </Grid>
        </div>

    );
  }
  
  export default EntryCard;
