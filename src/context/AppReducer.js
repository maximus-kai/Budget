export default (state,action) =>{
    switch(action.type){
        case "DELETE_TRANSACTION":
        return {
            ...state,
            transactions: state.transactions.filter(anyOfTheTransactions=>anyOfTheTransactions.id !== action.payload)
        }
        default:
            return state;
    }
}