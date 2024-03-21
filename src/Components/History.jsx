import React,{useContext} from 'react';
import Stack from '@mui/material/Stack';
import { Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import { GlobalContext } from '../context/GlobalState';


const History = ({Transaction}) => {
  const {deleteTransaction} = useContext(GlobalContext);
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
  return (<>
  <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="h5" onClick={()=>deleteTransaction(Transaction.id)} component="div" color="#FF0000">
            X
            </Typography>
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
  </Stack>
          
          </>
  
    
  )
}

export default History;
// console.log("from history",props.Transaction)