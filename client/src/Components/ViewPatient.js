import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { getRegisters } from "../GraphQLApollo/Querie";

export default function ViewPatient() {
  const { error, loading, data } = useQuery(getRegisters);
  const [patientData, setPatientData] = useState([]);

  useEffect(() => {
    if (data) {
      setPatientData(data.getAllRegisters);
    }
    if (loading) {
      console.log(loading);
      return <div>Loading...</div>;
    }
    if (error) {
      console.log(error);
    }
  }, [data, error, loading]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">cell</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patientData.map((values, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell >
                {index + 1}
              </TableCell>
              <TableCell align="center"> {values.userName}</TableCell>
              <TableCell align="center">{values.email}</TableCell>
              <TableCell align="center">{values.cell}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
