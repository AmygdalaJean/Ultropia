import React from "react";

import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'

import Info from './Info'
import Form from './Form'
import KnowMore from './KnowMore'

import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'





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
    
    <div >
      <Container maxWidth='lg' >
        <div style={{paddingTop:100}}>
          <Info/>
          <KnowMore/>
          <Divider style={{marginBottom:100}}/>
          <Form/>
        </div>
      </Container>
    </div>



      
  );
}



export default Home;