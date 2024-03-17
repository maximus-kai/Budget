import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Balance = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
    <Typography variant="h1" gutterBottom>
    Your Balance
    </Typography>
    <Typography variant="h3" gutterBottom>
    ₦0.00
    </Typography>
  </Box>
  )
}

export default Balance