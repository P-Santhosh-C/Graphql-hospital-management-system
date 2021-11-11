import { React, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { useMutation, useQuery } from "@apollo/client";
import { APP_BOOKING } from "../GraphQLApollo/Mutation";
import { getDoctors } from "../GraphQLApollo/Querie";

export default function BookAppointment() {
  const { error, loading, data } = useQuery(getDoctors);
  const [createAppointment] = useMutation(APP_BOOKING);
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

  const [datas, setDatas] = useState({
    patientName: "",
    doctorName: "",
    problem: "",
    appStatus: "",
    date: "",
  });

  const changeHandler = (e) => {
    setDatas({ ...datas, [e.target.name]: e.target.value });
  };

  const add = () => {
    createAppointment({
      variables: {
        patientName: datas.patientName,
        doctorName: datas.doctorName,
        problem: datas.problem,
        appStatus: datas.appStatus,
        date: datas.date,
      },
    });
    window.location.reload();
  };

  return (
    <div>
      <Grid align="center">
        <h2 style={{ fontSize: "x-large", color: "#23609e" }}>
          Appointment Book
        </h2>
        <TextField
          label="patientName"
          size="small"
          variant="outlined"
          name="patientName"
          value={datas.patientName}
          onChange={changeHandler}
        />
        <br />
        <br />
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Select A Doctor :
          <Select
            value={datas.doctorName}
            name="doctorName"
            size="small"
            onChange={changeHandler}
          >
            {doctorData.map((values, index) => (
              <MenuItem value={values.userName}>{values.userName}</MenuItem>
            ))}
          </Select>
        </InputLabel>{" "}
        <br /> <br />
        <TextField
          label="problem"
          size="small"
          variant="outlined"
          name="problem"
          value={datas.problem}
          onChange={changeHandler}
        />
        <br /> <br />
        <TextField
          label="appStatus"
          size="small"
          variant="outlined"
          name="appStatus"
          value={datas.appStatus}
          onChange={changeHandler}
        />
        <br /> <br />
        <TextField
          label="date"
          size="small"
          variant="outlined"
          name="date"
          value={datas.date}
          onChange={changeHandler}
        />{" "}
        <br />
        <br />
        <Button variant="contained" onClick={() => add()}>
          Submit
        </Button>
      </Grid>
    </div>
  );
}
