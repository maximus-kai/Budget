import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';


const Summary = () => {
  return (
    <Card variant="outlined"   >
        <Box sx={{ p: 2 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="h5" component="div">
            INCOME
            </Typography>
            <Typography gutterBottom
             variant="h6"
             color="#00ff00"
             component="div">
            + ₦1500.00
            <Divider/>
            </Typography>
          </Stack>
         
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="h5" component="div">
            EXPENSE
            </Typography>
            <Typography gutterBottom 
            variant="h6" 
            component="div"
            align="center"
            color="#FF0000"
            >
            - ₦13,200.00 
            <Divider/>
            </Typography>
          </Stack>
          
        </Box>
      </Card>
  )
    
}

export default Summary