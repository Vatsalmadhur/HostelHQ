import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, floors, rooms) {
  return { name, floors, rooms };
}

const rows = [
  createData("Building 1", 10, 60),
  createData("Building 2", 10, 60),
  createData("Building 3", 10, 60),
  createData("Building 4", 10, 60),
  createData("Building 5", 10, 60),
  createData("Building 6", 10, 60),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Building Name</TableCell>
            <TableCell align="left">Floors</TableCell>
            <TableCell align="left">Rooms</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.floors}</TableCell>
              <TableCell align="left">{row.rooms}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

