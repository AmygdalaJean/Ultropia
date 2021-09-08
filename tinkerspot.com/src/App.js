import React from "react";

import grey from '@material-ui/core/colors/grey';
import amber from '@material-ui/core/colors/amber';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'

import {Helmet} from 'react-helmet';

import Header from './Components/Header';
import Info from './Components/Info'
import Form from './Components/Form'

import "./static/App.css";

const custTheme = createTheme({
  palette: {
    primary: grey,
    secondary: amber
  }
})

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  overlay: {
    position: 'absolute', left: '50%', top: '25%',
    transform: 'translate(-60%, -25%)'
 },
  content: {
    width: '100%',
    marginTop: '100px',
    padding: '25px',
    borderRadius: 80/ 2
  },
}));

function App() { 
  const classes = useStyles();

  return (
    <ThemeProvider theme={custTheme}>
      <Helmet>
        <style>{'body { background-color: lightblue; }'}</style>
      </Helmet>

      <Header/>

      <Container maxWidth='md' style={{paddingTop:'100px'}}>
        <Info/>
      </Container>

      <Container maxWidth='md' style={{paddingTop:'100px'}}>
        <Form/>
      </Container>
      
    </ThemeProvider>
      
  );
}

export default App;