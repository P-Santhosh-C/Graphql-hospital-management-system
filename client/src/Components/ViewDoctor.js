import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { React, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { getDoctors } from "../GraphQLApollo/Querie";

export default function ViewPatient() {
  const { error, loading, data } = useQuery(getDoctors);
  const [doctorData, setDoctorData] = useState([]);

  useEffect(() => {
    if (data) {
      setDoctorData(data.getAllDoctors);
    }
    if (loading) {
      console.log(loading);
      return <div>Loading...</div>;
    }
    if (error) {
      console.log(error);
    } else {
    }
  }, [data, error, loading]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Cell</TableCell>
            <TableCell align="center">Specialist</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {doctorData.map((values, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell align="center"> {values.userName}</TableCell>
              <TableCell align="center">{values.email}</TableCell>
              <TableCell align="center">{values.cell}</TableCell>
              <TableCell align="center">{values.specialist}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
