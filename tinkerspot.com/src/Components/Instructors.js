import React from "react";
import "./../static/App.css";
import {  makeStyles, } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";

import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import { Typography } from "@material-ui/core";

import codyimg from './Images/tinkerlogo.png'
import wadeimg from './Images/WadeCappa2.jpg'
import Human from './Human'

const useStyles = makeStyles((theme) => ({

}));

function Header({theme}) {
    const classes = useStyles();
    return (
        <div>
            <Paper style={{padding:'50px', textAlign:'center'}} variant='outlined'>
                <Container maxWidth='md'>
                    <div>
                        <Typography variant="h3" >
                            Want to know more?
                        </Typography>
                    </div>                
                </Container>
            </Paper>


            <Human
                image = {wadeimg}
                header= {"Wade Cappa; B.S in Computer Science."}
                description = {"Interested in the computer applications of statistics,  and is currently working at Deven See Laboratory as a Software Engineer. "}
            />

            <Human
                image = {codyimg}
                header= {"By 2025 half the world’s population will be living in a water stressed area"}
                description = {"But the average household washing machine uses 5,605 gallons of water each year."}
            />

            <Human
                image = {codyimg}
                header= {"By 2025 half the world’s population will be living in a water stressed area"}
                description = {"But the average household washing machine uses 5,605 gallons of water each year."}
            />

            <Human
                image = {codyimg}
                header= {"By 2025 half the world’s population will be living in a water stressed area"}
                description = {"But the average household washing machine uses 5,605 gallons of water each year."}
            />
            
        </div>
    );
}


export default Header;