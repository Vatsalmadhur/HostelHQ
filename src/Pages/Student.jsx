import React from 'react'

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
          <Link to="/complain-form">
            <Btn value="Complain" />
          </Link>
        </Stack>
            </Box>
    </div>
  )
}

export default Student