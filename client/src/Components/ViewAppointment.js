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
import { getAppointment } from "../GraphQLApollo/Querie";

export default function ViewAppointment() {
  const { error, loading, data } = useQuery(getAppointment);
  const [appointmentData, setAppointmentData] = useState([]);

  useEffect(() => {
    if (data) {
      setAppointmentData(data.getAllAppointment);
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
      <Table sx={{ minWidth: 650 }} stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell align="center">Doctor Name</TableCell>
            <TableCell align="center">Problem</TableCell>
            <TableCell align="center">Appointment Status</TableCell>
            <TableCell align="center">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointmentData.map((values, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell align="center"> {values.doctorName}</TableCell>
              <TableCell align="center">{values.problem}</TableCell>
              <TableCell align="center">{values.appStatus}</TableCell>
              <TableCell align="center">{values.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
