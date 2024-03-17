import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


const Summary = () => {
  return (
    <Card variant="outlined" sx={{ maxWidth: 360 }}>
        <Box sx={{ p: 2 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="h5" component="div">
            INCOME
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
            + ₦7.00
            </Typography>
          </Stack>
         
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="h5" component="div">
            EXPENSE
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
            - ₦3.00 
            </Typography>
          </Stack>
          
        </Box>
      </Card>
  )
    
}

export default Summary