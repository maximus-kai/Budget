import React,{useContext} from 'react';
import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/material';
import { GlobalContext } from '../context/GlobalState';


const Balance = () => {
  const {transactions} = useContext(GlobalContext);

  const Amount = transactions.map((eachTransaction)=> eachTransaction.something);
  const Total = Amount.reduce((acc,item)=>(acc += item),0).toFixed(2)


  return (
    <Box >

    <Stack
    sx={{ pt: 4 }}
    direction="row"
    spacing={2}
    justifyContent="center">
            <Typography
            variant="h4" 
            align="center"
            color="text.primary"
            gutterBottom>
            Your Balance:
            </Typography>

            <Typography 
            variant="h4" 
            align="center"
            color="black"
            gutterBottom>
            ₦{Total}
            </Typography>
    </Stack>
  </Box>
  )
}

export default Balance