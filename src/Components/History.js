import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';

export default function History() {
    return (
        <>
        <br/>
     <Typography gutterBottom 
     variant="h4" 
     align="center"
     component="div">
            History
     </Typography>
      <Card variant="outlined" >
        <Box sx={{ p: 2 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="h5" component="div">
            Cash
            </Typography>
            <Typography gutterBottom
            variant="h6" 
            align="center"
            color="#FF0000"
            component="div">
            - ₦400.00
            <Divider/>
            </Typography>
          </Stack>
          <Typography color="text.secondary" variant="body2">
            Cassava, Garri, Ewa...uhhunn...
          </Typography>
        </Box>
      </Card>
      </>
    );
  }