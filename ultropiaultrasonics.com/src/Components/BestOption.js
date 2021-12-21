import React from "react";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Container } from "@material-ui/core";
import Header from "./Header";
import GetInTouch from "./GetInTouch";
import { Button, ButtonGroup } from "@material-ui/core";

import "./../static/App.css";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heading:{
    paddingTop:25,
    paddingBottom:0,
    fontSize:50,
    textAlign:'center', 
    backgroundColor:'#ffc107',
    [theme.breakpoints.down(950)]:{
        fontSize:35
    },
    gridObj:{
      height: 500,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
  },
    [theme.breakpoints.down(750)]:{
        fontSize:25,
        paddingBottom:5,
    },
    [theme.breakpoints.down(550)]:{
        fontSize:18,
        paddingBottom:5,
    }
},
    root: {
        flexGrow: 1,
        marginTop:25
      },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      marginBottom: '0px',
      borderRadius: 40/ 2,
      marginBottom:25
    },
    superheading: {
        textAlign: 'center',
        paddingTop: '35px',
    },    
    buttonClass:{
      paddingTop:25,
      textAlign:'center'
  },
    callText: {
      fontSize:18,
      [theme.breakpoints.down(750)]:{
          fontSize:15
      },
      [theme.breakpoints.down(550)]:{
        fontSize:12
    }
    }
}));

function Content() {
  const classes = useStyles();

  return (
    <div  >
       <Header text="the ultramatic is the answer" emphasis=""/>
    
      <Container maxWidth="sm" className={classes.root} id="WeDoItBetter">
        

              <Typography variant='h4' style={{textAlign:'justify'}}>

                  <div className={classes.callText} style={{paddingBottom:20}}>
                    The future requires a better way to clean our clothes. Traditional washing machines 
                    are inefficient and outdated, and neither solve the problems 
                    of today, or tomorrow. 
                  </div>
                  <div className={classes.callText}>
                    Using less water, less energy, less space, being easier to use, transport, 
                    and to trust, <b>the Ultramatic is the solution that 
                    we need. </b>
                </div>
              </Typography>

            
            <div   className={classes.buttonClass}> 
            <Typography variant='h6' style={{textAlign:'justify', paddingBottom:10}} className={classes.callText}>
                        Learn more about us and what we do here! Get in contact if you have Questions!
                    </Typography>
                        <ButtonGroup>
                            <div style={{paddingRight:10}}>
                                <GetInTouch />
                            </div>
                            <div >
                                <Button 
                                    disableElevation  
                                    variant="contained" 
                                    color="secondary" 
                                    orientation="horizontal"  
                                    href='https://www.linkedin.com/company/ultropia/' 
                                >
                                    More About us
                                </Button>
                            </div>
                        </ButtonGroup>
                    </div>
               

      </Container>
    </div>
  );
}

export default Content;