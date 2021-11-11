import { React, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useMutation } from "@apollo/client";
import { ADD_PATIENT } from "../GraphQLApollo/Mutation";

export default function AddPatient() {
  const [createUser] = useMutation(ADD_PATIENT);

  const [data, setData] = useState({
    userName: "",
    email: "",
    cell: "",
    category: "Patient",
    password: "",
    confirmpassword: "",
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const add = () => {
    createUser({
      variables: {
        userName: data.userName,
        email: data.email,
        cell: data.cell,
        category: data.category,
        password: data.password,
        confirmpassword: data.confirmpassword,
      },
    });
    window.location.reload();
  };

  return (
    <div>
      <Grid align="center">
        <h2 style={{ fontSize: "x-large", color: "#23609e" }}>
          Patient Register
        </h2>
        <TextField
          label="Name"
          size="small"
          variant="outlined"
          name="userName"
          value={data.userName}
          onChange={changeHandler}
        />
        <br />
        <br />
        <TextField
          label="Email"
          size="small"
          variant="outlined"
          name="email"
          value={data.email}
          onChange={changeHandler}
        />
        <br /> <br />
        <TextField
          label="Cell"
          size="small"
          variant="outlined"
          name="cell"
          value={data.cell}
          onChange={changeHandler}
        />
        <br /> <br />
        <TextField
          label="Password"
          size="small"
          variant="outlined"
          type="password"
          name="password"
          value={data.password}
          onChange={changeHandler}
        />
        <br /> <br />
        <TextField
          label="confirmpassword"
          size="small"
          variant="outlined"
          type="password"
          name="confirmpassword"
          value={data.confirmpassword}
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
