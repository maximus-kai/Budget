import React,{useContext} from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import { GlobalContext } from '../context/GlobalState';



const Summary = () => {

  const {transactions} = useContext(GlobalContext)
  
  const Amount = transactions.map((eachTransaction)=> eachTransaction.something);
  const Income = Amount.filter(eachItem=>eachItem>0).reduce((acc,item)=>(acc += item),0).toFixed(2)
  const Expense = (Amount.filter(eachItem=>eachItem<0).reduce((acc,item)=>(acc += item),0)*1).toFixed(2)
  
  return (
    <Card variant="outlined"   >
        <Box sx={{ p: 2 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="h5" component="div">
            INCOME
            </Typography>
            <Typography gutterBottom
             variant="h6"
             color="#00ff00"
             component="div">
            +₦{Income}
            <Divider/>
            </Typography>
          </Stack>
         
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="h5" component="div">
            EXPENSE
            </Typography>
            <Typography gutterBottom 
            variant="h6" 
            component="div"
            align="center"
            color="#FF0000"
            >
            -₦{Math.abs(Expense)} 
            <Divider/>
            </Typography>
          </Stack>
          
        </Box>
      </Card>
  )
    
}

export default Summary