import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";

import "./../static/App.css";

const useStyles = makeStyles((theme) => ({
    backBlock:{
        backgroundColor:'#3f3f40',
        paddingTop:50,
        paddingBottom:50,
        textAlign:'center'
    }
  }));

function Back() {
    const classes = useStyles();
    return (
        <div className={classes.backBlock}> 
            <a href="https://tinker-spot.com/" >      
                <Button
                    variant="contained" 
                    color="secondary"
                >
                    Return
                </Button>
            </a>
        </div>

    );
}


export default Back;