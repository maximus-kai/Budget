import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';


export default function AddTransaction() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
      <TextField
          id="outlined-helperText"
          label="Description"
          defaultValue="Transport"
          helperText="Negative = Expense, Positive = Income"
        />
      <Typography gutterBottom variant="h5" component="div">
            Add New Transaction
            </Typography> 
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">₦</InputAdornment>}
            label="Amount"
          />
        </FormControl>
      </div>
    </Box>
  );
}


