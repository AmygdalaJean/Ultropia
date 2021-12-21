import React from "react";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

import { makeStyles } from '@material-ui/core/styles';

import dryingriver from './Images/dryriogrande.jpg'
import badwater from './Images/badwaterC.jpg'
import waterwalk from './Images/waterwalkC.jpg'
import coalpower from './Images/coalpowerC.jpg'
import useWindowDimensions from './WindowSize';

const useStyles = makeStyles((theme) => ({
    heading:{
        fontSize:25,
        marginTop:35,
        marginBottom:50,
        textAlign:'center', 
        [theme.breakpoints.down(950)]:{
            fontSize:18
        },
        [theme.breakpoints.down(750)]:{
            fontSize:16
        },
        [theme.breakpoints.down(550)]:{
            fontSize:14,
        }
    },
    root: {
        flexGrow: 1,
      },
    cause: {
        backgroundColor: [theme.palette.secondary.main],
        [theme.breakpoints.up(1190)]: {
            padding: theme.spacing(2),
            textAlign: 'left',
            margin:'50px',
            marginLeft:'25px',
            marginRight:'25px',
            borderRadius: 400/ 2
        },
        [theme.breakpoints.down(1190)]: {
            padding: theme.spacing(2),
            textAlign: 'left',
            margin:'50px',
            marginLeft:'10px',
            marginRight:'10px',
            borderRadius: 400/ 2
        }
    },
    causeMobile:{
        backgroundColor: [theme.palette.secondary.main],
        padding: theme.spacing(2),
        textAlign: 'center',
        margin:'50px',

        
    },
    causeDiv: {        
        textAlign: 'justify',
        padding: '75px',
        paddingTop: '12px',
        paddingBottom: '0px',  
        paddingRight: "35%",
        [theme.breakpoints.down(750)]: {
            padding:10
        },
    },
    causeText: {   
        marginBottom:'20px',
        fontSize:18,
        [theme.breakpoints.down(750)]:{
            fontSize:15
        },
        [theme.breakpoints.down(550)]:{
            fontSize:12
        }
    },
    causeSubtitle: {
        fontSize:18,
        [theme.breakpoints.down(750)]:{
            fontSize:15
        },
        [theme.breakpoints.down(550)]:{
            fontSize:12
        }
    },
    gridObj:{
        textAlign:'center',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
}));

function Humanarg({top, bottom, image, alt}) {
  const classes = useStyles();
  const { height, width } = useWindowDimensions();

  if (width >= 950){
    return (
        <div  >
            <Paper className={classes.cause} elevation={5} style={{paddingTop:0, marginTop:0}}>
                <Grid container spacing={2}>

                    <Grid item xs={3} >
                        <img src={image} style={{width:200, height:200, borderRadius:400/2, float:'left'}}
                        alt={alt}/>
                    </Grid>

                    <Grid item xs={9} className={classes.gridObj}>
                        <div className={classes.causeDiv}>
                            <Typography variant='h3' className={classes.causeText}>
                                <b>{top}</b>
                            </Typography>
                            <Typography variant='h5' className={classes.causeSubtitle}>
                                {bottom}
                            </Typography>
                        </div>
                    </Grid>

                </Grid>
            </Paper>
              
            </div>
        );
    }
    else{
        return (
            <div > 
                <Paper className={classes.causeMobile} style={{paddingTop:0, marginTop:0}}>
                    <div className={classes.causeDiv}>
                        <Typography variant='h3' className={classes.causeText}>
                            <b>{top}</b>
                        </Typography>
                        <Typography variant='h5' className={classes.causeSubtitle}>
                            {bottom}
                        </Typography>
                    </div>
                </Paper>
            </div>
      )
  }
  
}

export default Humanarg;