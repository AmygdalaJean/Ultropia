import React from "react";
import Paper from '@material-ui/core/Paper'

import Button from '@material-ui/core/Button';
import "./../static/App.css";
import Container from '@material-ui/core/Container'
import { Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid'
import { TextField } from "@material-ui/core";
import axios from 'axios' 
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

import TimeTable from './TimeTable'
import Catagories from './Catagories'

import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

import { makeStyles } from '@material-ui/core/styles';

import useWindowDimensions from './WindowSize';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  


const useStyles = makeStyles((theme) => ({
    formControl: {
      
      marginTop:'27px',
      width:'100%'
    },
    input: {
      marginTop:'30px',
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
    Header:{
        fontSize:45, 
        textAlign:'center', 
        paddingBottom:20,
        [theme.breakpoints.down(750)]:{
            fontSize:35,
        },
        [theme.breakpoints.down(500)]:{
            fontSize:30,
        },
    },
  }));
  
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };


const cats = [
    'HardWare Hacking',
    'Networking Basis',
    'How your House Works',
    'You and your computer',
    'A guide to computer security',
    'Building your first circuit',

    'Other...'
];

function Form() {
    const { height, width } = useWindowDimensions();      
    const classes = useStyles();
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

  


    const handleSubmit = (event) => {
        
        if (email !== "")
        {
          handleResp()
        //   axios.post('http://localhost:3001/ultropia', {email: inMail, location: inLocation, optional: inOptional})
          console.log(email)
          console.log(location)
          console.log(optional)
          console.log(catagory)
          console.log(calender)
          
          clear_form();
        }


    };

    const clear_form = () => {
        setemail("")
        setoptional("")
        setlocation("")
        setcatagory([])
        setcalender([])
    }


    const [email, setemail] = React.useState([]);
    const handleChangeEmail = (event) => {
        setemail(event.target.value);
    };

    const [location, setlocation] = React.useState([]);
    const handleChangeLocation = (event) => {
        setlocation(event.target.value);
    };

    const [optional, setoptional] = React.useState([]);
    const handleChangeOptional = (event) => {
        setoptional(event.target.value);
    };

    const [catagory, setcatagory] = React.useState([]);
    const handleChangeCatagories = (event) => {
        setcatagory(event.target.value)
        console.log(catagory)
    };

    const handleChangeMultiple = (event) => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
        if (options[i].selected) {
            value.push(options[i].value);
        }
        }
        setcatagory(value);
    };

    const [calender, setcalender] = React.useState([]);
    const handleChangeCalender = (event) => {
        if (event.target.checked == true)
        {
            let newArr = calender
            newArr.push(event.target.id)
            setcalender(newArr)
        }
        else
        {
            let newArr = calender
            let index = newArr.indexOf(event.target.id)
            newArr.splice(index, 1)
            setcalender(newArr)
        }
        console.log(calender)
    }


    if (width > 500)
    {
        return (
             

            <Container maxWidth='md' style={{paddingBottom:100}}>
                <Typography variant='h3' align='center' className={classes.Header}>
                    Want to help us out? Let us know what you want below!
                </Typography>
                <div >
                    <Snackbar open={openResp} autoHideDuration={2500} onClose={handleExitResp}
                                anchorOrigin={{
                                vertical: 'center',
                                horizontal: 'center',
                            }}>
                        <Alert onClose={handleExitResp} severity="success" style={{    display: 'flex',}}>
                            Thank you!
                        </Alert>
                        {/* <Alert onClose={handleError} severity="">
                            Thank you!
                        </Alert> */}
                    </Snackbar>
                </div>
                <Grid container spacing={3}>

                    <Grid item xs={6}> 
                        <TextField
                            className={classes.input}
                            required
                            margin="dense"
                            variant="standard"
                            id="mail"
                            value={email}
                            label="Email Address"
                            type="email"
                            fullWidth
                            onChange={handleChangeEmail}
                        />
                        

                        <TextField
                            className={classes.input}                    
                            margin="dense"
                            variant="standard"
                            id="location"
                            label="In what Location?"
                            type="region"
                            value={location}
                            fullWidth
                            multiline
                            onChange={handleChangeLocation}
                        />
                    </Grid>                

                    <Grid item xs={6}> 
                        <div>

                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-mutiple-checkbox-label" >What do you want to learn?</InputLabel>
                                <Select
                                    labelId="demo-mutiple-checkbox-label"
                                    id="demo-mutiple-checkbox"
                                    multiple
                                    value={catagory}
                                    onChange={handleChangeCatagories}
                                    input={<Input />}
                                    renderValue={(selected) => selected.join(', ')}
                                    MenuProps={MenuProps}
                                >
                                    {cats.map((name) => (
                                    <MenuItem key={name} value={name}>
                                        <Checkbox checked={catagory.indexOf(name) > -1} />
                                        <ListItemText primary={name} />
                                    </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <TextField
                                className={classes.input}  
                                style={{marginTop:34}}                  
                                margin="dense"
                                variant="standard"
                                id="optionalCat"
                                label="Tell us what you want!"
                                type=""
                                fullWidth
                                disabled={!catagory.includes("Other...")}
                                value={optional}
                                multiline
                                onChange={handleChangeOptional}
                            />

                            </div>
                    </Grid>
                    
                </Grid>
                <Grid container spacing={3} style={{marginTop:'35px'}}>

                    <Grid item xs={12}>
                        <Typography style={{textAlign:'left'}}>
                            What's your availibility look like?
                        </Typography>
                        <TimeTable handleChange={handleChangeCalender} checkedarr={calender}/> 
                    </Grid>

                </Grid>
                <Grid container spacing={3}>

                    <Grid item xs={6}>
                        <Button 
                            variant="contained" 
                            color="primary-light" 
                            onClick={clear_form} 
                            style={{float:'left'}}
                        >
                            Clear
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            onClick={handleSubmit} 
                            style={{float:'right'}}
                        >
                            Submit
                        </Button>
                    </Grid>

                </Grid>
            </Container>
    
        
    );
    }
    else
    {
        return (
             

            <Container maxWidth='md' style={{paddingBottom:100}}>
                <Typography variant='h3' align='center' className={classes.Header}>
                    Want to help us out? Let us know what you want below!
                </Typography>
                <div >
                    <Snackbar open={openResp} autoHideDuration={2500} onClose={handleExitResp}
                                anchorOrigin={{
                                vertical: 'center',
                                horizontal: 'center',
                            }}>
                        <Alert onClose={handleExitResp} severity="success" style={{    display: 'flex',}}>
                            Thank you!
                        </Alert>
                        {/* <Alert onClose={handleError} severity="">
                            Thank you!
                        </Alert> */}
                    </Snackbar>
                </div>
                        <TextField
                            className={classes.input}
                            required
                            margin="dense"
                            variant="standard"
                            id="mail"
                            value={email}
                            label="Email Address"
                            type="email"
                            fullWidth
                            onChange={handleChangeEmail}
                        />
                        

                        <TextField
                            className={classes.input}                    
                            margin="dense"
                            variant="standard"
                            id="location"
                            label="In what Location?"
                            type="region"
                            value={location}
                            fullWidth
                            multiline
                            onChange={handleChangeLocation}
                        />
     
                        <div>

                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-mutiple-checkbox-label" >What do you want to learn?</InputLabel>
                                <Select
                                    labelId="demo-mutiple-checkbox-label"
                                    id="demo-mutiple-checkbox"
                                    multiple
                                    value={catagory}
                                    onChange={handleChangeCatagories}
                                    input={<Input />}
                                    renderValue={(selected) => selected.join(', ')}
                                    MenuProps={MenuProps}
                                >
                                    {cats.map((name) => (
                                    <MenuItem key={name} value={name}>
                                        <Checkbox checked={catagory.indexOf(name) > -1} />
                                        <ListItemText primary={name} />
                                    </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <TextField
                                className={classes.input}  
                                style={{marginTop:34}}                  
                                margin="dense"
                                variant="standard"
                                id="optionalCat"
                                label="Tell us what you want!"
                                type=""
                                fullWidth
                                disabled={!catagory.includes("Other...")}
                                value={optional}
                                multiline
                                onChange={handleChangeOptional}
                            />

                            </div>
            
     
                <Grid container spacing={3} style={{marginTop:'35px'}}>

                    <Grid item xs={12}>
                        <Typography style={{textAlign:'left'}}>
                            What's your availibility look like?
                        </Typography>
                        <TimeTable handleChange={handleChangeCalender} checkedarr={calender}/> 
                    </Grid>

                </Grid>
                <Grid container spacing={3}>

                    <Grid item xs={6}>
                        <Button 
                            variant="contained" 
                            color="primary-light" 
                            onClick={clear_form} 
                            style={{float:'left'}}
                        >
                            Clear
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            onClick={handleSubmit} 
                            style={{float:'right'}}
                        >
                            Submit
                        </Button>
                    </Grid>

                </Grid>
            </Container>
    
        
    );
    }

    
}


export default Form;



  