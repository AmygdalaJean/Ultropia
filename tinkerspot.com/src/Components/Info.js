import React from "react";
import Paper from '@material-ui/core/Paper'
import { Grid, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container"

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
        

        <Container maxWidth="lg" style={{paddingBottom:100, }}>
            <Grid container spacing={2} >
                <Grid item xs={5} className={classes.center_vertically}>
                    <Typography variant="h3" style={{fontSize:45, textAlign:'center',}}>
                        Classes taught by <span style={{ color:'#ff7300'}} >professionals</span>, 
                        workshops lead by <span style={{ color:'#ff7300'}} >specialists</span>.
                    </Typography>
                </Grid>
                <Grid item xs={7} className={classes.center_vertically}>
                    <Typography className={classes.paragraph}>
                        TinkerSpot is a community centered workshop education company, which 
                        provides short courses on practical skills - machining, welding, 
                        computer security, electrical work, ect.. Instructors are hired right
                        from local communities and courses are scheduled around when their 
                        attendants are available, not vice versa. 
                    </Typography>
                    <Typography className={classes.paragraph} style={{paddingTop:25}}>
                        <b>TinkerSpot is soon to be in operation!</b> If you want TinkerSpot to open
                        in your town let us know by leaving us your information below! 
                    </Typography>
                </Grid>
            </Grid>
        </Container> 

            
    );
}


export default Header;