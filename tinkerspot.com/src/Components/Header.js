import React from "react";
import Paper from '@material-ui/core/Paper'

import "./../static/App.css";
import { Button } from "@material-ui/core";

import Logo from './Images/tinkerSpotLogo.png'


function Header({theme, route_function, current_route}) {
    route_function()
    if (current_route === "/about")
    {
        return (
            <Paper style={{backgroundColor: [theme.palette.primary.main]}}>
                <div style={{textAlign: 'center', float: 'center', padding:'2.5%', paddingBottom:10}}>   
                    <img src={Logo} style={{maxWidth:'800px', width:'50%', marginTop:30}}/> 
                </div>
                <div style={{textAlign: 'center', float: 'center', paddingBottom:15}}> 
                    <a href="http://localhost:3000/" >
                        <Button 
                            variant="contained" 
                            color="secondary"
                            >
                                Return Home
                        </Button>   
                    </a>
                </div>
            
            </Paper>    
        );
    }
    else 
    {
        return (
            <Paper style={{backgroundColor: [theme.palette.primary.main]}}>
                <div style={{textAlign: 'center', float: 'center', padding:'2.5%', paddingBottom:10}}>   
                    <img src={Logo} style={{maxWidth:'800px', width:'50%', marginTop:30}}/> 
                </div>
                <div style={{textAlign: 'center', float: 'center', paddingBottom:15}}>  
                    <a href="http://localhost:3000/about" >
                        <Button 
                            variant="contained" 
                            color="secondary"
                            >
                                More about us
                        </Button>   
                    </a>
                </div>
            
            </Paper>    
        );
    }
    
}


export default Header;