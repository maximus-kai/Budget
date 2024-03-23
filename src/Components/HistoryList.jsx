import React, {useContext}from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { GlobalContext } from '../context/GlobalState';
import History from './History';

export default function HistoryList() {
  const {transactions} = useContext(GlobalContext);
    return (
        <>
        <br/>
     <Typography gutterBottom 
     variant="h4" 
     align="center"
     component="div">
            History
     </Typography>
      <Card variant="outlined" >
        <Box sx={{ p: 2 , m:5 }}>
          {
            transactions.map((eachTransaction)=>
            (<History key = {eachTransaction.id} Transaction = {eachTransaction} />)
            )
          }
          <Typography color="text.secondary" variant="body2">
            Cassava, Garri, Ewa...uhhunn...
          </Typography>
        </Box>
      </Card>
      </>
    );
  }