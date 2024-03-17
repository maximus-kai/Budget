import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { Button, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import PriceChangeIcon from '@mui/icons-material/PriceChange';


export default function AddTransaction() {
  return (
   
      <div>
        <br/>
      <Typography gutterBottom 
      variant="h5" 
      align="center"
      component="div">
      Add New Transaction
      </Typography> 
      <TextField
          id="outlined-helperText"
          label="Description"
          defaultValue="Transport"
          helperText="Negative = Expense, Positive = Income"
        />
        <br/>
        <FormControl fullWidth >
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">₦</InputAdornment>}
            label="Amount"
          />
        <br/>
        <Button variant="contained" >Add Transaction
              <PriceChangeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 ,ml:1}} />
              </Button>
        </FormControl>
              
      </div>
    
  );
}


