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
    const {addTransaction} = useContext(GlobalContext);
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);

    const Submit =(e)=>{
      e.preventDefault();
      const transactionParce = {
        id: Math.floor(Math.random()*10000000) ,
        description: text,
        something: +amount
      }
      addTransaction(transactionParce)
    }

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
          value = {text}
          defaultValue="Transport"
          onChange={(e)=> {setText(e.target.value);console.log(e.target.value)}}
          helperText="Negative: Nah Billin', Positive: Nah Income"
        />
        <br/>
        <FormControl 
        fullWidth >
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value = {amount}
            onChange={(e)=> {setAmount(e.target.value);console.log(e.target.value) }}
            startAdornment={<InputAdornment 
            position="start">₦</InputAdornment>}
            label="Amount"
          />
        <br/>
        <Button 
        onClick={Submit}
        variant="contained" 
        >Add Transaction
              <PriceChangeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 ,ml:1}} />
              </Button>
        </FormControl>
              
      </div>
    
  );
}


