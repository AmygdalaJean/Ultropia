import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { Checkbox } from '@material-ui/core';

import React from "react";
import Paper from '@material-ui/core/Paper'

import "./../static/App.css";
import { Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid'
import { TextField } from "@material-ui/core";

import Logo from './Images/tinkerLogoEdit2.png'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const days = ['M', 'Tu', 'W', 'Th', 'F', 'Sa', 'Su'];
  const times = ['Morning', 'Mid Day', 'Afternoon'];
  
  function createData(time) {
    return (     
        <div>
            <div>
                {time}
            </div>
            {days.map((day) => (
                <Typography>
                    test
                </Typography>
            ))}     
        </div>           
    )
  }
  
  const rows = [
    createData('Morning'),
    createData('Mid Day'),
    createData('Afternoon'),
  ];


function TimeTable(props) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        {days.map((day) => (
                            <TableCell align="center">{day}</TableCell>
                        ))}
                     
                    </TableRow>
                </TableHead>
                <TableBody>
                    {times.map((time) => (
                        <TableRow key={time}>
                            <TableCell component="th" scope="row">
                                {time}
                            </TableCell>
                            {days.map((day) => (
                                <TableCell align="center">
                                    <Checkbox 
                                        id={time + day}
                                        size='small'
                                    />
                                </TableCell>
                            ))}                           
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
      </TableContainer>
    );
}


export default TimeTable;