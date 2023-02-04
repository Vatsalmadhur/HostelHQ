import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Btn from '../Components/Btn'
import Table from '../Components/Table'

const Student = () => {
  return (
    <div className='Student'>
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
          <Link to="/complaint">
            <Btn value="Add Complain" />
          </Link>
        </Stack>
            </Box>

            <Box  sx={{mt:10 ,textAlign: 'center'}}>
              <h1>Student Detail</h1>
            </Box>

            <Box className="studentDetails" 
                sx={{
                    mt: 15
                }}
            >
                <Table />
            </Box>
    </div>
  )
}

export default Student