import React from "react";
import "./../static/App.css";
import {  makeStyles, } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";

import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import { Typography } from "@material-ui/core";

import codyimg from './Images/tinkerlogo.png'

const useStyles = makeStyles((theme) => ({
    instructor:{
        padding:15,
        paddingRight:100,
        marginTop:50,
        borderRadius: 400/ 2,
        
    },
    vert_center:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    subtext:{
        paddingTop:10,
    }
}));

function Header({image, header, description}) {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.instructor} >
                <Grid container spacing={2} >
                    <Grid item xs={3}  className={classes.vert_center}>
                        <img src={image} style={{width:200, height:200, borderRadius:400/2, float:'left'}}
                        alt="e"/>
                    </Grid>
                    <Grid item xs={9}  className={classes.vert_center}>
                        <div>
                            <Typography variant='h4'>
                                {header}
                            </Typography>
                            <Typography variant='h5' className={classes.subtext}>
                                {description}
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}


export default Header;