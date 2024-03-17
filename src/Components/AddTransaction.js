import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';


export default function AddTransaction() {



  // const AddTransaction = () => {
//   return (
//     <div>
//        
//         <h2>Description</h2>
//         <input placeHolder='Description'>
//         </input>
//         <h2>Amount-(Negative = Expense, Positive = Income) </h2>
//         <input placeHolder='Amount'>
//         </input>
//         <Button variant="contained">Add Transaction</Button>
//     </div>
//   )
// }

// export default AddTransaction
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
      <TextField
          id="outlined-helperText"
          label="Description"
          defaultValue="Transport"
          helperText="Negative = Expense, Positive = Income"
        />
      <h2>Add New Transaction</h2>  
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


