import React from "react";
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box'
import EntryCard from "./Components/EntryCard"
import VertBar from "./Components/VertBar"
import Container from '@material-ui/core/Container';
import ProductValue from './Components/ProductValue'
import Science from './Components/Science';
import VideoDemos from './Components/VideoDemos';
import grey from '@material-ui/core/colors/grey';
import ExplainProduct from "./Components/ExplainProduct";
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import HumanRight from "./Components/HumanRight";

import bgImg from './Components/Images/bgImg1.png'

import WeDoItBetter from "./Components/WeDoItBetter";

import BestOption from "./Components/BestOption";
import FooterBar from './Components/FooterBar'

import useWindowDimensions from './Components/WindowSize';
import "./static/App.css";



const useStyles = makeStyles((theme) => ({
 

}));

function Header({}) { 
  const classes = useStyles();

  return (
    <div >
        <Typography variant="overline" >
            <div className={classes.heading} >
                Introducing the <b>Ultramatic</b>;
            </div>
        </Typography> 
    </div>
        
  );
}

export default Header;