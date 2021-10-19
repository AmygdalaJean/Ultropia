import React from "react";
import Helmet from "react-helmet"

import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import About from './Components/About'

import Header from './Components/Header';
import Home from './Components/Home'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


import "./static/App.css";




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

function App() { 
  const classes = useStyles();
  const [route, setRoute] = React.useState([]);
  const changeRoute = (event) => {
      setRoute(window.location.pathname);
      console.log(route)
  };


  if (String(window.location.pathname) === "/" || String(window.location.pathname) === "/about")
  {
    console.log(window.location.pathname)
    return (
      <Router>
        <Helmet>
          <title>TinkerSpot</title>
          <meta
          name="TinkerSpot Landing Page"
          content="Get involved with TinkerSpot! Sign up for our newsletter and vote on where we should open our first workshop!"
          />
        </Helmet>
        <ThemeProvider theme={custTheme} >
          <div style={{backgroundColor: [custTheme.palette.primary.light]}}>
  
            <Header theme={custTheme} route_function={changeRoute} current_route={route}/>
  
            <Route path="/" exact component={Home}/>
  
            <Route path="/about" exact component={About}/>
  
          </div>
        </ThemeProvider>
      </Router>
        
    );
  }
  else
  {
    return (
      <Router>
        <Redirect from='*' to='/' />
        {window.location.reload(false)}
      </Router>
    )
  }
  
  
}



export default App;