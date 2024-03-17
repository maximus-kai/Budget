import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/material';

const Balance = () => {
  return (
    <Box >

    <Stack
    sx={{ pt: 4 }}
    direction="row"
    spacing={2}
    justifyContent="center">
            <Typography
            variant="h4" 
            align="center"
            color="text.primary"
            gutterBottom>
            Your Balance:
            </Typography>

            <Typography 
            variant="h4" 
            align="center"
            color="black"
            gutterBottom>
            ₦10,000.00
            </Typography>
    </Stack>
  </Box>
  )
}

export default Balance