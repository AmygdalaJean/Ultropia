import React from "react";
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import { Grid, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container"
import { Divider } from "@material-ui/core";

import "./../static/App.css";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    paragraph:{
        fontSize:18
    },
    center_vertically: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
  }));

function Header() {
    const classes = useStyles();
    return (   
        

        <Container maxWidth="lg" style={{paddingBottom:100}} >
            <Grid container spacing={2} >
                <Grid item xs={5} className={classes.center_vertically}>
                    <Typography variant="h3" style={{fontSize:45, textAlign:'center'}} >
                        Want to know more about the team?  
                    </Typography>
                </Grid>
               
                <Grid item xs={7} className={classes.center_vertically} >
                    <Typography className={classes.paragraph}>
                        Find out who we are and why we want to build a more robust and flexible practical
                        education program! 
                    </Typography>
                    <div style={{textAlign: 'left',  marginTop:20, marginBottom:5}}> 
                        <a href="http://localhost:3000/about" >
                            <Button 
                                variant="contained" 
                                color="secondary"
                                >
                                    Learn more about us!
                            </Button>   
                        </a>
                    </div>
                </Grid>
            </Grid>
        </Container> 

            
    );
}


export default Header;