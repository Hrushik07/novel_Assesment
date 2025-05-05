import { Box, Typography } from '@mui/material'
import React from 'react'

function ErrorPage() {
  return (
    <Box>
        <Typography color='error'>Error fetching rates</Typography>
    </Box>
  )
}

export default ErrorPage