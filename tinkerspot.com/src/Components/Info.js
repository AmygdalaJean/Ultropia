import React from "react";
import Paper from '@material-ui/core/Paper'
import { Typography } from "@material-ui/core";

import "./../static/App.css";

function Header() {
    return (        
        <Paper style={{backgroundColor: 'white', }}>
            <Typography variant="h3"style={{padding:'50px', textAlign:'center'}}>
                Specialized Classes and Workshops for a vieraity of Disciplines.
            </Typography>
        </Paper>  
    );
}


export default Header;