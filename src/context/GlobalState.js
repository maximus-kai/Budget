import React,{createContext,useReducer} from 'react';
import AppReducer from './AppReducer';


// Initial State
const initialState = {
   transactions: [
        {id:1,description:"Food",something: -1000},
        {id:2,description:"Transport",something: -2000},
        {id:3,description:"Monkey",something: +5000},
        {id:4,description:"Care",something: +1200},
    ]
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
return(
    <GlobalContext.Provider value={
        {
            transactions: state.transactions,
            deleteTransaction
        }
        }>
        {children}
    </GlobalContext.Provider>
)
}
