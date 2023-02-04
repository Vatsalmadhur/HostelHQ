import React from "react";
import { Box, Stack, Avatar, Typography, Link } from "@mui/material";
import Btn from "../Components/Btn";

const Home = () => {
  return (
    <div className="Home">
      <Box
        className="navbar"
        position="absolute"
        top={0}
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
          <Typography variant="h5" fontWeight={800}>
            HostelHQ
          </Typography>
          <Btn value="SignUp" />
        </Stack>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        pl={8}
        flexDirection="column"
        minHeight="100vh"
        className="body"
      >
        <h1>HostelHQ</h1>
        <Typography variant="h5" mb={2} color="#EB7C3E">
          The complete hostel management system
        </Typography>

        <Link>
          <Btn value="Login" />
        </Link>
      </Box>
    </div>
  );
};

export default Home;
