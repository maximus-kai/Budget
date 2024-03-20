import * as React from 'react';
import { useState,useContext } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { Button, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import { GlobalContext } from '../context/GlobalState';

export default function AddTransaction() {
  const context = useContext(GlobalContext);
  console.log("context:",context);

    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);
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
          value={text}
          onChange={(e)=>{setText(e.target.value);console.log(e.target.value)}}
          defaultValue="Transport"
          helperText="Negative = Expense, Positive = Income"
        />
        <br/>
        <FormControl fullWidth >
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment 
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
            position="start">₦</InputAdornment>}
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


