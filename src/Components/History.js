import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function History() {
    return (
      <Card variant="outlined" sx={{ maxWidth: 360 }}>
        <Box sx={{ p: 2 }}>
        <div>
        <h2>History</h2>

    </div>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="h5" component="div">
            Cash
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
            - ₦2.00
            </Typography>
          </Stack>
          <Typography color="text.secondary" variant="body2">
            Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
            just down the hall.
          </Typography>
        </Box>
      </Card>
    );
  }