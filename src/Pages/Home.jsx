import React from "react";
import { Box, Stack, Avatar } from "@mui/material";
import Btn from "../Components/Btn";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <Box
        className="navbar"
        sx={{
          width: "100%",
          height: "8vh",
          bgcolor: "wheat",
        }}
      >
        <Stack
          direction="row"
          sx={{
            p: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Btn value="SignUp" />
        </Stack>
      </Box>

      <Box className="body">
        <Stack direction="column">
          <h1>HostelHQ</h1>
          <h4>The complete hostel management system</h4>

          <Link to="/login">
            <Btn value="Login" />
          </Link>
        </Stack>
      </Box>
    </div>
  );
};

export default Home;

