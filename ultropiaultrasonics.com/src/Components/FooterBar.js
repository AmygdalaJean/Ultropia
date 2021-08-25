import React from "react";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container'

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

import axios from 'axios'

import "./../static/App.css";

let inMail = ""
let inNote = ""

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      marginBottom: '0px',
      margin:'0px',
      borderRadius: 40/ 2
    },
    superheading: {
        textAlign: 'center',
        padding: '35px',
    }
  }));


function FooterBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openResp, setOpenResp] = React.useState(false);
  

  const handleResp = () => {
      setOpenResp(true)
    };
  
    const handleExitResp = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpenResp(false);
    };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    inMail = ""
    inNote = ""
  }; 

  const handleSubmit = (event) => {
      handleResp()
      axios.post('http://localhost:3001/ultropia', {email: inMail, note: inNote})
      console.log(inMail)
      console.log(inNote)
      handleClose()
  };

  const handleChangeEmail = (event) => {
      inMail = event.target.value
  };

  const handleChangeNote = (event) => {
      inNote = event.target.value
  };

  return (
    <div className={classes.root} style={{}}>
        <div className={classes.root}>
            <Snackbar open={openResp} autoHideDuration={3000} onClose={handleExitResp}
                        anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                    }}>
                <Alert onClose={handleExitResp} severity="success">
                    Thank you!
                </Alert>
            </Snackbar>
        </div>
        <Paper className={classes.paper} elevation={5}>
            <div style={{paddingLeft:'160px', paddingRight:'160px', textAlign:'center'}}>
                <Typography variant='h4' style={{textAlign:'center'}}>
                    <div>Questions? Comments?</div>
                    <div>What to get in touch?</div>
                </Typography>
                <Grid container spacing={2} style={{paddingTop:'25px'}}>
                        <Grid item xs={6} style={{textAlign:'left'}}>
                            <Paper elevation={5} className={classes.paper}>
                                <Typography variant='h6' style={{textAlign:'center', paddingBottom:'25px'}}>
                                    Find more information about us here!
                                </Typography>
                                <Button fullWidth color='secondary' variant='contained' href='https://www.linkedin.com/company/ultropia/' 
                                // style={{fontSize:16}}
                                >
                                    About us
                                </Button>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} style={{textAlign:'right'}}>
                            <Paper elevation={5} className={classes.paper}>
                                <Typography variant='h6' style={{textAlign:'center', paddingBottom:'25px'}}>
                                    Leave us a message and your email here!
                                </Typography>
                                <Button fullWidth variant="contained" color="secondary" onClick={handleClickOpen} 
                                // style={{fontSize:16}}
                                >
                                    Get in Touch
                                </Button>
                            </Paper>
                        </Grid>
                    </Grid>
            </div>
        </Paper>
            

              
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Interested?</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Want to show your support and follow the project? 
                    Join our mailing list to get periodic updates! 
                </DialogContentText>

                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    onChange={handleChangeEmail}
                />

                <TextField                    
                    margin="dense"
                    id="name"
                    label="Have something to say?"
                    type="email"
                    fullWidth
                    multiline
                    onChange={handleChangeNote}
                />

            </DialogContent>
            <DialogActions>
                <ButtonGroup color="secondary" variant="contained" > 
                    <Button onClick={handleClose} color="primary" >
                        Close
                    </Button>
                    <Button onClick={handleSubmit} >
                        Subscribe
                    </Button>
                </ButtonGroup>
            </DialogActions>
        </Dialog>
        
    </div>
  );
}

export default FooterBar;