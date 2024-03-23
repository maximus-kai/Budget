import React,{createContext,useReducer} from 'react';
import AppReducer from './AppReducer';


// Initial State
const initialState = {
   transactions: []
}
// Create Context
export const GlobalContext = createContext(initialState);
// create your provider
export const GlobalProvider =({children})=>{
    const [state,dispatch] = useReducer(AppReducer,initialState)
    function deleteTransaction(id){
        dispatch(
            {
                type: "DELETE_TRANSACTION",
                payload: id,
            }
        )
    }
    function addTransaction(givenTransaction){
        dispatch(
            {
                type: "ADD_TRANSACTION",
                payload: givenTransaction,
            }
        )
    }
return(
    <GlobalContext.Provider value={
        {
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }
        }>
        {children}
    </GlobalContext.Provider>
)
}
