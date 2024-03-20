import React from 'react';
import Stack from '@mui/material/Stack';
import { Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import AddTransaction from './AddTransaction';

const History = ({Transaction}) => {
  let sign; 
  let TheColor; 
  if (Transaction.something <0){
     sign = "-";
     TheColor = "#FF0000";
  }
    else{
     sign = "+";
     TheColor = "#00ff00";
  }
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="h5" component="div">
            {Transaction.description}
            </Typography>
            <Typography gutterBottom
            variant="h6" 
            align="center"
            color = {TheColor}
            // color="#FF0000"
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