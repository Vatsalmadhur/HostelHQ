import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Day, Breakfast, Lunch, Dinner) {
  return { Day, Breakfast, Lunch, Dinner };
}

const rows = [
  createData('Day1', 'lorem', 'ipsum','sum'),
  createData('Day2', 'lorem', 'ipsum','sum'),
  createData('Day3', 'lorem', 'ipsum','sum'),
  createData('Day4', 'lorem', 'ipsum','sum'),
  createData('Day5', 'lorem', 'ipsum','sum'),
  createData('Day6', 'lorem', 'ipsum','sum'),
  createData('Day7', 'lorem', 'ipsum','sum'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Days</TableCell>
            <TableCell align="right">Breakfast</TableCell>
            <TableCell align="right">Lunch</TableCell>
            <TableCell align="right">Dinner</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Day}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Day}
              </TableCell>
              <TableCell align="right">{row.Breakfast}</TableCell>
              <TableCell align="right">{row.Lunch}</TableCell>
              <TableCell align="right">{row.Dinner}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
