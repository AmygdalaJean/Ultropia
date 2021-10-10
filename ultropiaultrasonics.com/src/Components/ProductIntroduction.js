import React from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'

import prototypeDiagram from './Images/smallprototypeCr.png'

import "./../static/App.css";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
    paper: {
        [theme.breakpoints.up(750)]: {
            padding: theme.spacing(2),
            margin: '100px',
            marginTop:'50px',
            marginBottom:'0px',
            backgroundColor: 'gold',
        },
        [theme.breakpoints.down(750)]: {
            padding: theme.spacing(2),
            margin: '5px',
            marginTop:'50px',
            marginBottom:'0px',
            backgroundColor: 'gold',
        }

    },
    listItem: {
        paddingTop: '25px',
        paddingBottom: '25px',
        textAlign: 'justify',
    },
    horizontal: {
        marginTop: '15px',
        marginBottom: '15px',
    },
    tableItem: {
        padding: '85px',
        textAlign: 'center',
    },
    subheading: {
        paddingTop: '20px',
        textAlign:'center'
    },
    topText: {
        padding: '25px',
        textAlign: 'justify'
    },
    img: {
        width: '100%',
        maxWidth: '300px',
        height: 'auto',
        alignSelf: 'center',
    },
    largeText: {
        fontSize:30,
        padding: '50px',
        paddingTop: '20px',
        paddingBottom: '20px',
        textAlign: 'center',
        [theme.breakpoints.down(600)]: {
            padding:'10px',
            fontSize:20
        },
    },
    text:{
        fontSize:28,
        [theme.breakpoints.down(600)]: {
            fontSize:20
    },
},

}));

function Content() {
  const classes = useStyles();

  return (
    <div >
        
        <Typography >
            <Typography variant="h4" className={classes.subheading} >
                {/* <b>What is it?</b> */}
            </Typography>

            <Container>
                <Paper className={classes.paper} style={{borderRadius:20}} elevation={5}>
                    <div className={classes.largeText} >
                        <Typography variant="h5" className={classes.text}>
                            <div style={{paddingBottom: '5px'}}>
                                <strong><i>Say goodbye to your washer and dryer!</i></strong>
                            </div>

                            The <i>Ultramatic</i> is a two-in-one washing and drying machine that uses
                            a high frequency ultrasonic emitter to clean, sanitize, and dry clothing
                            faster and more efficient than ever possible before.
                        </Typography>
                        
                    </div>                    
                </Paper>
                <div style={{ textAlign:'center' }}>
                    <img src={prototypeDiagram} alt="Diagram of the current Prototype"/>
                </div>
            </Container>
            


    </Typography>

    </div>
  );
}

export default Content;