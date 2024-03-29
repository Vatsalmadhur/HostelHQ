import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function LogIn() {
  const [loginAs, setloginAs] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const handleDropDown = (e) => {
    console.log(e.target.value);
    setloginAs(e.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add New Building
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          

          <TextField
            margin="normal"
            required
            fullWidth
            id="text"
            label="Building Name"
            name=""
            autoComplete=""
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="text"
            label="Number of Floors"
            name=""
            autoComplete=""
            autoFocus
          />

<TextField
            margin="normal"
            required
            fullWidth
            id="text"
            label="Total Rooms"
            name=""
            autoComplete=""
            autoFocus
          />
          
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Sure to add a new building"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add Building
          </Button>
          
        </Box>
      </Box>
    </Container>
  );
}

