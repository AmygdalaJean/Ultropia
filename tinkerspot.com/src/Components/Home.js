import React from "react";

import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'

import Info from './Info'
import Form from './Form'





const custTheme = createTheme({
  palette: {
    primary: {
      light: '#757575',
      main: '#3f3f40',
      dark: '#dead4e',
      contrastText: '#000',
    },
    secondary: {
      light: '#ffeb3b',
      main: '#ff7300',
      dark: '#dead4e',
      contrastText: '#000',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
})

const useStyles = makeStyles((theme) => ({

}));

function Home() { 
  const classes = useStyles();
  
  return (
    
    <div>

    <Container maxWidth='lg' style={{paddingTop:50}}>
    <Info/>
    </Container>

    <Container maxWidth='lg' style={{paddingTop:50, paddingBottom:25}}>
    <Form/>
    </Container>


    </div>



      
  );
}



export default Home;