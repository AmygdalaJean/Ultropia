import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

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

let inMail = ""
let inNote = ""

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 600,
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));


export default function Control() {
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

    <ButtonGroup fullWidth variant="contained" color="secondary" orientation="vertical"  >
        <Button variant="contained" color="secondary" onClick={handleClickOpen} 
         // style={{fontSize:16}}
        >
          Get in Touch
        </Button>

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
        <Button href='https://www.linkedin.com/company/ultropia/' 
        // style={{fontSize:16}}
        >
          About us
        </Button>
    </ButtonGroup>
        
  );
}
