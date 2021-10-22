import React from "react";
import Paper from '@material-ui/core/Paper'

import "./../static/App.css";
import { Button } from "@material-ui/core";

import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";

import Logo from './Images/tinkerSpotLogo.png'
import CircleLogo from './Images/tinkerlogoTRANSPARANT.png'
import CornerLogo from './Images/cornerlogo.png'

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    header_text:{
       
    },
    introduction:{
        color:[theme.palette.secondary.main],
        fontSize:75,
    },
    subheader:{
        color:[theme.palette.secondary.main],
        fontSize:100
    },
    vert_center:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
  }));

function Header({theme, route_function, current_route}) {
    const classes = useStyles();
    route_function()

    return (
        <Paper style={{backgroundColor: [theme.palette.primary.main]}}>
            <Grid container spacing={0}>
                <Grid item xs={5} className={classes.vert_center} >
                    <div style={{textAlign:'left',}}>
                        <img src={CornerLogo} style={{maxWidth:400, width:'100%', margin:0}}/> 
                    </div>
                </Grid>
                <Grid item xs={7}  className={classes.vert_center}>
                    <div style={{textAlign: 'left', padding:'2.5%', paddingBottom:10}}> 
                        
                        <Typography variant="h1" className={classes.subheader} >
                            <i>Who We Are?</i>
                        </Typography>   
                    </div>
                </Grid>
            </Grid>

        </Paper>    
    );    
}


export default Header;