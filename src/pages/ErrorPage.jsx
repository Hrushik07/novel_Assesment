import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function ErrorPage() {
    const Navigate=useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Typography variant="h3">
        Something went wrong in the application
      </Typography>

      <Button sx={{ mt: 3 }} variant="outlined" onClick={() => Navigate("/")}>
        GO HOME
      </Button>
    </Box>
  );
}

export default ErrorPage