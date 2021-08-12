import React from "react";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'

import "./../static/App.css";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
    },
}));

function Content() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Paper className={classes.paper} elevation={5}>
        <Typography >
          <Typography variant="h3">
            <b>Our Product:</b>
          </Typography >
          <Grid container spacing={2}>
            <Grid item xs={8}>     
                <Typography variant="h6" >
                    <u>Lorem ipsum dolor sit amet, consectetur adipiscing elit;</u>
                </Typography>

                <Typography >      
                    <List align="justify">
                        <ListItem>
                        <ListItemText>
                            Curabitur sed enim a 
                            nunc porta vestibulum eu in felis. Vestibulum ullamcorper lacus et ipsum condimentum 
                            facilisis. Donec vel purus mauris. Nulla facilisi. 
                        </ListItemText> 
                        </ListItem>
                        <ListItem>
                            Vivamus bibendum imperdiet 
                            magna at euismod. Morbi a neque ultricies, pulvinar metus non, vehicula arcu. 
                            Duis sit amet aliquam est, rutrum convallis lorem. 
                            Donec vestibulum erat mauris, 
                            sed sollicitudin mauris consequat eu.
                        </ListItem>
                    </List>

                    </Typography>      
                </Grid>
            </Grid>

          <Grid container spacing={2}>
            <Grid item xs={8}>     
                <Typography variant="h6" >
                    <u>Nulla facilisi. Integer ullamcorper leo at ligula volutpat mollis;</u>
                </Typography>

                <Typography>      
                    <List>
                        <ListItem>
                            Nunc posuere in. Nunc pretium metus orci, in facilisis eros tristique at. 
                            Curabitur tristique ante sit amet ullamcorper aliquam. Quisque sed 
                            accumsan magna. Interdum et malesuada fames ac ante ipsum primis in 
                            faucibus. 
                        </ListItem> 
                        <ListItem>
                            In ac sem dolor. Vestibulum cursus, diam sed sodales semper, n
                            unc lorem vehicula velit, id auctor elit tortor at elit. Nam at est non 
                            enim dignissim tempor. Nam et bibendum nibh. 
                        </ListItem>
                        <ListItem>
                            Integer consequat non magna 
                            sed gravida. Nunc ullamcorper dolor eu lectus bibendum blandit. Nulla finibus 
                            vehicula risus, sed porta nisl vehicula at. Aliquam id velit et tellus 
                            sodales sollicitudin. Aliquam ultrices quam at velit porta, sodales interdum 
                            orci lobortis.
                        </ListItem>
                    </List>

                    </Typography>      
                </Grid>
            </Grid>

            <Grid container spacing={2}>
            <Grid item xs={8}>     
                <Typography variant="h6" >
                    <u>In metus odio, efficitur commodo tellus rhoncus, ornare pharetra justo;</u>
                </Typography>

                <Typography>      
                    <List>
                        <ListItem>
                        viverra nibh tortor, finibus feugiat ex mollis quis. Maecenas dictum tellus pharetra 
                        placerat sodales. Mauris pulvinar metus orci, nec lacinia magna accumsan at. Aliquam 
                        vel accumsan mauris. Proin non sagittis dui. Nunc consequat elementum quam sit amet 
                        mollis. Etiam imperdiet sapien ac felis scelerisque pulvinar. 
                        </ListItem> 
                        <ListItem>
                        Sed malesuada elit 
                        turpis, placerat vestibulum elit vestibulum eget. Suspendisse quis dolor 
                        convallis, accumsan elit quis, euismod elit. 
                        </ListItem>
                        <ListItem>
                        Cras luctus maximus metus. Phasellus 
                        in est lobortis, cursus lectus quis, hendrerit est. Fusce id sem non est suscipit 
                        faucibus placerat sit amet felis. Integer non sem sem. Nunc blandit ex dui, eget 
                        tempus tortor tincidunt et.
                        </ListItem>
                    </List>

                    </Typography>      
                </Grid>
            </Grid>


            </Typography>             
          
        </Paper>
    </div>
  );
}

export default Content;