import React from "react";
import Paper from '@material-ui/core/Paper'

import Button from '@material-ui/core/Button';
import "./../static/App.css";
import { Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid'
import { TextField } from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';

import TimeTable from './TimeTable'
import Catagories from './Catagories'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    input: {
        marginTop:'30px',
    },
}));

  


function Header() {
    const classes = useStyles();

    return (
        <Paper style={{backgroundColor: 'white', padding:'20px'}}>
            <Typography variant='h4' align='center'>
                What do you want from TinkerSpot?
            </Typography>
            <Grid container spacing={3}>

                <Grid item xs={6}> 
                    <TextField
                        className={classes.input}
                        required
                        margin="dense"
                        variant="standard"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        onChange={console.log('changed')}
                    />

                    <TextField
                        className={classes.input}                    
                        margin="dense"
                        variant="standard"
                        id="name"
                        label="Country/State, City"
                        type="region"
                        fullWidth
                        multiline
                        onChange={console.log('changed')}
                    />
                </Grid>                

                <Grid item xs={6}> 
                    <Catagories/>
                </Grid>
                
            </Grid>
            <Grid container spacing={3} style={{marginTop:'35px'}}>

                <Grid item xs={12}>
                    <TimeTable/> 
                </Grid>

            </Grid>
            <Grid container spacing={3}>

                <Grid item xs={6}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={console.log('button')} 
                        style={{float:'left'}}
                    >
                        Clear
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        onClick={console.log('button')} 
                        style={{float:'right'}}
                    >
                        Submit
                    </Button>
                </Grid>

            </Grid>
        </Paper>    
    );
}


export default Header;



  