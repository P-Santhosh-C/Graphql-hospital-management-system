import { React, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useMutation } from "@apollo/client";
import { ADD_DOCTOR } from "../GraphQLApollo/Mutation";

export default function AddDoctor() {
  const [createDoctor] = useMutation(ADD_DOCTOR);

  const [data, setData] = useState({
    userName: "",
    email: "",
    cell: "",
    category: "Doctor",
    specialist: "",
    password: "",
    confirmpassword: "",
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const add = () => {
    createDoctor({
      variables: {
        userName: data.userName,
        email: data.email,
        cell: data.cell,
        category: data.category,
        specialist: data.specialist,
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
          Doctor Register
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
          label="specialist"
          size="small"
          variant="outlined"
          name="specialist"
          value={data.specialist}
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
