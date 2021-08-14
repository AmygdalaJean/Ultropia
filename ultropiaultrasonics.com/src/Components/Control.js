import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import axios from 'axios'

let inMail = ""

export default function Control() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      inMail = ""
    };

    const handleSubmit = (event) => {
        console.log(inMail)
        axios.post('http://localhost:3001/ultropia', {email: inMail})
        setOpen(false);
        inMail = ""
    };

    const handleChange = (event) => {
        inMail = event.target.value
    };
  return (

    <ButtonGroup variant="contained" color="secondary" orientation="vertical">
        <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Get in Touch
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We will send updates
                    occasionally.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Subscribe
                    </Button>
            </DialogActions>
        </Dialog>
        <Button >
        About us
        </Button>
    </ButtonGroup>
        
  );
}



