import React from "react";
import Paper from '@material-ui/core/Paper'
import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container"

import "./../static/App.css";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    paragraph:{
        marginTop:25,
        fontSize:18
    },
  }));

function Header() {
    const classes = useStyles();
    return (   
        
        <Paper style={{paddingTop:'50px', paddingBottom:50, borderRadius:25}} variant='outlined' >
            <Container maxWidth="md">
                <div >
                    <div>
                        <Typography variant="h3">
                            Classes taught by professionals, workshops lead by specialists;
                        </Typography>
                    </div>
                    <div >
                        <Typography className={classes.paragraph}>
                            TinkerSpot is a community centered workshop education company, which 
                            provides short courses on practical skills - machining, welding, 
                            computer security, electrical work, ect.. Instructors are hired right
                            from local communities and courses are scheduled around when their 
                            attendants are available, not vice versa. 
                        </Typography>
                        <Typography className={classes.paragraph}>
                            <b>TinkerSpot is soon to be in operation!</b> If you want TinkerSpot to open
                            in your town let us know by leaving us your information below! 
                        </Typography>
                    </div>
                </div>
            </Container> 
        </Paper>  
            
    );
}


export default Header;