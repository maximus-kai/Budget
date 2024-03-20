import React,{createContext,useReducer} from 'react';
import AppReducer from './AppReducer';


// Initial State
const initialState = {
   transactions: [
        {id:1,name:"min",something: -20},
        {id:2,name:"tin",something: 300},
        {id:3,name:"box",something: -10},
        {id:4,name:"box",something: -70},
    ]
}
// Create Context
export const GlobalContext = createContext(initialState);

// create your provider
export const GlobalProvider =({children})=>{
const [state,dispatch] = useReducer(AppReducer,initialState)
return(
    <GlobalContext.Provider value={{transactions: state.transactions}}>
        {children}
    </GlobalContext.Provider>
)
}
