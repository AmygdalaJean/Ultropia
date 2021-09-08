import React from "react";
import Paper from '@material-ui/core/Paper'

import "./../static/App.css";
import { Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid'

import Logo from './Images/tinkerLogoEdit2.png'

function Header() {
    return (
        <Paper style={{backgroundColor: 'white'}}>
            <div style={{textAlign: 'center', float: 'center', padding:'2.5%'}}>    

                    <img src={Logo} style={{maxWidth:'800px', width:'50%'}}/>                 
            </div>
        </Paper>    
    );
}


export default Header;