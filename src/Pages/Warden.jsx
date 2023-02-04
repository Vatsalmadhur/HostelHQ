
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Btn from '../Components/Btn'
import Table from '../Components/Table'
import BuildingBox from '../Components/BuildingBox'


const Warden = () => {
    return (
        <div className='Warden' >
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
          <Link to="/addbuilding">
            <Btn value="Add Hostel" />
          </Link>
        </Stack>
            </Box>

            <Box className="wardenDetails" 
                sx={{
                    mt: 15
                }}
            >
                <Table />
            </Box>

            <Box className="hostelDetails"

                sx={{
                    width: "100vw",
                    boxSizing: "border-box",
                    height: "auto",
                    mt: 15,
                    bgcolor: "coral",
                    display: "flex",
                    flexDirection:"row",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 2,
                    scrollX: "auto",
                }}
            >
                <BuildingBox />
                <BuildingBox />
                <BuildingBox />
                <BuildingBox />
                <BuildingBox />
                <BuildingBox />
                <BuildingBox />
            </Box>
        </div>
    )
}

export default Warden