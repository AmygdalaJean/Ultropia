import React from "react";
import "./../static/App.css";
import {  makeStyles, } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";

import Divider from '@mui/material/Divider';
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
        <div className={classes.instructor}>
            <Grid container spacing={2} >
                <Grid item xs={4}  className={classes.vert_center}>
                    <img src={image} style={{width:250, height:250, borderRadius:250, float:'left'}}
                    alt="e"/>
                </Grid>
                <Grid item xs={8}  className={classes.vert_center}>
                    <div style={{textAlign:'justify'}}>
                        <Typography variant='h4'>
                            <b>{header}</b>
                        </Typography>
                        <Divider/>
                        <Typography variant='h5' className={classes.subtext}>
                            {description}
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}


export default Header;