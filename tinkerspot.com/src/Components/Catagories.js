import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    
    marginTop:'27px',
    width:'100%'
  },
  input: {
    marginTop:'33px',
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

function getStyles(name, catagory, theme) {
  return {
    fontWeight:
      catagory.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Catagories(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [catagory, setcatagory] = React.useState([]);

  const handleChange = (event) => {
    setcatagory(event.target.value);
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

  return (
    <div>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label" >What do you want to learn?</InputLabel>
        <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            value={catagory}
            onChange={handleChange}
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
            margin="dense"
            variant="standard"
            id="optionalCat"
            label="Tell us what you want!"
            type=""
            fullWidth
            disabled
            multiline
            onChange={console.log('changed')}
        />
      
    </div>
  );
}
