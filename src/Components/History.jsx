import React from 'react';
import Stack from '@mui/material/Stack';
import { Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import AddTransaction from './AddTransaction';

const History = ({Transaction}) => {
  let sign;
  if (Transaction.something <0){
     sign = "-";
  }
    else{
     sign = "+";
  }
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="h5" component="div">
            {Transaction.description}
            </Typography>
            <Typography gutterBottom
            variant="h6" 
            align="center"
            color="#FF0000"
            component="div">
            {sign}₦{Math.abs(Transaction.something)}
            <Divider/>
            </Typography>
          </Stack>
    // <h1> {props.Transaction}</h1>
    
  )
}

export default History;
// console.log("from history",props.Transaction)