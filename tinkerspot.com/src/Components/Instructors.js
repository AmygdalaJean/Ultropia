import React from "react";
import "./../static/App.css";
import {  makeStyles, } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";

import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import { Typography } from "@material-ui/core";

import temp from './Images/tinkerlogoTRANSPARANT.png'
import aubry from './Images/Aubry_HEadshot.PNG'
import wadeimg from './Images/WadeCappa2.jpg'
import Cody from './Images/cody.JPG'
import Amy from './Images/amy2.jpg'

import Human from './Human'

const useStyles = makeStyles((theme) => ({

}));

function Header({theme}) {
    const classes = useStyles();
    return (
        <div>


            <div style={{textAlign:'center',borderRadius:50, paddingTop:0}} variant='outlined'>


                <Human
                    image = {Cody}
                    header= {"Cody Birkland"}
                    description = {"Cody has always been fascinated by technology. He’s been taking things apart for as long as he can remember, and finds tremendous joy in fixing and repurposing old tech. His background includes work as an industrial electronics technician, mentoring students in robotics, and engineering research. Teaching tangible skills to others is a passion of his, and his favorite subject areas include analog circuits, robotics, and designing printed circuit boards."}
                />

                <Human
                    image = {Amy}
                    header= {"Amy Swanson"}
                    description = {"Amy is a passionate visionary who is driven to create technology that brings a lasting, positive impact to people’s lives. She earned a B.S in electrical engineering from Eastern Washington University, where she applied her mix of technical and management skills to kickstart the University’s student branch of the Institute of Electrical and Electronics Engineers. She excels at connecting people with the resources they need, and working with them to see projects through to completion. "}
                />

                <Human
                    image = {aubry}
                    header= {"Aubry Birkland"}
                    description = {"Aubry is a technical mind, with a passion for teaching and learning. His technical background includes construction, machining, maintenance, and innovative design for low cost machines. When he’s not building hardware he thoroughly enjoys hosting role playing games and designing campaigns. He also is skilled in 3D printing (SLA) for making miniatures, and is a skilled model painter. He is currently participating in training that is part of becoming a recreational therapist, using games and stories to build people up, socially and mentally, to help recover from hardship."}
                />

                <Human
                    image = {wadeimg}
                    header= {"Wade Cappa"}
                    description = {"Wade is deeply interested by both statistics and computer science, with industry expereince in both fields. Currently he is attending Washington State University for a B.S in Computer Science. "}
                />

            </div>
            
        </div>
    );
}


export default Header;