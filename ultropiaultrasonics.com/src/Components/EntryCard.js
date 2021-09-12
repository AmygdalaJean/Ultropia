import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import GetInTouch from "./GetInTouch";

import Logo from './Images/ultropia2.png'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1),

      },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
    },
    logostyle:{
        width:'100%', 
        alignSelf:'center', 
        padding:'45px',
        paddingLeft:'100px',
        paddingRight:'100px',
        paddingBottom:'0px',
    }, 

}));

function EntryCard() {
    const classes = useStyles();

    return ( 
        <div className={classes.root}>


        
            <Paper style={{borderRadius:400/2, maxWidth:'1000px', alignSelf:'center'}}>
                <img src={Logo} className={classes.logostyle}/>
                <div style={{textAlign:'center', paddingBottom:'10px', paddingTop:'0px'}}>
                    <ButtonGroup    >
                        <div style={{textAlign:'left', paddingRight:'200px'}}>
                            <GetInTouch />
                        </div>
                        <div style={{textAlign:'right'}}>
                            <Button disableElevation  variant="contained" color="secondary" orientation="horizontal"  href='https://www.linkedin.com/company/ultropia/' 
                            >
                                About us
                            </Button>
                        </div>
                    </ButtonGroup>
                </div>
            </Paper>



        </div>

    );
  }
  
  export default EntryCard;
