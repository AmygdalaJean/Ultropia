import React from "react";
import Paper from '@material-ui/core/Paper'
import Instructors from './Instructors'
import { Container } from "@material-ui/core";

import "./../static/App.css";


function Header() {
    return (
        <div>          
            <Container maxWidth="md"  style={{paddingTop:25, paddingBottom:25}}>            
                <Instructors/>
            </Container>         
        </div>

    );
}


export default Header;