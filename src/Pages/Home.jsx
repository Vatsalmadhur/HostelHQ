import React from "react";
import { Box, Stack, Avatar, Typography, Link } from "@mui/material";
import Btn from "../Components/Btn";

import Circle from "../Components/Circle";
import image from "../../src/hostelImg.svg";

const Home = () => {
  return (
    <Box className="Home">
      <Box
        className="navbar"
        zIndex={2}
        position="absolute"
        top={0}
        sx={{
          width: "100%",
          height: "8vh",
          bgcolor:"rgb(92, 107, 192, 0.6)",
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
          <Typography variant="h5" fontWeight={800} zIndex={2}>
            HostelHQ
          </Typography>
          <Link href="/signup">
            <Btn value="SignUp" />
          </Link>
        </Stack>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        pl={8}
        flexDirection="column"
        height="100vh"
        width="100vw"
        overflow="hidden"
        className="body"
        position="relative"
      >
        <Typography variant="h1">HostelHQ</Typography>
        <Typography variant="h4" mb={2} color="#EB7C3E">
          The complete hostel management system.
        </Typography>

        <Link href="/login">
          <Btn value="Login" />
        </Link>
        <Circle x={-100} y={-65} r={130} />
        <Circle a={-150} b={-200} r={250} />
        <Circle a={350} b={200} r={10} />

        <Box
          display="flex"
          flexWrap="wrap"
          position="absolute"
          right={200}
          top={80}
          className="image"
        >
          <img height={500} width={500} src={image} alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
