import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
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
      padding: theme.spacing(2),
      margin: '100px',
      marginTop:'50px',
      marginBottom:'0px',
      backgroundColor: 'gold',
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
        padding: '50px',
        paddingTop: '20px',
        paddingBottom: '20px',
        textAlign: 'center',
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
                        <Typography variant="h5">
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
                    <img src={prototypeDiagram} />
                </div>
            </Container>
            


          {/* <Grid container spacing={2}>
            <Grid item xs={6}>     
                <Typography variant="h6" className={classes.topText}>      
                    
                    <div className={classes.listItem} >
                        <div style={{paddingBottom: '5px'}}>
                            <strong><i>Say goodbye to your washer and dryer!</i></strong>
                        </div>

                        The <i>Ultromat</i> is a two-in-one washing and drying machine that uses
                        a high frequency ultrasonic emitter to clean, sanitize, and dry clothing
                        faster and more efficent than ever possible before.
                    </div>

                    <div className={classes.listItem} >
                        Spend less time doing clothes! Spend less money on electricity and water! 
                        The Ultramat can finally replace your old outdated washing machine that was
                        designed in the 70s, and update how we all wash our clothes.
                    </div>

                </Typography>      
            </Grid>
            <Grid item xs={6}>
                <img src={prototypeDiagram} style={{ alignSelf: 'center'}}/>
            </Grid>
        </Grid> */}
    </Typography>

    </div>
  );
}

export default Content;