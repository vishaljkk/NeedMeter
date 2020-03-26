import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const datas = [
    {name:'Ahmednagar',op:4.85},
    {name:'Aurangabad',op:4.55},
    {name:'Mumbai City',op:25.83},
    {name:'Mumbai Suburban',op:1.52},
    {name:'Nagpur',op:7.49},
    {name:'Pune',op:48.68},
    {name:'Raigad',op:0.83},
    {name:'Ratnagiri',op:2.27},
    {name:'Sangli',op:0.0},
    {name:'Satara',op:0.0},
    {name:'Thane',op:0.83},
    {name:'Yavatmal',op:3.17},
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>City Name</TableCell>
            <TableCell align="right">NeedPercent</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map(data => (
            <TableRow key={data.name}>
              <TableCell component="th" scope="row">
                {data.name}
              </TableCell>
              <TableCell align="right">{data.op}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}











