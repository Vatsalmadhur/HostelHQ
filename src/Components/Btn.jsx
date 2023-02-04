import React from 'react'
import {Button} from '@mui/material'

const Btn = (props) => {
  return (
    <div>
         <Button 
            sx={{
                bgcolor: 'primary.main',
                
                "&:hover": {bgcolor: 'primary.main'},
                color:'white'

                
            }}
            textDecoration = "none"
            variant="contained"
         >{props.value}
         </Button>
    </div>
  )
}

export default Btn